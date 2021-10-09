---
title: Hreflang 사용하여 다국어 사이트 적용
description: 검색엔진 최적화를 위한 내부 링크 구성하는 방법에 대해서 소개합니다.
color: '#000'
backgroundColor: '#80d6fc'
backgroundColorForPreview: '#b8e9ff'
img: '/images/wiki_hreflang.png'
createdAt: '2021-09-19 00:00:00'
updatedAt: '2021-09-19 00:00:00'
author:
  name: 엔지니어
tags: ['hreflang', '다국어', 'multilingual', 'multiple language']
---

**hreflang**은 웹사이트에 다른 언어나 지역적 차이가 있는 컨텐츠가 존재할 때 사용됩니다. 그 목적은 검색 엔진에 어떤 언어와 지역에 사용할 URL을 알려주어 유저의 언어와 지역에 맞는 페이지를 사용할 수 있도록 해줍니다. 이 속성은 웹사이트의 국제 아키텍처를 더 잘 적용하기 위해 2011년 Google에서 도입했습니다.

<!--more-->

<simple-diagnosis title='Hreflang SEO 진단하기' description='검색엔진 최적화를 위한 hreflang을 진단해보세요.'></simple-diagnosis>

## hreflang는 언제 사용하나요?

Google은 다음 시나리오에서 hreflang을 사용할 것을 권장합니다.

- 페이지가 다른 언어로 완전히 번역된 경우
- 페이지의 대부분은 특정 언어로 유지되지만 탐색 모음이나 바닥글과 같은 부분은 다른 언어로 표시될 수 있는 경우, 특히 포럼과 같이 페이지에 사용자 생성 컨텐츠가 포함되어 있는 경우
- 여러 페이지가 동일한 언어를 공유하지만 다른 통화나 철자와 같은 작은 지역적 차이가 있는 경우, 예를 들어 하나는 미국 사용자 용(`en-US`)이고 다른 하나는 영국 사용자 용(`en-GB`)입니다. 이 경우 검색엔진이 페이지를 중복 컨텐츠로 해석할 수 있으므로 hreflang을 반드시 사용해야합니다.
- 특정 언어 또는 국가에서만 액세스할 수 있어야 하고 다른 사용자는 표준/기본 페이지에 액세스해야 하는 경우

## 대체 링크 요소의 구조

HTML 문서의 헤드 섹션에 있는 hreflang 속성은 다음과 같이 선언할 수 있습니다.

```html
<link rel="alternate" hreflang="en-US" href="https://www.jettanalysis.com/en-US/" />
```

- `<link` 는 링크 요소를 열고 현재 페이지와 지정된 URL 사이에 관계가 있음을 나타냅니다.
- `rel="alternate"`는 현재 문서의 대체 버전이 있음을 검색엔진에 알리는 역할을 합니다.
- `hreflang="xx-XX"` 속성은 다음 URL이 표시되어야 하는 언어(xx) 및 해당하는 경우 지역(XX)을 지정합니다. 언어는 ISO 639-1 형식으로, 국가는 ISO 3166-1 Alpha 2 형식으로 표시해야 합니다.
- `href="URL"` 속성은 현재 문서의 대체 버전의 URL을 지정합니다.
- `/>` 링크 요소를 닫습니다.

예를 들어, 한국어 웹 페이지가 있고 영어 버전을 참조하려면 다음 코드를 사용해야 합니다.

```html
<link rel="alternate" hreflang="en" href ="http://www.jettanalysis.com/en/" />
```

## 구현

이미 언급했듯이 hreflang은 HTML 코드의 헤드 영역에 있는 링크 요소를 사용하여 정의할 수 있습니다. 단, 예를 들어 HTML 파일이 아닌 PDF 파일로 저장한 경우에는 불가능합니다. 이 경우 두 가지 옵션이 있습니다.

### HTTP 응답 헤더의 스펙

```text
Link: <http://www.example.com/>; rel="alternate"; hreflang="en"
```

### XML Sitemap의 스펙

이 방법은 많은 양의 hreflang 링크 태그를 구현하는 것이 어려울 수 있기 때문에 다양한 언어 버전이 있는 매우 큰 웹사이트에 특히 적합합니다. 이 경우 <nuxt-link to="/blog/what-is-sitemap">사이트맵</nuxt-link>의 각 URL 요소에 `xhtml:link`를 추가해야 합니다.

```xml
<xhtml:link rel="alternate" hreflang="en" href="http://www.jettanalysis.com/en/" />
```

이 세 가지 대안 중 어떤 것을 사용해야 하는지는 웹사이트의 크기와 구조에 따라 다릅니다.

## hreflang 사용 방법

대체 링크를 사용할 때는 다음 측면을 고려해야 합니다.

- 기본적으로 대체 링크를 포함하는 각 페이지는 자체적으로 링크되어야 합니다. 즉, 한국 웹 페이지에서 HTML 코드는 이 페이지의 한국어 버전도 참조해야 합니다.
- 또한 각 참조 페이지에서 서로다른 참조 페이지로 서로 연결되어야 합니다. 이는 한국어 페이지가 이 페이지의 영어 버전을 참조하는 경우 영어 페이지도 한국어 버전을 다시 참조해야 함(양방향 링크)을 의미합니다. 그렇지 않으면 Google에서 hreflang 주석을 무시하거나 잘못 해석할 수 있습니다.
- 또한 언어 또는 국가 코드가 ISO 표준에 따라 올바르게 지정되었는지 확인해야 합니다. 언어만 지정할 수 있지만 국가만 지정하는 경우는 유효한 정의가 아닙니다. 국가 코드는 대소문자를 가리지 않습니다.
- 웹 페이지가 특정 언어 또는 국가에 대한 대체 페이지 버전만 제공하고 다른 방문자가 표준 페이지로 연결되어야 하는 경우, 이 일반 페이지는 속성 값 `hreflang="x-default"`로 정의할 수 있습니다.

## 검색 엔진 최적화(SEO)를 위한 hreflang의 간접 관련성

hreflang의 사용은 직접적인 순위 요인은 아니지만 웹사이트의 검색엔진 최적화(SEO)에 간접적으로 영향을 미칠 수 있습니다. 예를 들어, hreflang 링크가 없거나 올바르게 구현되지 않은 경우 검색 엔진은 두 가지 대체 언어 버전의 컨텐츠를 중복 컨텐츠로 간주할 수 있으며, 이는 이러한 페이지의 SEO 및 순위에 부정적인 영향을 미칠 수 있습니다.

또한 hreflang을 올바르게 사용하면 각 사용자가 관련 검색결과만 받게 되어 사용자 경험이 향상됩니다. 이는 결과적으로 체류 시간을 늘리고 이탈률을 줄일 수 있으며 이는 SEO 및 Google의 페이지 평가에 긍정적인 영향을 미칩니다.

그러나 대체 링크는 Google에게 알리는 역할일뿐 Google이 이를 무시할 수도 있습니다. 따라서 SEO에 대한 긍정적인 영향은 보장할 수 없습니다.

## 참고 문서

- https://support.google.com/webmasters/answer/189077?hl=ko
- https://moz.com/learn/seo/hreflang-tag
