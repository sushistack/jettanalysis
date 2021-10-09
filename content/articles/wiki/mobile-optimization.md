---
title: 모바일 최적화 (Mobile Optimization)
description: 검색엔진 최적화를 위한 모바일 최적화 방밥을 소개합니다.
color: '#000'
backgroundColor: '#80d6fc'
backgroundColorForPreview: '#b8e9ff'
img: '/images/wiki_mobile.png'
createdAt: '2021-09-17 00:00:00'
updatedAt: '2021-09-17 00:00:00'
author:
  name: 엔지니어
tags: ['모바일', '모바일 최적화', 'mobile', 'mobile optimization']
---

인터넷 서핑을 위한 모바일 장치(ex. 스마트폰 또는 태블릿)의 사용은 최근 몇 년 동안 엄청나게 증가했으며 여전히 증가하고 있습니다. 따라서 모든 웹마스터는 **모바일 장치용 웹사이트를 최적화**해야 합니다. 목표는 모바일 장치에서 완벽하게 웹사이트를 적절하게 표현하고 동작하게 하는 것입니다.

<!--more-->

웹사이트의 `모바일 친화성`은 이제 Google의 중요한 순위 요소이기도 합니다. Google은 모바일 검색 색인이 Google의 주요 색인이 될 것이라고 발표했습니다. 이 `모바일 우선 색인`은 색인 생성 자체를 모바일으로 하기 때문에 웹사이트의 모바일 버전을 훨씬 더 중요하게 만듭니다.

<simple-diagnosis title='SEO 모바일 최적화 진단하기' description='검색엔진 최적화를 위한 모바일 최적화 방법을 진단해보세요.'></simple-diagnosis>

특정 사이트(ex. 레스토랑, 지역 상점 등)의 경우 모바일 최적화가 특히 관련이 있습니다. Google은 지역 검색을 했을 때, 모바일 장치에서 잘 작동하는 사이트를 선호하기 때문입니다.

## 모바일 장치에서 사용자 행동의 특징

모바일 최적화를 다루기 전에 먼저 모바일 장치에서 사용자 행동의 특징을 이해해야 합니다. 이는 모바일 최적화의 기준이 되기 때문입니다.

예를 들어 모바일 장치에 대한 사용자의 가장 중요한 특징은 모바일 장치의 탐색이 마우스로 수행되지 않고 터치 스크린이나 음성 제어를 통해 수행된다는 것입니다. 또한 대부분의 경우 모바일 장치의 디스플레이가 훨씬 작아 디스플레이 옵션이 크게 제한됩니다. 또한 Java 또는 Flash는 일반적으로 표시되지 않으며 사용자는 일반적으로 인터넷 연결 속도가 느립니다. 또한, 사용자들은 속도 이슈에 대해서 민감하기 때문에 원하는 정보를 신속하고 간결한 형태로 제공해야만 사용자를 만족시킬 수 있습니다.

## 모바일 친화적 웹사이트 요구사항

모바일 최적화의 기술적 측면을 설명하기 전에 먼저 웹사이트가 **모바일 친화적**으로 간주되기 위해 충족해야 하는 기준을 언급하고자 합니다.

우선 모바일 장치에서 확대하지 않고 웹사이트의 모든 텍스트를 읽을 수 있는지 확인해야 합니다. 또한 사용자가 수평으로 확대/축소하거나 스크롤해야 하는 것을 방지하기 위해 페이지의 다른 모든 요소를 ​​다양한 디스플레이 크기에 맞게 조정해야 합니다. 또한 잘못된 링크를 건드리지 않고 손가락으로 쉽게 터치할 수 있도록 링크나 버튼 사이에 충분한 공간이 있는지 확인해야 합니다. 또한 사용자 편의성을 위해 모든 장치에서 사용할 수 없는 소프트웨어(ex. Flash)의 사용을 피해야 합니다.

## 모바일 최적화 측면

기본적으로 모바일 웹사이트 구성에는 다음과 같이 세 가지 주요 가능성이 있습니다.

- 반응형 웹 디자인
- 별도의 모바일 웹사이트 제작
- 동적으로 페이지 제공

### 반응형 웹 디자인

