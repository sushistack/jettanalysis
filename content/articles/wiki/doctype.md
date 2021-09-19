---
title: 문서 유형 (Doctype)
description: HTML 문서에서 문서 유형은 무엇인지 알아보고 어떻게 최적화 해야하는지 소개합니다.
color: '#000'
backgroundColor: '#80d6fc'
backgroundColorForPreview: '#b8e9ff'
img: '/images/wiki_canonical.png'
createdAt: '2021-09-16 00:00:00'
updatedAt: '2021-09-16 00:00:00'
author:
  name: 엔지니어
tags: ['문서 유형', '문서 타입', 'doctype', 'html doctype']
---

**문서유형** (Doctype)은 웹 페이지 소스 코드의 첫 번째 요소이며 실제 코드 이전에도 모든 HTML 문서의 맨 위에 있어야 하는 요소입니다. 불행히도 이 요소는 종종 잊혀지고 많은 웹마스터는 이 요소가 어떤 기능을 하는지 전혀 모릅니다. 게다가, 이 요소의 중요성은 과소평가되고 있습니다. 따라서 이번 포스팅에서는 `doctype` 요소의 기능과 웹 사이트의 올바른 표시에 왜 중요한지 소개해보도록 하겠습니다.

<!--more-->

```html
<!DOCTYPE html>
<html>
<!-- ...생략... -->
</html>
```

doctype 요소는 브라우저가 예상해야 하는 문서 유형을 지정합니다. 하지만 이 요소는 고전적인 요소가 아닙니다. 현재 웹 표준에서는 doctype 요소가 모든 웹 문서의 소스 코드에 있어야 한다고 규정하고 있습니다. doctype 요소가 없으면 특정 상황에서 문서가 여전히 올바르게 표시될 수 있더라도 오류가 있는 문서입니다. 실제로 소스 코드를 확인하는 도구는 HTML 문서에서 doctype 요소가 누락된 경우에도 오류를 표시합니다.

## doctype은 어떻게 사용되나요?

Doctype은 항상 웹 페이지의 첫 번째 요소여야 합니다. 이것은 HTML 코드에서 실제 마크업 코드 앞, 따라서 HTML 태그 앞에 위치해야함을 의미합니다. 또한 요소가 각 사이트 모든 페이지 소스 코드에 있는지 확인해야합니다. 예를 들어, 홈페이지에서 단독으로 사용하는 것만으로는 충분하지 않습니다.

Doctype은 XML문서와 SVG그래픽 에서 더 많이 사용됩니다.

## 어떤 종류의 doctype이 있나요?

특히 이전 버전의 HTML과 XHTML 1.01 및 1.1의 문서 유형은 매우 길고 복잡했습니다. 숙련된 웹마스터라도 문서의 소스 코드에 복사하여 붙여넣어야 하는 경우가 많았습니다. HTML5 이전의 모든 클래식 버전의 마크업 언어 에서는 다음 문서 유형을 사용해야 했습니다.

### 엄격한 HTML 4.01

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```

엄격한(Strict) doctype은 XHTML에 필적하는 매우 정확하고 엄격한 코드를 나타냅니다. 여기에서 모든 요소는 항상 닫혀 있어야 합니다.

### 느슨한 HTML 4.01

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN "http://www.w3.org/TR/html4/loose.dtd">
```

반면에 느슨한(Transitional) doctype은 약간 더 관대한 소스 코드를 나타냅니다. 이 변형은 오늘날의 HTML5와 더 유사하며 Strict만큼 마크업이 엄격하지 않습니다.

### HTML4 이하 버전

HTML4 및 이전 버전은 SGML(Standard Generalized Markup Language)을 기반이브로 이러한 버전의 doctype 요소에 올바른 DTD(Document Type Definition)를 지정해야 합니다. 문서의 코드에 사용되는 다양한 기타 속성뿐만 아니라 규칙과 요소를 설명합니다.

XHTML 1.0 및 1.1의 경우 doctype 요소는 다음과 같습니다.

### 엄격한 XHTML 1.0

```html
<!DOCTYPE HTML 공개 "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

### 엄격하지 않은 XHTML 1.0

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-loose.dtd">
```

