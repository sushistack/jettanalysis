import { crawl } from './crawler'
import siteDoctor from './site-doctor'

const corsFreeUrl = (url) => `https://cors.bridged.cc/${url}`

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

export async function createDiagnosis(url) {
  const config = {
    headers: { 'x-requested-with': 'XMLHttpRequest' }
  }
  const rawHtml = await crawl(corsFreeUrl(url), config)
  const robots = await crawl(corsFreeUrl(`${getOriginFrom(url)}/robots.txt`), config)
  siteDoctor.diagnose(url, rawHtml, robots)

  return siteDoctor.getDiagnosis()
}