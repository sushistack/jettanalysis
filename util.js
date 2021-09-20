const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`
const KAKAO_SDK_SCRIPT_ID = 'kakao-sdk-script'

const smartUrl = url => {
  const regex = /^(?:[a-z]+:)?\/\//i
  if (regex.test(url)) return url
  if (url.charAt(0) !== '/') url = `/${url}`
  return `${FRONTEND_BASE_URL}${url}`
}

const loadKakaoSdk = (callback) => {
  let script = document.querySelector(`#${KAKAO_SDK_SCRIPT_ID}`)
  
  if (script) {
    callback && callback()
    return
  }

  script = document.createElement('script')
  script.id = KAKAO_SDK_SCRIPT_ID
  script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
  script.addEventListener('load', function (e) {
    Kakao.init('33d3fefda63de9dadf73b14cd69f8d93')
    callback && callback()
  })
  document.body.appendChild(script)
}

export { smartUrl, loadKakaoSdk }