### 엄격한 XHTML 1.1

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

XHTML1 및 1.1도 SGML을 기반으로 하기 때문에 HTML4와 마찬가지로 DTD도 여기에 지정해야 합니다. 따라서 브라우저는 웹사이트를 올바르게 표시할 수 있도록 적절한 지침과 정보에 의존합니다. Strict 및 Transitional은 HTML4.0 및 HTML4.1에서와 동일한 의미를 가지며 문서의 소스 코드에서 마크업에 적용되는 규칙을 나타냅니다.

HTML5의 도입으로 doctype 요소에 대한 큰 변화가 마침내 발생했습니다. 이전 버전과 달리 더 이상 SGML을 기반으로 하지 않습니다. 또한 doctype 요소의 사용이 덜 복잡해졌습니다. 따라서 HTML5에서 doctype 요소는 다음과 같이 사용됩니다.

```html
<!DOCTYPE HTML>
```

여기에는 추가 규칙이나 링크가 필요하지 않습니다. 요소는 위에서 지정한 대로 쉽게 사용할 수 있습니다. 이것은 브라우저에서 웹사이트를 올바르게 표시하는 데 필요한 모든 정보를 제공합니다. 따라서 HTML5를 사용하면 HTML 페이지를 만들 때 걱정할 일이 한 가지 줄어듭니다.

## doctype 요소가 없으면 어떤 문제가 발생하나요?

해당 요소가 없어도 대부분의 경우 여전히 올바르게 표시됩니다. 하지만 웹 페이지의 소스 코드에 포함되어 있지 않으면 오류가 발생할 수 있습니다. HTML5로 일반 코드만 작성하는 경우 특히 그렇습니다. 특히 웹 페이지가 다른 버전의 마크업 언어로 작성되거나 사전에 해당 요소에서 정의해야하는 특정 기능을 사용하는 경우 표시 오류나 예기치 않은 문제가 발생할 수 있습니다.

<simple-diagnosis title='문서 유형 SEO 진단하기' description='검색엔진 최적화를 위한 문서유형을 진단해보세요.'></simple-diagnosis>

## 결론 및 요약

doctype 요소는 모든 웹사이트의 소스 코드에서 필요하고 중요한 부분입니다. 실제 코드가 시작되기 전에도 시작 부분에 바로 배치되며 어떤 경우에도 잊어서는 안됩니다.

doctype 요소에는 웹 페이지를 올바르게 표시하는 데 도움이 되는 웹 브라우저에 대한 중요한 정보가 포함되어 있기 때문에 HTML5 이전의 모든 버전의 doctype은 올바른 형식의 마크업을 사용해야합니다. 하지만 HTML5의 경우 doctype 요소가 크게 단순화되어 제약이 거의 없이 마크업을 작성할 수 있습니다.

현재 표준에 따르면 doctype 요소가 없는 것은 오류이며 문서의 소스 코드를 확인하기 위한 적절한 방법을 제시합니다.

### 요약: HTML Doctype FAQ

- HTML에서 doctype이란 무엇인가요?
  - doctype 선언은 브라우저가 예상해야 하는 문서의 종류를 알려줍니다.
- doctype은 HTML 태그인가요?
  - 아니요, doctype 선언은 HTML 태그가 아닙니다. 웹 브라우저에 정보를 제공할 뿐입니다.
- doctype 요소를 어디에 배치하나요?
  - doctype 정보는 웹사이트의 HTML 코드에 있어야 합니다. HTML 태그 이전에도 코드에서 가장 먼저 표시되어야 합니다.
- 모든 페이지에 doctype을 포함해야 하나요?
  - 예. 모든 페이지에는 고유한 doctype 선언이 필요합니다.
- 웹 페이지에 doctype 요소가 반드시 필요한가요?
  - 반드시는 아닙니다. doctype 정보를 포함하지 않아도 콘텐츠 가 올바르게 표시될 수 있습니다. 그러나 모든 페이지에 doctype을 포함하는 것이 좋습니다.

## 참고 문서

- https://www.w3.org/QA/2002/04/valid-dtd-list.html
