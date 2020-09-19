
//文档加载事件
// $(function (){
//     $(".sliderBox1").slidebox({
//         boxh: 420,//盒子的高度
//         w: 1000,//图片的宽度
//         h: 420,//图片的高度
//         isShow: true,//是否显示控制器
//         isShowBtn: true,//是否显示左右按钮
//         controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//         controlsW: 12,//控制按钮宽度
//         controlsH: 12,//控制按钮高度
//         radius: 6//控制按钮圆角度数
//     });  
// })


// $(function (){
//     $(".sliderBox2").slidebox({
//         boxh: 218,//盒子的高度
//         w: 332,//图片的宽度
//         h: 218,//图片的高度
//         isShow: true,//是否显示控制器
//         isShowBtn: true,//是否显示左右按钮
//         controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//         controlsW: 12,//控制按钮宽度
//         controlsH: 12,//控制按钮高度
//         radius: 6//控制按钮圆角度数
//     });  
// })


function lunbo(selector,boxh,w,h){
    $(selector).slidebox({
        boxh: boxh,//盒子的高度
        w: w,//图片的宽度
        h: h,//图片的高度
        isShow: true,//是否显示控制器
        isShowBtn: true,//是否显示左右按钮
        controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
        controlsW: 12,//控制按钮宽度
        controlsH: 12,//控制按钮高度
        radius: 6//控制按钮圆角度数
    });  
}

$(function(){

lunbo('.sliderBox1',420,1000,420),
lunbo('.sliderBox2',218,332,218),
lunbo('.sliderBox3',334,429,334),
lunbo('.sliderBox4',450,1000,450),
lunbo('.sliderBox5',530,1200,530)

})

// 电子书模块选项卡
$("#ebook .com-title ul li").mouseenter(function(){
    $(this).addClass("current").siblings().removeClass("current")
    let index=$(this).index();
    $("#ebook .eb-main").eq(index).addClass("cur").siblings().removeClass("cur")
})
console.log($("#ebook .com-title ul li"));



//首页所有选项卡效果
function getTab(com){
$(com+" .com-title ul li").mouseenter(function(){
    $(this).addClass("current").siblings().removeClass("current")
    let index=$(this).index();
    $(com+" .com-main").eq(index).addClass("cur").siblings().removeClass("cur")
})
}

getTab("#cloth");
getTab("#sport");
getTab("#childcloth");

//电子书/畅销榜效果

function getHot(a){
    let h=$(a+" ul li").mouseenter(function(){
      $(this).find("div").show()
      $(this).find(".title").hide()
      $(this).siblings().find("div").hide()
      $(this).siblings().find(".title").show()
    })
  }
  getHot(".hot");
  getHot(".eb-detail");
  getHot(".gr-detail");
  
  
  





//首页楼层图1效果
$("#build li").hover(function(){
    $(this).css({ 
        "backgroundColor": $(this).attr("bgc"),
        "backgroundPositionX":-40,
        //padding内容的宽度（）
         width:40
    }
    )
},function(){
    $(this).css({
        "backgroundColor":'',
        "backgroundPositionX":0,
         width:0  
   })
   //楼层图回到各个区域
}).click(function(){
        /*
         * 点击事件：
         * 1 找到对应的跳转区域， $(".floor").eq(index)
         * 2 取出它们距离文档顶部的距离，$(".floor").eq(index).offset().top 
         * 再赋给浏览器的滚动值　
         * $("html,body").scrollTop(  $(".floor").eq(index).offset().top  )
         */
    let $jumpBox=$(".floor").eq($(this).index());
    // alert(1);
    // console.log($jumpBox);
    let top= $jumpBox.offset().top;
    $("html,body").stop().animate({scrollTop:top},500)
})

//首页楼层图2效果
$("#ticket a.tic2").mouseenter(function(){
   $(this).find("span").show()
}) 
$("#ticket a.tic2").mouseleave(function(){
    $(this).find("span").hide()
 })

  //gotpTop效果
  $(".gotoTop").click(function(){
    let $timeId=setInterval(function(){
      let $go=$("html,body").scrollTop();
        let $newst=$go-100;
        console.log($newst);
        $("html,body").stop().animate({scrollTop:$newst},10);
         if($newst <= 0){
             clearInterval($timeId);
         }
      },30);
  })
 
 