
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
lunbo('.sliderBox2',218,332,218)
lunbo('.sliderBox3',334,429,334)

})

// 电子书模块选项卡
$("#ebook .com-title ul li").mouseenter(function(){
    $(this).addClass("current").siblings().removeClass("current")
    let index=$(this).index();
    $("#ebook .eb-main").eq(index).addClass("cur").siblings().removeClass("cur")
})

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

//电子书畅销榜效果
$("#ebook .eb-detail ul li").mouseenter(function(){
   $(this).find("div").show()
   $(this).find(".title").hide()
   $(this).siblings().find("div").hide()
   $(this).siblings().find(".title").show()
})

//首页楼层图1效果
$("#build a").mouseenter(function(){
    $(this).css("backgroundColor","#93d46f")
    $(this).find("span").show()
})
$("#build a").mouseleave(function(){
    $(this).css("backgroundColor","#f2f2f2")
    $(this).find("span").hide()
})


//楼层图回到顶部
$("#build .icon1").click(function(){ 
    let obj=$("#ebook").offset()
    console.log(obj);
   $("html,body").animate({scrollTop:obj.top},600);
})
$("#build .icon2").click(function(){
    let obj=$("#cloth").offset()
    console.log(obj);
    $("html,body").animate({scrollTop:obj.top},600);
})
$("#build .icon3").click(function(){
    let obj=$("#sport").offset()
    console.log(obj);
    $("html,body").animate({scrollTop:obj.top},600);
})
$("#build .icon4").click(function(){
    let obj=$("#childcloth").offset()
    console.log(obj);
    $("html,body").animate({scrollTop:obj.top},600);
})
$("#build .icon5").click(function(){
    let obj=$("#house").offset()
    console.log(obj);
    $("html,body").animate({scrollTop:obj.top},600);
})

//首页楼层图2效果
$("#ticket a.tic2").mouseenter(function(){
   $(this).find("span").show()
}) 
$("#ticket a.tic2").mouseleave(function(){
    $(this).find("span").hide()
 })
  //gotptop效果
  