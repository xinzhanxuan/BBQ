/**
 * Created by aaaaa on 2017/6/17.
 */
$(document).ready(function () {
    var arr = [4, 3, 2, 1];
    var imgWidth = $('.imm').css('width');
    var liLength = $('.imm li').length;
    console.log(liLength);
    imgWidth = parseInt(imgWidth);
    console.log(imgWidth);
    //控制层级
    function zindex() {
        $('.imm li').each(function (index) {
            $(this).css({
                'zIndex': arr[index],
                'width': imgWidth + 'px',
                'height': 484 + 'px',
                'top': 0,
                'left': 0,
                'borderRadius': 0
            })


        })

    }

    zindex();

    //箭头
    var flag = true;
    $('#arrowsR').click(function () {
        if(flag){
            flag = false;
            $('.imm li').eq(0).stop().animate({
                width: 10,
                height: 10,
                borderRadius: '50%',
                top: '50%',
                left: '50%'
            },1000,function () {
                $('.imm li').eq(0).appendTo($('.imm'));
                zindex();
                flag = true;
            })
        }

    })
    $('#arrowsL').click(function () {
        if(flag){
            flag = false;
            $('.imm li').eq(liLength - 1).prependTo($('.imm'));
            zindex();
            $('.imm li').eq(0).css({
                width: 10,
                height: 10,
                borderRadius: '50%',
                top: '50%',
                left: '50%',
                marginLeft: -5,
                marginTop: -5
            });
            $('.imm li').eq(0).stop().animate(
                {
                    top: 0,
                    left: 0,
                    width: imgWidth,
                    height: 484,
                },1000, function () {
                    zindex();
                    flag = true;
                }
            )
        }



    })
    //设置定时器
    var timeImg;
    timeImg = setInterval(function () {
        $('#arrowsL').click();
    }, 2500);
    //鼠标放在图片上停止轮播
    $('#rotation').hover(function () {
        clearInterval(timeImg);
    }, function () {
        timeImg = setInterval(function () {
            $('#arrowsL').click();
        }, 2500);
    })

//视频
    var player1 = document.getElementsByClassName('video1')[0];
    var player2 = document.getElementsByClassName('video2')[0];
    var player3 = document.getElementsByClassName('video3')[0];
    var player4 = document.getElementsByClassName('video4')[0];

    player1.play();
    player2.play();
    player3.play();
    player4.play();
    setInterval(function () {
        player1.play();
        player2.play();
        player3.play();
        player4.play();
    },15000)

//tab栏
    $('#storeList>li').hover(function () {
        var index = $(this).index();
        $('#storeList>li').removeClass('red');
        $(this).addClass('red');
        $('#storeColumn>div').removeClass('storeShow');
        $('#storeColumn>div').eq(index).addClass('storeShow');
    })


//底部字体呼吸灯颜色转换
    setInterval(function () {

            if($('.tasteSpeed div img').hasClass('tasteSpeedImg')){
                $('.tasteSpeed div img').removeClass('tasteSpeedImg');
            }else{
                $('.tasteSpeed div img').addClass('tasteSpeedImg');
            }
        if($('#taste #hai>h1').hasClass('hh1')){
            $('#taste #hai>h1').removeClass('hh1');
        }else{
            $('#taste #hai>h1').addClass('hh1');
        }
        if($('#taste #hai>h3').hasClass('hh3')){
            $('#taste #hai>h3').removeClass('hh3');
        }else{
            $('#taste #hai>h3').addClass('hh3');
        }
        if($('.cc').hasClass('hh2')){
            $('.cc').removeClass('hh2');
            $('.cc').addClass('footColor')
        }else{
            $('.cc').addClass('hh2')
            $('.cc').removeClass('footColor');
        }

   },1000);





})