반응형 웹 디자인을 사용하면 웹사이트의 HTML 코드와 URL이 모든 기기에서 동일하게 유지되지만 컨텐츠는 자동으로 화면 크기에 맞게 조정됩니다. 반응형 웹 디자인은 Google에서 권장하는 모바일 최적화 접근 방식이며 모든 컨텐츠를 다른 디스플레이 크기에 맞출 수 없다는 단점이 있습니다. 반응형 웹 디자인 내에서 페이지의 표시 영역은 페이지 너비의 크기 조정에 대한 정보를 제공하는 뷰포트(viewport) 메타 태그를 통해 구현할 수 있습니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

또한 반응형 웹 디자인을 위해 CSS에서 미디어 쿼리를 사용하여 화면 크기에 따라 페이지를 적절할게 표시할 수 있습니다.

### 웹사이트의 모바일 버전

모바일 최적화를 위한 두 번째 방법은 고유한 URL(`m.jettanlaysis.com`)이 있는 별도의 모바일 버전 웹사이트를 만드는 것입니다. 이러한 경우 사용자가 모바일 장치에서 웹사이트에 액세스하면 HTTP 리디렉션을 사용하여 페이지의 모바일 버전으로 리디렉션됩니다. 그러나 이 대안의 단점은 중복 컨텐츠 문제가 발생할 수 있다는 것입니다.

Google에서 다른 URL을 더 쉽게 평가할 수 있도록 [rel="alternate" 태그](https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls?hl=en)를 URL의 데스크톱 버전 HTML 코드에 추가해야 합니다. 이 태그는 URL의 모바일 버전을 가리킵니다.

```html
<link rel="alternate" media="only screen and (max-width: 640px)" href="http://m.jettanalysis.com/">
```

또한 중복 컨텐츠와 관련된 문제를 방지하기 위해 데스크톱 버전을 참조하는 페이지의 모바일 버전에 대한 <nuxt-link to="/wiki/canonical-url-tag">정식 링크</nuxt-link>를 추가해야 합니다.

```html
<link rel="canonical" href="http://www.jettanalysis.com/">
```

### 동적으로 페이지 제공

모바일 사이트를 구성하기 위한 세 번째이자 마지막 대안은 동적 서비스입니다. 이 변형을 선택하면 인식 되는 사용자 에이전트에 따라 다른 HTML 및 CSS 코드가 전달됩니다. 이 경우 모바일 사이트는 실제 사이트의 축소 버전입니다. 이 대안의 주요 단점은 사용자 에이전트 식별에 대한 오류율이 높다는 점입니다.

이 접근 방식의 중요한 요소는 `Vary` HTTP 헤더입니다. 이를 통해 서버는 스마트폰용 구글봇도 해당 페이지를 크롤링해야 한다는 메시지를 보냅니다. 만약 `Vary` HTTP 헤더가 없으면 Google은 모바일 사용자 에이전트용 HTML 코드가 수정되고 있다는 사실을 알지 못하게 됩니다. 이 헤더는 다음과 같을 수 있습니다.

```text
GET /page-1 HTTP/1.1

Host: www.jettanalysis.com

(...rest of the HTTP request header...)
```

```html
HTTP/1.1 200 OK

Content-Type: text/html

Vary: User-Agent

Content-Length: 5710

(... rest of the HTTP response header...)
```

## 추가적인 모바일 최적화

모바일 최적화의 중요한 부분은 전송할 데이터의 양을 줄여 사이트 속도를 최적화 하는 것입니다. 예를 들어 CSS 및 JavaScript를 최소화하여 데이터양을 줄여 속도를 높일 수 있습니다. 한편으로는 각 파일의 코드를 최소화(ex. 줄 바꿈 제거)하고 다른 한편으로는 한 파일 유형의 여러 개별 파일을 하나의 전체 파일로 결합하여 필요한 요청 수를 줄임으로써 페이지 로딩 시간을 단축 시킬 수 있습니다. 또한 모바일 웹사이트에는 가능한 한 적은 수의 이미지를 사용해야 합니다. 이렇게 하면 로딩 시간이 상당히 줄어들 수 있습니다. 이미지가 꼭 필요하다면 압축을 시도하거나 페이지의 모바일 버전에 대해 별도의 용량이 작은 이미지를 제공해야 합니다. 또한 비디오, 사운드 파일 및 기타 멀티미디어 요소를 절대 최소로 제한해야 합니다.

