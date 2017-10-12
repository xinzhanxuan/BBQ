/**
 * Created by aaaaa on 2017/6/23.
 */
$(function () {
    $('.activityImg img').each(function (index) {
        $(this).attr('src', 'img/hd/hd-' + (index + 1) + '.jpg')
    })
    var acImgWidth = $('.activityUl li').outerWidth();
    var gap = 27;
    var column = $('.activityUl').width() / (acImgWidth + gap);
    var zxLeft = acImgWidth + gap;
    var arr = [];
    $('.activityUl li').each(function (index) {
        // var minheight = $('.activityUl li').eq(0).outerHeight();
        if (index < column) {
            $(this).css('left', index * zxLeft);
            arr.push($(this).outerHeight());
        } else {
            var minheight = arr[0];
            var num = 0;
            for (var j = 0; j < arr.length; j++) {
                if (minheight > arr[j]) {
                    minheight = arr[j];
                    num = j;
                }
            }
            $(this).css({'left': num * zxLeft, 'top': minheight});
            arr[num] = $(this).outerHeight() + arr[num];
        }

        //高亮
        $('.activityUl li').eq(index).hover(function () {
            $(this).css('opacity',1).siblings().css('opacity',0.4);

        },function () {
            $('.activityUl li').css('opacity',1);
        })
    })


});
