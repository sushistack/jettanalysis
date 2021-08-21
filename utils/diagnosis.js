import { LIMITER } from './pixel-calculator'

let instance = null

const LINK_LIMITER = {
  INTERNAL: { MIN: 1, MAX: 100, RECOMMEND_MAX: 100 },
  EXTERNAL: { MIN: 0, MAX: 20, RECOMMEND_MAX: 3 }
}

const getOriginFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.origin
}

const getPathnameFrom = (url) => {
  const a = document.createElement('a')
  a.href = url
  return a.pathname
}

const getDoctypeText = (doctype) => {
  const node = doctype
  return `<!DOCTYPE ${node.name}${node.publicId ? ' PUBLIC"' + node.publicId + '"' : ''}${!node.publicId && node.systemId ? ' SYSTEM' : ''}${node.systemId ? ' "' + node.systemId + '"' : ''}>`
}

const truncate = (input) => input.length > 30 ? `${input.substring(0, 30)}...` : input

Array.prototype.ipush = function (isValid, text, isWarn = false) {
  return this.push({
    isValid: isValid,
    isWarn: isWarn,
    text: text
  })
}

Array.prototype.icode = function () {
  if (this.every(i => i.isValid)) return 'PASSED'
  if (this.every(i => !i.isValid)) return 'FAILED'
  return 'WARNING'
}

class Diagnosis {
  constructor () {
    if (instance) {
      instance.init()
      return instance
    }
    this.meta = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.quality = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.structure = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.link = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.url = 'https://jettanalysis.com'
    instance = this
  }

  init () {
    this.meta = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.quality = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.structure = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.link = { head: { failed: 0, warning: 0, passed: 0 }, body: [] }
    this.url = 'https://jettanalysis.com'
  }

  get () {
    return {
      score: this.getScore(),
      meta: this.meta,
      quality: this.quality,
      structure: this.structure,
      link: this.link
    }
  }

  // 메타 명세서 시작

  setDomain (domain) {
    const issues = []
    issues.ipush(
      !domain.isSubDomain,
      `도메인이 서브도메인을 포함하고 ${domain.isSubDomain ? '있습니다.' : '있지 않습니다.'}`
    )

    issues.ipush(
      domain.isValidLength,
      `${domain.isValidLength ? '적절한 길이의' : '너무 긴 길이의'} 도메인 입니다.`,
      !domain.isValidLength
    )

    const body = {
      validCode: issues.icode(),
      title: domain.name,
      value: domain.self,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }

    this.add('meta', issues, body)
  }

  setUrl (url) {
    this.url = url.self
    const issues = []

    issues.ipush(
      !url.hasParameters,
      `URL에 파라미터가 포함되어 ${url.hasParameters ? '있습니다.' : '있지 않습니다.'}`
    )

    issues.ipush(
      !url.hasManySubdirectories,
      `URL에 너무 많은 서브 디렉토리(/)가 포함되어 ${url.hasManySubdirectories ? '있습니다.' : '있지 않습니다.'}`
    )

    const body = {
      validCode: issues.icode(),
      title: url.name,
      value: url.self,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }

    this.add('meta', issues, body)
  }