속도 최적화 외에도 페이지 메뉴를 더 작은 화면 크기로 조정하는 것은 모바일 최적화의 중요한 측면입니다. 여기에서 소위 `hero` 헤더도 피해야 합니다. 사용자가 확대/축소 없이 작은 화면에서 페이지의 텍스트를 읽을 수 있도록 글꼴 크기 도 조정하는 것도 잊어서는 안됩니다.

또한 `rel=icon` 메타 태그를 사용하여 사용자가 모바일 장치의 홈 화면에 페이지를 추가할 때 표시 되는 아이콘을 정의할 수 있습니다. 이 메타 태그는 다음과 같습니다.

```html
<link rel="icon" sizes="192x192" href="/icon.png">
```

Apple 장치의 터치 아이콘에는 자체 메타 태그가 있습니다.

```html
<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
```

또한 여러분의 사이트가 휴대기기에 최적화되어 있거나 별도의 모바일 사이트가 있다면 Google에 항상 알려야 합니다. `rel=alternate` 태그 또는 사이트의 모바일 버전에 대한 정식 링크를 사용하거나 동적 제공을 위한 다양한 HTTP 헤더를 사용하여 이 작업을 수행할 수 있습니다.

마지막으로 중요한 것은 이러한 모든 기술적 측면 외에도 사용자가 컨텐츠에 액세스하는 상황과 사용자와 관련된 기능을 항상 알고 있어야 하며 사이트를 디자인할 때 이러한 측면을 염두에 두어야 한다는 것입니다.

## 자주 발생하는 오류

모바일 최적화와 관련하여 다음과 같이 자주 발생하는 오류를 피해야 합니다.

- 페이지의 전체 컨텐츠를 덮는 전면 광고로 인해 모바일 사이트의 색인 생성 문제와 부정적인 사용자 경험이 발생합니다. 여기서는 배너를 대신 사용해야 합니다.
- 잘못 구성된 리디렉션 (ex. 사용자는 항상 해당 하위 페이지가 아닌 모바일 홈페이지로 리디렉션 됨)
- 사용자 에이전트가 모바일 장치로 인식되지 않음
- 너무 긴 로딩 시간
- 너무 작은 글꼴 크기
- 너무 작고 너무 근접한 터치 요소
- 모바일 장치에서 재생할 수 없는 비디오, 이를 방지하려면 항상 HTML5 표준 태그를 사용하여 비디오를 보여주고 오류가 발생할 경우 비디오 스크립트를 제공해야 합니다.

## 유용한 도구

Google은 사이트의 모바일 최적화에서 웹마스터를 지원하는 두 가지 유용한 도구를 제공합니다.

[모바일 친화적인 페이지 테스트](https://search.google.com/test/mobile-friendly)가 가장 유용한 도구중 하나이며, 이 도구는 모바일 장치에서 사이트를 사용하는 것이 얼마나 쉬운지 테스트하고 발견된 문제 목록을 제공합니다. 또한 테스트 결과에는 모바일 장치에서 사이트가 어떻게 보이는지 보여주는 스크린샷이 포함됩니다.

![모바일 친화적인 페이지 테스트](/images/mobile-friendly-page.png)

Google이 제공하는 두 번째 도구는 [PageSpeed ​​Insights](https://developers.google.com/speed/pagespeed/insights/)입니다. 이 도구를 사용하면 다양한 장치에서 사이트 속도를 분석하고 최적화를 위한 팁을 얻을 수 있습니다.

## 참고 문서

- https://www.thinkwithgoogle.com/marketing-resources/experience-design/speed-is-key-optimize-your-mobile-experience/
- https://developers.google.com/search/mobile-sites/mobile-seo/
- https://developers.google.com/search/mobile-sites/mobile-seo/common-mistakes
- https://developers.google.com/search/mobile-sites/mobile-seo/responsive-design
- https://developers.google.com/search/mobile-sites/mobile-seo/dynamic-serving
- https://developers.google.com/search/mobile-sites/mobile-seo/separate-urls
