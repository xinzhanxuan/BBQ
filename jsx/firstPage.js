/**
 * Created by aaaaa on 2017/6/17.
 */
$('document').ready(function(){
//克隆第一个元素
    $('.imm li').eq(0).clone().appendTo($('.imm'));
    var time;//定时器
    var count = 0;
    var imgCount =$('.imm li').length
    console.log($('.imm'));
    var imgWidth = $('#rotation').css('width');
    //获得图片宽度
    imgWidth = parseInt(imgWidth);
    console.log(imgWidth);
    //点击圆点
    $('.circle li').each(function (index,element) {

        $(this).click(function () {
             count = index;
            console.log(-index * imgWidth);
            $('.circle li').removeClass('white');
            $(this).addClass('white');
            if(count == imgCount-1){
                count =0;
                $('.imm').css('left',-count*imgWidth+'px');
            }else {
                $('.imm').animate({
                    'left':-count*imgWidth + 'px'
                })
            }

        })
    })
    //右箭头

    console.log(imgCount - 1);
    $('#arrowsR').click(function () {
        if(count >= imgCount-1){
            count = 0;
            $('.imm').css('left',-count*imgWidth+'px');
        }
       count++;
        $('.imm').animate({
            left:-count*imgWidth + 'px'
        })
        if(count == imgCount-1){
            $('.circle li').removeClass('white');
            $('.circle li').eq(0).addClass('white');
        }else{
            $('.circle li').removeClass('white');
            $('.circle li').eq(count).addClass('white');
        }

    })
    //左箭头
    $('#arrowsL').click(function () {
        if(count <= 0){
            count = imgCount -1;
            $('.imm').css('left',-count*imgWidth+'px');
        }
        count--;
        $('.imm').animate({
            left:-count*imgWidth + 'px',
            height:0 + 'px',
            transform:'rotateZ(80deg)'
        },function () {
            $('.imm').css({
                height:484 + 'px',
            })

        })

            $('.circle li').removeClass('white');
            $('.circle li').eq(count).addClass('white');


    })
   time =  setInterval(function () {
        $('#arrowsR').click();
    },2000)
    $('#rotation').hover(function () {
        clearInterval(time);
    },function () {
        time =  setInterval(function () {
            $('#arrowsR').click();
        },2000)
    })
})