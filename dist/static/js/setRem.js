/* eslint-disable */
(function (document, window) {
    var dpr, rem, scale;
    var docEl = document.documentElement;
    var fontEl = document.createElement('style');
    var metaEl = document.querySelector('meta[name="viewport"]');
    var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';		//定义旋转事件


    dpr = window.devicePixelRatio || 1;

    var clientWidth = docEl.clientWidth;
    var clientHeight = docEl.clientHeight;

    // 判断视口的宽高，选择小的作为设置的
    if(clientWidth > clientHeight){
        clientWidth = clientHeight;
    }

    rem = clientWidth * dpr / 10;

    scale = 1 / dpr;
    // console.log(IsPC())

    // 设置viewport，进行缩放，达到高清效果
    metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + ',initial-scale=' + scale + ',maximum-scale=' + scale + ', minimum-scale=' + scale + ',user-scalable=no');

    // 设置data-dpr属性，留作的css hack之用
    docEl.setAttribute('data-dpr', dpr);

    // 动态写入样式
    docEl.firstElementChild.appendChild(fontEl);

    if ( IsPC() ) {
        fontEl.innerHTML = 'html{font-size: 40px !important;}';
    }
    else{
        fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
    }



    // 给js调用的，某一dpr下rem和px之间的转换函数
    window.rem2px = function(v) {
        v = parseFloat(v);
        return v * rem;
    };
    window.px2rem = function(v) {
        v = parseFloat(v);
        return v / rem;
    };

    window.dpr = dpr;
    window.rem = rem;

    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
})(document, window);

