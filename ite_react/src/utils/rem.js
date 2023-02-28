// // // 实现 rem 等比适配
// const baseSize = 37.5 /* 基准适配 */

// function setRem() {
//   // 设置当前页面基于 375 进行缩放适配，需要根据设计稿改写除数
//   const scale = document.documentElement.clientWidth / 375
//   // 设置页面根节点字体大小，第二个乘积表示最大扩大两倍
//   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
// }
// setRem()
window.onload = function () {
  /*720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;100代表换算比例，这里写100是
      为了以后好算,比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等*/
  getRem(756, 100)
}
window.onresize = function () {
  getRem(756, 100)
}

function getRem(pwidth, prem) {
  var html = document.getElementsByTagName('html')[0]
  var oWidth = document.body.clientWidth || document.documentElement.clientWidth
  html.style.fontSize = (oWidth / pwidth) * prem + 'px'
}
// // rem自适应设置
// var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
// var reCalc = function() {
//     //设置根字体大小npm
//     var docEl = document.documentElement;
//     docEl.style.fontSize = 20 * (docEl.clientWidth / 375) + 'px';

// }
// document.addEventListener("DOMContentLoaded", function() {
//     reCalc();
// }, false)

// window.addEventListener(resizeEvt, reCalc, false);
