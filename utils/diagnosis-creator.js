import { crawl } from './crawler'
import siteDoctor from './site-doctor'

const corsFreeUrl = (url) => `https://mute-wood-81e1.kjm81812.workers.dev/?url=${url}`

const WHITE_LIST = [
  { 'google.com': 'www.google.com' }
]

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

const replaceWhiteList = url => {
  for (let i = 0; i < WHITE_LIST.length; i += 1) {
    for (let key in WHITE_LIST[i]) {
      if (url.indexOf(key) > -1) {
        return url.replace(key, WHITE_LIST[i][key])
      }
    }
  }
  return url
}

export async function createDiagnosis(url) {

  url = replaceWhiteList(url)

  const res = await crawl(corsFreeUrl(url))
  const robots = await crawl(corsFreeUrl(`${getOriginFrom(url)}/robots.txt`)).body

  if (res.resultCode === -1) {
    return null
  }

  siteDoctor.diagnose(url, res.headers, res.body, robots)

  return siteDoctor.getDiagnosis()
}