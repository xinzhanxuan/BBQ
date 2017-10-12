/**
 * Created by Jerry on 2017/6/23.
 */


cityArray = new Array();
cityArray[0] = new Array("北京市","东城区|西城区|朝阳区|海淀区|丰台区|石景山区|房山区|通州区|顺义区|大兴区|昌平区|平谷区|怀柔区|门头沟区|密云县|延庆县");
cityArray[1] = new Array("上海市"," 黄浦区|卢湾区|徐汇区|长宁区|静安区|普陀区|闸北区|虹口区|杨浦区|宝山区|闵行区|嘉定区|浦东新区|松江区|金山区|青浦区|南汇区|奉贤区");
cityArray[2] = new Array("天津市","和平区|河西区|河东区|河北区|南开区|红桥区|东丽区|西青区|北辰区|津南区|塘沽区|大港区|汉沽区");
cityArray[3] = new Array("重庆市","渝中区|大渡口区|江北区|沙坪坝区|九龙坡区|南岸区|北碚区|綦江区|双桥区|渝北区|巴南区|万州区|涪陵区|黔江区|长寿区|江津区|合川区|永川区|南川区");
cityArray[4] = new Array("河北省","石家庄|唐山|秦皇岛|邯郸|邢台|保定|张家口|承德|沧州|廊坊|衡水");
cityArray[5] = new Array("山西省","太原|大同|阳泉|长治|晋城|朔州|晋中|运城|忻州|临汾|吕梁");
cityArray[6] = new Array("内蒙古","呼和浩特|包头|乌海|赤峰|通辽|鄂尔多斯|呼伦贝尔|巴彦淖尔|乌兰察布|兴安|锡林郭勒|阿拉善");
cityArray[7] = new Array("辽宁省","沈阳|大连|鞍山|抚顺|本溪|丹东|锦州|营口|阜新|辽阳|盘锦|铁岭|朝阳|葫芦岛");
cityArray[8] = new Array("吉林省","长春|吉林|四平|辽源|通化|白山|松原|白城|延边");
cityArray[9] = new Array("黑龙江","哈尔滨|齐齐哈尔|鸡西|鹤岗|双鸭山|大庆|伊春|佳木斯|七台河|牡丹江|黑河|绥化|大兴安岭");
cityArray[10] = new Array("江苏省","南京|无锡|徐州|常州|苏州|南通|连云港|淮安|盐城|扬州|镇江|泰州|宿迁");
cityArray[11] = new Array("浙江省","杭州|宁波|温州|嘉兴|湖州|绍兴|金华|衢州|舟山|台州|丽水");
cityArray[12] = new Array("安徽省","合肥|芜湖|蚌埠|淮南|马鞍山|淮北|铜陵|安庆|黄山|滁州|阜阳|宿州|巢湖|六安|亳州|池州|宣城");
cityArray[13] = new Array("福建省","福州|厦门|莆田|三明|泉州|漳州|南平|龙岩|宁德");
cityArray[14] = new Array("江西省","南昌|景德镇|萍乡|九江|新余|鹰潭|赣州|吉安|宜春|抚州|上饶");
cityArray[15] = new Array("山东省","济南|青岛|淄博|枣庄|东营|烟台|潍坊|威海|济宁|泰安|日照|莱芜|临沂|德州|聊城|滨州|菏泽");
cityArray[16] = new Array("河南省","郑州|开封|洛阳|平顶山|安阳|鹤壁|新乡|焦作|濮阳|许昌|漯河|三门峡|南阳|商丘|信阳|周口|驻马店|济源");
cityArray[17] = new Array("湖北省","武汉|黄石|襄樊|十堰|荆州|宜昌|荆门|鄂州|孝感|黄冈|咸宁|随州|恩施");
cityArray[18] = new Array("湖南省","长沙|株洲|湘潭|衡阳|邵阳|岳阳|常德|张家界|益阳|郴州|永州|怀化|娄底|湘西");
cityArray[19] = new Array("广东省","广州|深圳|珠海|汕头|韶关|佛山|江门|湛江|茂名|肇庆|惠州|梅州|汕尾|河源|阳江|清远|东莞|中山|潮州|揭阳云浮");
cityArray[20] = new Array("广西省","南宁|柳州|桂林|梧州|北海|防城港|钦州|贵港|玉林|百色|贺州|河池|来宾|崇左");
cityArray[21] = new Array("海南省","海口|三亚");
cityArray[22] = new Array("四川省","成都|自贡|攀枝花|泸州|德阳|绵阳|广元|遂宁|内江|乐山|南充|宜宾|广安|达州|眉山|雅安|巴中|资阳|阿坝|甘孜凉山");
cityArray[23] = new Array("贵州省","贵阳|六盘水|遵义|安顺|铜仁|毕节|黔西南|黔东南|黔南");
cityArray[24] = new Array("陕西省","西安|铜川|宝鸡|咸阳|渭南|延安|汉中|榆林|安康|商洛");
cityArray[25] = new Array("甘肃省","兰州|嘉峪关|金昌|白银|天水|武威|张掖|平凉");
cityArray[26] = new Array("云南省","昆明市|大理市|曲靖市|玉溪市|昭通市|楚雄市|红河市|文山市|思茅市|西双版纳市|保山市|德宏市|丽江市|怒江市|迪庆市|临沧市");
cityArray[27] = new Array("其它","其它");

