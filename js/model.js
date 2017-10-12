/**
 * Created by aaaaa on 2017/6/17.
 */
$(document).ready(function () {
    $('#navFirst').css({
        'position': 'fixed',
        'zIndex': 200,
        'top': 0
    })
    var player1 = $('.video1');
    var player2 = $('.video2');
    var player3 = $('.video3');
    var player4 = $('.video4');
    var ttt;
    // var player1 = document.getElementsByClassName('video2')[0];
    // var player2 = document.getElementsByClassName('video2')[0];
    // var player3 = document.getElementsByClassName('video3')[0];
    // var player4 = document.getElementsByClassName('video4')[0];


    // var foodpic = $('#foodpic');
    // var pic = $('#pic');
    // var box = $('#box');
    // var info = box.children().eq(1);



    $(window).scroll (function () {
        console.log($(this).scrollTop());
        //导航伸缩
        if ($(window).scrollTop() > 80) {

            $('#navFirst').removeClass('navFirst');
            $('#navFirst').addClass('navFirst2');
            $('#happy div').addClass('spin');
            // 回到顶部
            // $(".actGotop").css({'top':'400',right:'30'});
            $(".actGotop").fadeIn();
            $('#backTopxx').css('display', 'block');
        } else {
            //导航伸缩
            $('#navFirst').addClass('navFirst');
            $('#navFirst').removeClass('navFirst2');
            $('#navFirst .navContent .logo a img').attr('src', './img/icon/site-brand@2x.png');
            // 回到顶部
            $(".actGotop").fadeOut();
            // $('#backTopxx').css('display', 'none');
        }
        // if($(this).scrollTop() > 1722){
        //     ttt = setInterval(function () {
        //         // player1.load();
        //         player1.play();
        //         // player2.load();
        //         player2.play();
        //         // player3.load();
        //         player3.play();
        //         // player4.load();
        //         player4.play();
        //     },15000)
        // }else{
        //    clearInterval(ttt);
        // }


        //join界面
        // if ($(this).scrollTop() >= foodpic.position().top) {
        //     // animate(box, {"opacity": 0, "top": 0});
        //     $(box).animate({"opacity": 0, "top": 0});
        // } else {
        //     $(box).animate({"opacity": 1, "top":150});
        // }

        var Taste = $('#Taste');
        var pk = $('#pk')
        var col_4 = pk.children();

        if ($(window).scrollTop() >= Taste.position().top) {
            for (var i = 0; i < col_4.length; i++) {
                col_4[i].style.transform = "rotate(" + (i * 45) + "deg)";
            }

        } else {
            for (var i = 0; i < col_4.length; i++) {
                col_4[i].style.transform = "rotate(0deg)";
            }
        }

    })
    //2. 点击小火箭，让scrollTop慢慢的变成0
    $(".actGotop").click(function () {
        $(".actGotop img").attr('src','images/gotop.gif');
        //jq封装好的一个方法，他可以修改scrollTop值
        //$(window).scrollTop(0);

        // $(this).animate({'top':0}, 1000, "linear",function () {
        //     $(".actGotop").fadeOut();
        // });
        //{width: height:}//写的是样式

        //在所有浏览器里面都没问题。
        //需要让滚动满满的变成0
        $("html,body").animate({scrollTop:0}, 1000, "linear",function () {
            $(".actGotop img").attr('src','img/rocket.png');
        });



        //window没有scrollTop这个属性。 pageYOffset:只读的，不能设置
        //window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    });

})
