import { crawl } from './crawler'
import siteDoctor from './site-doctor'

const corsFreeUrl = (url) => `https://mute-wood-81e1.kjm81812.workers.dev/?url=${url}`

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

export async function createDiagnosis(url) {
  const res = await crawl(corsFreeUrl(url), config)
  const robots = await crawl(corsFreeUrl(`${getOriginFrom(url)}/robots.txt`), config).body

  if (res.resultCode === -1) {
    return null
  }

  siteDoctor.diagnose(url, res.headers, res.body, robots)

  return siteDoctor.getDiagnosis()
}