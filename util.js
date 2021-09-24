const FRONTEND_BASE_URL = `${process.env.BASE_URL}${process.env.FRONTEND_PORT}`
const KAKAO_SDK_SCRIPT_ID = 'kakao-sdk-script'

const smartUrl = url => {
  const regex = /^(?:[a-z]+:)?\/\//i
  if (regex.test(url)) return url
  if (url.charAt(0) !== '/') url = `/${url}`
  return `${FRONTEND_BASE_URL}${url}`
}

const loadKakaoSdk = (callback) => {
  let script = document.querySelector(`#${KAKAO_SDK_SCRIPT_ID}`)
  
  if (script) {
    callback && callback()
    return
  }

  script = document.createElement('script')
  script.id = KAKAO_SDK_SCRIPT_ID
  script.src = 'https://developers.kakao.com/sdk/js/kakao.min.js'
  script.addEventListener('load', function (e) {
    Kakao.init('33d3fefda63de9dadf73b14cd69f8d93')
    callback && callback()
  })
  document.body.appendChild(script)
}

const loadChannelIOScript = function () {
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

const bootChannelIO = function (settings) {
  window.ChannelIO('boot', settings);
}

const shutdownChannelIO = function () {
  window.ChannelIO('shutdown');
}

export { smartUrl, loadKakaoSdk, loadChannelIOScript, bootChannelIO }