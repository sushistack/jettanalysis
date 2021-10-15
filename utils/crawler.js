import axios from 'axios'

const requestHandle = (res, resolve, reject) => {
  switch (res.status) {
    case 200: return resolve({
      resultCode: 0,
      headers: res.headers,
      body: res.data
    })
    default: return resolve({ resultCode: -1, headers: {}, body: '' })
  }
}

const getErrorReason = (error) => {
  if (!error.response) {
    return '서버에서 알 수 없는 에러가 발생하였습니다.'
  }
  switch (error.response.status) {
    case 400: return '잘못된 요청입니다.'
    case 401: return '인증에 실패하였습니다.'
    case 403: return '접근이 금지된 요청입니다.'
    case 404: return '페이지를 찾을 수 없습니다.'
    case 503: return '일시적으로 서버에서 응답을 받을 수 없습니다.'
    default: return '서버에서 알 수 없는 에러가 발생하였습니다.'
  }
}

function crawl(url, config = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, config)
      .then(res => { requestHandle(res, resolve, reject) })
      .catch(err => {
        console.log('err', err)
        console.error({ statusCode: err.response && err.response.status ? err.response.status : 500, message: getErrorReason(err) })
        resolve({ resultCode: -1, headers: {}, body: '' })
       })
  })
}

export { crawl }
