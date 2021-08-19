const LIMITER = {
  DESKTOP: {
    TITLE: { MIN: 200, MAX: 580 },
    DESC: { MIN: 400, MAX: 1000 }
  },
  MOBILE: {
    TITLE: { MIN: 200, MAX: 550 },
    DESC: { MIN: 400, MAX: 990 }
  }
}

const getPixelHelperElement = () => {
  const hiddenPlace = document.createElement('div')
  const placeOfTitle = document.createElement('a')
  const placeOfDesc = document.createElement('span')

  hiddenPlace.id = 'pixel-helper'
  hiddenPlace.style.visibility = 'hidden'

  placeOfTitle.id = 'title-helper'
  placeOfTitle.style.fontSize = '20px'
  placeOfTitle.style.fontFamily = 'arial, sans-serif'
  placeOfTitle.style.whiteSpace = 'nowrap'
  placeOfTitle.style.lineHeight = '1.3'

  placeOfDesc.id = 'desc-helper'
  placeOfDesc.style.fontSize = '14px'
  placeOfDesc.style.fontFamily = 'font-family: arial, sans-serif'
  placeOfDesc.style.whiteSpace = 'nowrap'
  placeOfDesc.style.lineHeight = '1.57'

  hiddenPlace.appendChild(placeOfTitle)
  hiddenPlace.appendChild(placeOfDesc)

  return hiddenPlace
}

const handleType = (type) => {
  switch (type) {
    case 'TITLE': return 'title-helper'
    case 'DESC': return 'desc-helper'
  }
}

const getPixel = (type, text) => {
  const el = document.querySelector(`#${handleType(type)}`)
  el.innerText = text
  const width = el.offsetWidth
  el.innerText = ''
  return width
}

const getLimiter = (type, isMobile) => {
  switch (isMobile) {
    case true: switch (type) {
      case 'TITLE': return LIMITER.MOBILE.TITLE
      case 'DESC': return LIMITER.MOBILE.DESC
    }
    case false: switch (type) {
      case 'TITLE': return LIMITER.DESKTOP.TITLE
      case 'DESC': return LIMITER.DESKTOP.DESC
    }
  }
}

const getTextLimitedByPixel = (type, words, isMobile) => {
  const pixelHelper = document.querySelector('#pixel-helper')
  if (!pixelHelper) {
    const helper = getPixelHelperElement()
    document.body.appendChild(helper)
  }

  const limiter = getLimiter(type, isMobile)
  let text = ''
  let px = 0
  if (words.length === 1) {
    const word = words[0]
    for (let i = 0; i < word.length; i += 1) {
      px = getPixel(type, text)
      if (px > limiter.MAX) {
        return `${text}...`
      }
      text += word.charAt(i)
    }
  } else {
    for (let i = 0; i < words.length; i += 1) {
      px = getPixel(type, text)
      if (px > limiter.MAX) {
        return `${text}...`
      }
      text += `${words[i]} `
    }
  }
  return text.trim()
}

export { LIMITER, getPixelHelperElement, getPixel, getTextLimitedByPixel }