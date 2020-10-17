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
lunbo('.sliderBox1',450,970,450)
lunbo('.sliderBox3',300,455,300)


})



// 小轮播

$(function(){
    //回调函数计数
    var callbackIndex = 0;
    $('.silder-box-1').mySilder({
        width:957, //容器的宽度 必选参数!!!!!!
        height:285, //容器的高度 必选参数!!!!!!
        auto:true,//是否自动滚动
        autoTime:5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
        direction:'x',//滚动方向,默认X方向
        autoType:'left', //滚动方向，auto为true时生效
        few:1,//一次滚动几个，默认滚动1张
        showFew:4, //显示几个,就不用调css了,默认显示一个
        clearance:15, //容器之间的间隙，默认为 0
        silderMode:'linear' ,//滚动方式
        timeGap:350,//动画间隙，完成一次动画需要多长时间，默认700ms
        buttonPre:'.silder-button.btl',//上一个，按钮
        buttonNext:'.silder-button.btr',//下一个，按钮
        jz:true, //点击时，是否等待动画完成
        runEnd:function(){//回调函数
            callbackIndex ++ ;
            $('.cj em').text(callbackIndex);
        }
    });
    
});