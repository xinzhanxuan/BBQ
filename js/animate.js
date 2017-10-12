/**
 * Created by Jerry on 2017/6/16.
 */


/**
 * todo 附加不透明度和层级缓动动画
 * @param elment
 * @param obj
 * @param fn
 */
function animate(elment, obj, fn) {
  clearInterval(elment.timer);
  elment.timer = setInterval(function () {
    var flag = true;
    for (var k in obj) {
      if (k === "opacity") {
        var leader = getStyle(elment, k) * 100;
        var target = obj[k] * 100;
        var step = (target - leader) /10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        elment.style[k] = leader / 100;
      } else if (k === "zIndex") {
        elment.style.zIndex = obj[k];
      } else {
        var leader = parseInt(getStyle(elment, k)) || 0;
        var target = obj[k];
        var step = (target - leader) /10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader = leader + step;
        elment.style[k] = leader + "px";
      }
      if (leader != target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(elment.timer);
      if (fn) {
        fn();
      }
    }
  }, 20);
}

function getStyle(obj, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(obj, null)[attr];
  } else {
    return obj.currentStyle[attr];
  }
}