  setDoctype (doctype) {
    const issues = []

    issues.ipush(
      doctype.exist,
      `${doctype.name}이(가) 존재${doctype.exist ? '합니다.' : '하지 않습니다.'}`
    )

    if (doctype.exist) {
      issues.ipush(
        doctype.isDoctypeLocatedFirst,
        `${doctype.name}이(가) 문서 첫 번째에 ${doctype.isDoctypeLocatedFirst ? ' 위치에 있습니다.' : ' 위치에 있지 않습니다.'}`
      )

      issues.ipush(
        doctype.isHtml5,
        `문서 유형이 HTML5${doctype.isHtml5 ? ' 입니다.' : '이(가) 아닙니다.'}`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: doctype.name,
      value: doctype.exist ? getDoctypeText(doctype.self) : null,
      descType: 'TEXT',
      details: issues,
      importance: 1
    }
    
    this.add('meta', issues, body)
  }

  setLang (lang) {
    const issues = []
    
    issues.ipush(
      lang.exist,
      `${lang.name}이(가) 정의되어 ${lang.exist ? '있습니다.' : '있지 않습니다.'}`
    )

    const body = {
      validCode: issues.icode(),
      title: lang.name,
      value: lang.exist ? `HTML에 정의된 언어: ${lang.self}` : null,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }

    this.add('meta', issues, body)
  }

  setTitle (title) {
    const issues = []

    issues.ipush(
      title.exist,
      `페이지 제목(title) 태그가 정의되어 ${title.exist ? '있습니다.' : '있지 않습니다.'}`
    )

    if (title.exist) {
      const checker = {
        d: {
          isLong: title.size > LIMITER.DESKTOP.TITLE.MAX,
          isShot: title.size < LIMITER.DESKTOP.TITLE.MIN
        },
        m: {
          isLong: title.size > LIMITER.MOBILE.TITLE.MAX,
          isShot: title.size < LIMITER.MOBILE.TITLE.MIN
        }
      }
      issues.ipush(
        title.desktop.isSizeValid,
        `PC 화면에서 ${checker.d.isLong ? '너무 긴' : checker.d.isShot ? '너무 짧은' : '적절한'} 길이(${title.size}px)의 페이지 제목입니다. (적정 픽셀 길이: ${LIMITER.DESKTOP.TITLE.MIN} ~ ${LIMITER.DESKTOP.TITLE.MAX}px)`
      )
      issues.ipush(
        title.mobile.isSizeValid,
        `모바일 화면에서 ${checker.m.isLong ? '너무 긴' : checker.m.isShot ? '너무 짧은' : '적절한'} 길이(${title.size}px)의 페이지 제목입니다. (적정 픽셀 길이: ${LIMITER.MOBILE.TITLE.MIN} ~ ${LIMITER.MOBILE.TITLE.MAX}px)`
      )
    }
    
    const body = {
      validCode: issues.icode(),
      title: title.name,
      value: title.exist ? title.self : null,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('meta', issues, body)
  }

  setMeta (meta) {
    const tags = meta.self.map(m => {
      if (m.name !== '') {
        return {
          name: m.name,
          content: m.content
        }
      } else if (m.getAttribute('property') && m.getAttribute('property') !== '') {
        return {
          name: m.getAttribute('property'),
          content: m.content
        }
      } else {
        return null
      }
    })
    .filter(m => m !== null)

    const body = {
      validCode: 'CUSTOM',
      title: meta.name,
      descType: 'TABLE',
      columns: [{ id: 'name', name: '이름', type: 'TEXT' }, { id: 'content', name: '내용', type: 'TEXT' }],
      data: tags
    }

    this.add('meta', null, body)
  }

  setMetaDescription (desc) {
    const issues = []

    issues.ipush(
      desc.exist,
      `페이지 설명(description) 태그가 정의되어 ${desc.exist ? '있습니다.' : '있지 않습니다.'}`
    )
      
    if (desc.exist) {
      const checker = {
        d: {
          isLong: desc.size > LIMITER.DESKTOP.DESC.MAX,
          isShot: desc.size < LIMITER.DESKTOP.DESC.MIN
        },
        m: {
          isLong: desc.size > LIMITER.MOBILE.DESC.MAX,
          isShot: desc.size < LIMITER.MOBILE.DESC.MIN
        }
      }
      issues.ipush(
        desc.desktop.isSizeValid,
        `PC 화면에서 ${checker.d.isLong ? '너무 긴' : checker.d.isShot ? '너무 짧은' : '적절한'} 길이(${desc.size}px)의 페이지 설명입니다. (적정 픽셀 길이: ${LIMITER.DESKTOP.DESC.MIN} ~ ${LIMITER.DESKTOP.DESC.MAX}px)`
      )
      issues.ipush(
        desc.mobile.isSizeValid,
        `모바일 화면에서 ${checker.m.isLong ? '너무 긴' : checker.m.isShot ? '너무 짧은' : '적절한'} 길이(${desc.size}px)의 페이지 설명입니다. (적정 픽셀 길이: ${LIMITER.MOBILE.DESC.MIN} ~ ${LIMITER.MOBILE.DESC.MAX}px)`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: desc.name,
      value: desc.exist ? desc.self : null,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('meta', issues, body)
  }

  setCharset (charset) {
    const issues = []

    issues.ipush(
      charset.exist,
      `${charset.name}이(가) 존재${charset.exist ? '합니다.' : '하지 않습니다.'}`
    )

    if (charset.exist) {
      issues.ipush(
        charset.isValid,
        `${charset.name} 값이 UTF-8으로 정의되어 ${charset.isValid ? '있습니다.' : '있지 않습니다.'}`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: charset.name,
      value: charset.exist ? charset.self : null,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }

    this.add('meta', issues, body)
  }

  setCanonicalLink (canonicalLink) {
    const issues = []

    issues.ipush(
      canonicalLink.exist,
      `${canonicalLink.name}이(가) 정의되어 ${canonicalLink.exist ? '있습니다.' : '있지 않습니다.'}`
    )

    if (canonicalLink.exist) {
      issues.ipush(
        canonicalLink.isValid,
        `${canonicalLink.isValid ? '유효한' : '유효하지 않은'} 정식 링크입니다.`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: canonicalLink.name,
      value: canonicalLink.exist ? canonicalLink.self : null,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }
    
    this.add('meta', issues, body)
  }

  setFavicon (favicons, url) {
    const issues = []
    
    issues.ipush(
      favicons.existAtLeastOne,
      `최소 한 개의 ${favicons.name}이(가) 정의되어 ${favicons.existAtLeastOne ? '있습니다.' : '있지 않습니다.'}`
    )

    const count = favicons.self.length - 1
    const additional = count > 1 ? '외 ' + (count - 1) + '개' : ''

    const body = {
      validCode: issues.icode(),
      title: favicons.name,
      value: favicons.existAtLeastOne ? `${getOriginFrom(url.self)}${getPathnameFrom(favicons.self[0])} ${additional}` : null,
      descType: 'TEXT',
      details: issues,
      importance: 1
    }

    this.add('meta', issues, body)
  }

  setHreflang (hreflang) {
    const issues = []

    issues.ipush(
      true,
      `정의된 ${hreflang.name}이(가) ${hreflang.existAtLeastOne ? '존재합니다.' : '존재하지 않습니다. (없어도 문제 없음)'}`
    )
    
    if (hreflang.hasDuplicatedHref) {
      issues.ipush(false, `중복된 ${hreflang.name} href가 존재합니다.`)
    }

    if (hreflang.hasDuplicatedLang) {
      issues.ipush(false, `중복된 ${hreflang.name} hrefLang이 존재합니다.`)
    }

    const count = hreflang.self.length
    const additional = count > 1 ? '외 ' + (count - 1) + '개' : ''

    const body = {
      validCode: issues.icode(),
      title: hreflang.name,
      value: hreflang.existAtLeastOne ? `(${hreflang.self[0].lang}) ${hreflang.self[0].href} ${additional}` : null,
      descType: 'TEXT',
      details: issues,
      importance: 1
    }
    
    this.add('meta', issues, body)
  }

  setMetaRobots (robot, txt) {
    const issues = []

    const isCrawlerable = robot.isValid && txt.isAllowGoogle && txt.isAllowNaver

    issues.ipush(
      isCrawlerable,
      `구글 ${isCrawlerable ? '및' : '또는'} 네이버 봇이 크롤링 할 수 있도록 허용되어 ${isCrawlerable ? '있습니다.' : '있지 않습니다.'}`
    )


    if (robot.exist) {
      issues.ipush(
        robot.isValid,
        `메타 로봇(Meta Robots) 태그 값이 ${robot.isValid ? 'index' : 'noindex'}로 설정되어 크롤링 할 수 ${isCrawlerable ? '있습니다.' : '없습니다.'}`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: robot.name,
      value: robot.self,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('meta', issues, body)
  }

  setPreview (url, title, desc, favicons) {
    const body = {
      validCode: 'CUSTOM',
      title: '검색 결과 미리보기 (Search Result Preview)',
      descType: 'PREVIEW',
      meta: {
        url: {
          origin: getOriginFrom(url.self),
          pathname: getPathnameFrom(url.self)
        },
        title: {
          self: title.exist ? title.self : '페이지 제목이 없습니다.',
          size: title.size
        },
        description: {
          self: desc.exist ? desc.self : '페이지 설명이 없습니다.',
          size: desc.size
        },
        favicon: favicons.self.length > 0 ? `${getOriginFrom(url.self)}${getPathnameFrom(favicons.self[0])}` : ''
      }
    }

    this.add('meta', null, body)
  }

  // 메타 명세서 끝

  // 페이지 품질 시작

  setContent (content) {
    const issues = []

    let additional = content.word.isValidSize ? '적절한 단어 수 입니다.' : `${content.word.size < 250 ? '단어 수가 너무 적습니다.' : '단어 수가 너무 많습니다.'}`
    issues.ipush(
      content.word.isValidSize,
      `이 페이지에는 ${content.word.size}단어로 구성되어 있습니다. ${additional}`
    )

    additional = content.paragraph.isValidSize ? '적절한 문장 수 입니다.' : `${content.paragraph.size < 7 ? '문장 수가 너무 적습니다.' : '문장 수가 너무 많습니다.'}`
    issues.ipush(
      content.paragraph.isValidSize,
      `이 페이지에는 ${content.paragraph.size}문장으로 구성되어 있습니다. ${additional}`
    )

    additional = content.paragraph.isValidAvg ? '적절한 문장 당 평균 단어 수 입니다.' : `${content.paragraph.avgWordPerParagraph < 5 ? '문장 당 평균 단어 수가 너무 적습니다.' : '문장 당 평균 단어 수가 너무 많습니다.'}`
    issues.ipush(
      content.paragraph.isValidAvg,
      `이 페이지에는 문장 당 평균 단어 수는 ${content.paragraph.avgWordPerParagraph} 입니다. ${additional}`
    )

    issues.ipush(
      content.isTitleWordsIncludedInContent,
      `페이지 제목 (Title) 단어가 글 내용에 포함되어 ${content.isTitleWordsIncludedInContent ? '있습니다.' : '있지 않습니다.'}`
    )

    issues.ipush(
      content.isHead1WordsIncludedInContent,
      `페이지 H1 내용 단어가 글 내용에 포함되어 ${content.isHead1WordsIncludedInContent ? '있습니다.' : '있지 않습니다.'}`
    )

    const body = {
      validCode: issues.icode(),
      title: content.name,
      value: null,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('quality', issues, body)
  }

  setFrames (frames) {
    const issues = []

    const isNoFrameFamily = !frames.isFrameset && !frames.isFrames && !frames.isNoFrames

    issues.ipush(
      isNoFrameFamily,
      `페이지에 ${frames.name}을 사용하고 ${isNoFrameFamily ? '있지 않습니다.' : '있습니다.'}`
    )

    if (isNoFrameFamily) {
      if (frames.isFrameset) {
        issues.ipush(true, `페이지에 frameset 태그가 사용되고 있습니다.`)
      }
      if (frames.isFrames) {
        issues.ipush(true, `페이지에 frame 태그가 사용되고 있습니다.`)
      }
      if (frames.isNoFrames) {
        issues.ipush(true, `페이지에 noframe 태그가 사용되고 있습니다.`)
      }
    }

    const body = {
      validCode: issues.icode(),
      title: frames.name,
      value: null,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('quality', issues, body)
  }

  setImages (images) {
    const issues = []

    issues.ipush(
      images.isValid,
      `이 페이지에 ${images.size}개의 이미지가 있고, alt 속성이 적용된 이미지는 ${images.altSize}개입니다. ${images.isValid ? '모든 alt 속성이 잘 정의되어 있습니다.' : 'alt 속성을 정의 해야합니다.'}`
    )

    const body = {
      validCode: issues.icode(),
      title: images.name,
      value: null,
      descType: 'TEXT',
      details: issues,
      importance: 3
    }

    this.add('quality', issues, body)
  }

  setMobile (mobile) {
    const issues = []

    issues.ipush(
      mobile.viewport.exist,
      `메타 뷰포트 (viewport)가 정의되어 ${mobile.viewport.exist ? '있습니다.' : '있지 않습니다.'}`
    )
    if (mobile.viewport.exist) {
      issues.ipush(
        mobile.viewport.isValid,
        `메타 뷰포트 (viewport) 값에 "width=device-width"가 정의되어 ${mobile.viewport.isValid ? '있습니다.' : '있지 않습니다.'}`
      )
    }
    
    issues.ipush(
      mobile.appleTouchIcon.exist,
      `적어도 한개의 애플 터치 아이콘 (Apple touch icon)이 정의되어 ${mobile.appleTouchIcon.exist ? '있습니다.' : '있지 않습니다.'}`
    )

    const body = {
      validCode: issues.icode(),
      title: mobile.name,
      value: mobile.viewport.exist ? mobile.viewport.content : null,
      descType: 'TEXT',
      details: issues,
      importance: 2
    }

    this.add('quality', issues, body)
  }

  // 페이지 품질 끝

  // 페이지 구조 시작

  setHead1 (head1) {
    const issues = []

    issues.ipush(
      head1.exist,
      `${head1.name}이(가) ${head1.exist ? '있습니다.' : '없습니다.'}`
    )

    if (head1.exist) {
      issues.ipush(
        head1.isOnlyOne,
        `${head1.name}이(가) ${head1.isOnlyOne ? '정확히 1개 존재합니다.' : `${head1.self.length}개 있습니다. (추천: 1개)`}`
      )

      const isNoAnchor = head1.self.some(h => !h.isAnchor).length > 0
      issues.ipush(
        !isNoAnchor,
        `${head1.name}에 빈 앵커 텍스트가 ${isNoAnchor ? '있습니다.' : '없습니다.'}`
      )
    }

    const count = head1.self.length - 1
    const additional = count > 1 ? '외 ' + (count - 1) + '개' : ''

    const body = {
      validCode: issues.icode(),
      title: head1.name,
      value: head1.exist ? `${head1.self[0].isAnchor ? head1.self[0].anchor : '[앵커 텍스트 없음]'} ${additional}` : null,
      descType: 'TEXT',
      details: issues,
      importance: 5
    }

    this.add('structure', issues, body)
  }

  setHeadingStructure (headings) {
    const issues = []

    issues.ipush(
      headings.exist,
      `${headings.name}이(가) ${headings.exist ? '있습니다.' : '없습니다.'}`
    )

    if (headings.exist) {
      issues.ipush(
        headings.isValidStructure,
        headings.isValidStructure ? `${headings.name} 구조에 문제가 없습니다.` : `${headings.name} 구조에 중 스킵된 표제가 있습니다.`
      )

      issues.ipush(
        !headings.isNoAnchors,
        `${headings.name} 중에 빈 앵커 텍스트가 ${headings.isNoAnchors ? '있습니다.' : '없습니다.'}`
      )
    }

    const body = {
      validCode: issues.icode(),
      title: headings.name,
      value: null,
      descType: 'TEXT',
      details: issues,
      importance: 4
    }

    this.add('structure', issues, body)
  }

  setHeadingsTable (headings) {

    const body = {
      validCode: 'CUSTOM',
      title: '표제 구조 (Heading Structure)',
      descType: 'TABLE',
      columns: [
        { id: 'level', name: '표제 레벨', type: 'CHIP' },
        { id: 'anchor', name: '앵커 텍스트', type: 'TEXT' }
      ],
      data: headings.map(h => ({
        level: `H${h.level}`,
        anchor: h.isAnchor ? h.anchor : '[앵커 텍스트 없음]'
      }))
    }

    this.add('structure', null, body)
  }

  // 페이지 구조 끝

  // 링크 구조 시작

  setLinks (link, type) {
    const issues = []
    const isLinks = link.size > 0

    const max = type === 'IN' ? LINK_LIMITER.INTERNAL.MAX : LINK_LIMITER.EXTERNAL.MAX
    const recommend = type === 'IN' ? LINK_LIMITER.INTERNAL.RECOMMEND_MAX : LINK_LIMITER.EXTERNAL.RECOMMEND_MAX

    issues.ipush(
      type === 'IN' ? isLinks : true,
      `${link.name}이(가) ${isLinks ? '있습니다.' : '없습니다.'}`
    )

    if (isLinks) {
      const correntSize = link.size <= max

      issues.ipush(
        correntSize,
        `이 페이지는 ${link.name} 개수가 ${correntSize ? '적절합니다.' : '너무 많습니다.'} (링크 수: ${link.size}개, 추천: ${recommend}개 이하)`
      )

      if (type === 'IN') {
        const isNoAnchors = link.noAnchorSize
        issues.ipush(
          !isNoAnchors,
          `앵커 텍스트가 없는 링크가 ${isNoAnchors ? `${link.noAnchorSize}개 있습니다.` : '없습니다.'}`
        )

        const isLongAnchors = link.longAnchorSize > 0
        issues.ipush(
          !isLongAnchors,
          `앵커 텍스트가 긴 링크가 ${!isNoAnchors ? `${link.longAnchorSize}개 있습니다.` : '없습니다.'}`
        )
      }
    }

    const count = link.size - 1
    const additional = count > 1 ? '외 ' + (count - 1) + '개' : ''

    const body = {
      validCode: issues.icode(),
      title: link.name,
      value: `${isLinks ? `${truncate(link.self[0].href)} ${additional}` : `${link.name}가 없습니다.`}`,
      descType: 'TEXT',
      details: issues,
      importance: type === 'IN' ? 5 : 2
    }

    this.add('link', issues, body)
  }

  setLinkList (links) {
    const allLinks = links.internal.self.concat(links.external.self)

    const l = allLinks.map(l => {
      const attr = []
      if (l.isNewWindow) attr.push('New window')
      if (l.isNofollow) attr.push('Nofollow')
      if (l.isExternal) attr.push('External')
      if (l.isHash) attr.push('Hash')
      return {
        link: l.href,
        attribute: attr,
        anchor: l.isAnchor ? l.anchor : '[앵커 텍스트 없음]'
      }
    })

    const body = {
      validCode: 'CUSTOM',
      title: '페이지 내 링크 (Links In Page)',
      descType: 'TABLE',
      columns: [
        { id: 'link', name: '링크', type: 'TEXT' },
        { id: 'attribute', name: '속성', type: 'CHIP_LIST' },
        { id: 'anchor', name: '앵커 텍스트', type: 'TEXT' }
      ],
      data: l
    }

    this.add('link', null, body)
  }

  // 링크 구조 끝

  add (type, issues, body) {
    if (type && issues) {
      this[type].head[issues.icode().toLowerCase()] += 1
    }
    this[type].body.push(body)
  }

  getScore () {
    let summary = {
      url: this.url,
      failed: this.meta.head.failed + this.quality.head.failed + this.structure.head.failed + this.link.head.failed,
      warning: this.meta.head.warning + this.quality.head.warning + this.structure.head.warning + this.link.head.warning,
      passed: this.meta.head.passed + this.quality.head.passed + this.structure.head.passed + this.link.head.passed
    }
    let score = {
      total: { self: 0, max: 0 },
      meta: { self: 0, max: 0 },
      quality: { self: 0, max: 0 },
      structure: { self: 0, max: 0 },
      link: { self: 0, max: 0 }
    }

    for (let key in this) {
      if (key === 'url') continue
      let sum = 0
      let s = 0
      for (let i = 0; i < this[key].body.length; i += 1) {
        const importance = this[key].body[i] && this[key].body[i].importance ? this[key].body[i].importance : 0
        const all = this[key].body[i] && this[key].body[i].details ? this[key].body[i].details.length : 0
        const detailsScore = this[key].body[i] && this[key].body[i].details ? this[key].body[i].details.filter(d => d.isValid).length : 0
        sum += importance * all
        s += importance * detailsScore
      }
      score[key].max = sum
      score[key].self = s
      score.total.max += sum
      score.total.self += s
    }

    return {
      head: summary,
      body: score
    }
  }
}

export default Diagnosis