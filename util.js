const NUXT_APP_BASE_URL = process.env.NUXT_APP_BASE_URL || 'https://jettanalysis.com'
const NUXT_APP_FRONTEND_PORT = process.env.NUXT_APP_FRONTEND_PORT || ''
const FRONTEND_BASE_URL = `${NUXT_APP_BASE_URL}${NUXT_APP_FRONTEND_PORT}`
const KAKAO_SDK_SCRIPT_ID = 'kakao-sdk-script'

const smartUrl = url => {
  const regex = /^(?:[a-z]+:)?\/\//i
  if (regex.test(url)) return url
  if (url.charAt(0) !== '/') url = `/${url}`
  return `${FRONTEND_BASE_URL}${url}`
}

const xmlDateFormat = dt => {
  if (!dt) return
  const d = new Date(dt)
  const f = (n) => `${n}`.length === 1 ? `0${n}` : n
  return `${d.getFullYear()}-${f(d.getMonth() + 1)}-${f(d.getDate())}`
}

const loadKakaoSdk = (callback) => {
  let script = document.querySelector(`#${KAKAO_SDK_SCRIPT_ID}`)

  if (script) {
    callback && callback()
    return
  }

  script = document.createElement('script')
  script.id = KAKAO_SDK_SCRIPT_ID
  script.src = '/js/kakao-sdk.min.js'
  script.addEventListener('load', function (e) {
    Kakao.init('33d3fefda63de9dadf73b14cd69f8d93')
    Kakao.isInitialized();
    callback && callback()
  })
  document.body.appendChild(script)
}

const loadChannelIOScript = function (callback) {
  var w = window;
  if (w.ChannelIO) {
    return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
  }
  var ch = function() {
    ch.c(arguments);
  };
  ch.q = [];
  ch.c = function(args) {
    ch.q.push(args);
  };
  w.ChannelIO = ch;
  function l() {
    if (w.ChannelIOInitialized) {
      return;
    }
    w.ChannelIOInitialized = true;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
    s.charset = 'UTF-8';
    s.addEventListener('load', function () {
      callback();
      bootChannelIO();
    })
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
  }
  if (document.readyState === 'complete') {
    l();
  } else if (window.attachEvent) {
    window.attachEvent('onload', l);
  } else {
    window.addEventListener('DOMContentLoaded', l, false);
    window.addEventListener('load', l, false);
  }
}

const bootChannelIO = function () {
  const pluginKey = process.env.NUXT_APP_CHANNEL_IO_PLUGINKEY || '19a592c5-059b-4d47-a115-3e7840a3ec50'
  window.ChannelIO('boot', { pluginKey: pluginKey });
}

const clone = (obj) => (JSON.parse(JSON.stringify(obj)))

const createStructuredData = (post, type) => {
    return {
      author: {
         '@type': 'Person',
         name: post.author.name
      },
      description: post.description,
      url: `${FRONTEND_BASE_URL}/${type}/${post.slug}`,
      '@type': 'BlogPosting',
      image: smartUrl(post.img),
      publisher: {
         '@type': 'Organization',
         logo: {
            '@type': 'ImageObject',
            url: `${FRONTEND_BASE_URL}/jettanalysis.png`
         },
         name: '엔지니어'
      },
      headline: post.title,
      dateModified: xmlDateFormat(post.updatedAt),
      datePublished: xmlDateFormat(post.createdAt),
      mainEntityOfPage: {
         '@type': 'WebPage',
         '@id': `${FRONTEND_BASE_URL}/${type}/${post.slug}`
      },
      '@context': 'https://schema.org'
   }   
}

const SD_FOR_GOOGLE = {
  '@context': 'http://schema.org',
  author: {
    '@type': 'Person',
    name: '엔지니어'
  },
  '@type': 'webSite',
  headline: '검색엔진 최적화 전략 가이드',
  name: 'JETT Analysis',
  description: '이제 검색엔진 최적화는 저희에게 맡기세요! JETT Analysis는 다양한 검색엔진 최적화 전략과 팁을 제공합니다.',
  url: FRONTEND_BASE_URL,
  publisher: {
    '@type': 'Organization',
    logo: {
       '@type': 'ImageObject',
       url: `${FRONTEND_BASE_URL}/jettanalysis.png`
    },
    name: '엔지니어'
  }
}


export {
  smartUrl,
  loadKakaoSdk,
  loadChannelIOScript,
  bootChannelIO,
  clone,
  SD_FOR_GOOGLE,
  createStructuredData
}