/**
 * Created by Jerry on 2017/6/18.
 */

//烧烤图片隐藏特效

// (function () {
//   // var foodpic = document.getElementById("foodpic");
//   // var pic = document.getElementById("pic");
//   // var box = document.getElementById("box");
//   // var info = box.children[1];
//
//   window.onscroll = function () {
//     // if (getScrollTop() >= foodpic.offsetTop) {
//     //   animate(box, {"opacity": 0, "top": 0});
//     // } else {
//     //   animate(box, {"opacity": 1, "top": 150});
//     // }
//     //
//     // var Taste = document.getElementById("Taste");
//     // var pk = document.getElementById("pk");
//     // var col_4 = pk.children;
//     //
//     // if (getScrollTop() >= Taste.offsetTop) {
//     //   for (var i = 0; i < col_4.length; i++) {
//     //     col_4[i].style.transform = "rotate(" + (i * 45) + "deg)";
//     //   }
//     //
//     // } else {
//     //   for (var i = 0; i < col_4.length; i++) {
//     //     col_4[i].style.transform = "rotate(0deg)";
//     //   }
//     // }
//   };
//   // info.onmouseover = function () {
//   //   // this.style.backgroundColor = "#fff"
//   //   this.style.opacity = ".3";
//   //   this.style.color = "#fff";
//   //   this.style.fontWeight = "700";
//   // };
//   // info.onmouseout = function () {
//   //   this.style.backgroundColor = "";
//   //   this.style.color = "#000";
//   //   this.style.opacity = "1";
//   // };
// })();






$(function () {
  $(".speedy>.col-3").mouseenter(function () {
    // $(this).children("div")
    $(this).css("opacity", 0.4).siblings().css("opacity", 1);
    $(this).removeClass("roate_animate");
  })
  $(".speedy>.col-3").mouseleave(function () {
    $(this).css("opacity", 1);
    $(this).addClass("roate_animate");
  });

    var foodpic = $('#foodpic');
    var pic = $('#pic');
    var box = $('#box');
    var info = box.children().eq(1);
});



function getScrollTop() {
  return window.pageYOffset || document.documentElement.scrollTop;
}


function getClient() {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
    height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0
  }
}