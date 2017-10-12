/**
 * Created by aaaaa on 2017/6/22.
 */
$(function () {
    //动态添加图片
    console.log($('body').height());;
    $('#itemFood a').each(function (index) {
        // console.log($(this));
        // console.log('img/food/f-' + (index + 1) + '.jpg');
        $('<img src="" alt="">').attr('src','img/food/f-'+(index + 1)+'.jpg').css('display','block').prependTo($(this));
        $(this).css('backgroundImage','');
    })

    $('#xxx').hide();
    //点击图片出现菜单
    $('#itemFood .row div').each(function (index) {
        $(this).click(function () {
            $('#coverFood').show();
            $('#mmzx div').eq(index).show();
            $('#xxx').show();
            // return false;
        });

    })
    // 关闭菜单信息
    $('#xxx').click(function () {
        $('#mmzx div').hide();
        $('#coverFood').hide();
        $(this).hide();

        return false;
    })

});