function getCity(currProvince)
{
  //当前 所选择 的 省
  var currProvince = currProvince;
  var i,j,k;
  //清空 城市 下拉选单
  document.all.selCity.length = 0 ;
  for (i = 0 ;i <cityArray.length;i++)
  {
    //得到 当前省 在 城市数组中的位置
    if(cityArray[i][0]==currProvince)
    {
      //得到 当前省 所辖制的 地市
      tmpcityArray = cityArray[i][1].split("|")
      for(j=0;j<tmpcityArray.length;j++)
      {
        //填充 城市 下拉选单
        document.all.selCity.options[document.all.selCity.length] = new Option(tmpcityArray[j],tmpcityArray[j]);
      }
    }
  }
}



checkReg(document.getElementById("name"), /^[\u4e00-\u9fa5]{2,4}$/ );
checkReg(document.getElementById("phone"), /^1[34578]\d{9}$/ );

function checkReg (element, reg) {
  element.onblur = function () {
    var content = this.value.trim();
    if(reg.test(content)){
      this.nextElementSibling.innerHTML = "合法";
      this.nextElementSibling.style.color = "green";
    }else {
      this.nextElementSibling.innerHTML = "不合法";
      this.nextElementSibling.style.color = "red";
    }
  }
}
$(function () {
  $(".gcontainer>div").hide();
  $(".gcontainer>div:eq(0)").show();

  $(".gnavCon a").click(function () {
    var n = $(".gnavCon a").index(this);
    $(".gnavCon a").index(this);
    $(".gcontainer>div").hide();
    $(".gcontainer>div:eq(" + n + ")").show(1000);
  })
  var $p = $(".message>p")
  $p.mouseenter(function () {
    $(this).css("opacity", 1).siblings().css("opacity", .5);
  })
  $p.mouseleave(function () {
    $p.css("opacity", 1);
  })

  var $joinus = $(".joinus");
  var $welcome = $("#welcome");
  var $cancel = $("#cancel");

  $joinus.on("click", function () {
    $welcome.show(1000);
  });
  $cancel.on("click", function () {
    $welcome.hide(1000);
  });
  $("#bc02").on("click", function () {
    $welcome.hide(1000);
  });


  $(".box4").on("click", function () {
    $(".rightBox").empty();
    var timer1 = setInterval(function () {
      $("<p>地铁站外，公交站前，忙碌一天的人们</p>").appendTo($(".rightBox"));
      clearInterval(timer1);
    }, 1000);

    var timer2 = setInterval(function () {
      $("<p>日复一日的画面，看似每个人都活着同样的轨迹</p>").appendTo($(".rightBox"));
      clearInterval(timer2);
    }, 2000);

    var timer3 = setInterval(function () {
      $("<p>可每个人在那些角落发生的故事，</p>").appendTo($(".rightBox"));
      clearInterval(timer3);
    }, 3000);
    var timer4 = setInterval(function () {
      $("<p>却有着比影视剧还精彩的桥段。</p>").appendTo($(".rightBox"));
      clearInterval(timer4);
    }, 4000);
    var timer5 = setInterval(function () {
      $("<p>别以为编剧厉害，生活比什么都厉害。</p>").appendTo($(".rightBox"));
      clearInterval(timer5);
    }, 5000);
    var timer6 = setInterval(function () {
      $("<p>—Jerry</p>").appendTo($(".rightBox")).addClass("myname");
      clearInterval(timer6);
    }, 6000);
    // $(".box4").off();
  })


})