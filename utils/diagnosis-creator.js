import { crawl } from './crawler'
import siteDoctor from './site-doctor'

const corsFreeUrl = (url) => `https://cors.bridged.cc/${url}`

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

export async function createDiagnosis(url) {
  const config = { headers: { 'x-requested-with': 'XMLHttpRequest' } }
  const res = await crawl(corsFreeUrl(url), config)
  const robots = await crawl(corsFreeUrl(`${getOriginFrom(url)}/robots.txt`), config).body

  if (res.resultCode === -1) {
    return null
  }

  siteDoctor.diagnose(url, res.headers, res.body, robots)

  return siteDoctor.getDiagnosis()
}