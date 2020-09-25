// $(function(){
//     $("#offer .of-main>li .pic1").css(
//         {
//          width:150,
//          height:150
//         }
//     )
// })
// console.log($("#offer .of-main>li .pic1"));


// function lunbo(selector,boxh,w,h){
//     $(selector).slidebox({
//         boxh: boxh,//盒子的高度
//         w: w,//图片的宽度
//         h: h,//图片的高度
//         isShow: true,//是否显示控制器
//         isShowBtn: true,//是否显示左右按钮
//         controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
//         controlsW: 12,//控制按钮宽度
//         controlsH: 12,//控制按钮高度
//         radius: 6//控制按钮圆角度数
//     });  
// }

// $(function(){

// lunbo('.sliderBox5',530,1200,530)
// })


//独家提供选项卡
$("#offer .com-title ul li").mouseenter(function(){
    // alert(1);
    $(this).addClass("current").siblings().removeClass("current")
    let index=$(this).index()
    $("#offer .sliderBox5").eq(index).addClass("cur").siblings().removeClass("cur")
     console.log($("#offer .sliderBox5"));
})


//换一换效果
let guessMain=document.querySelectorAll("#guess .main .gu-main");
let changBox=document.querySelector(".change");
console.log(guessMain,changBox);
let flag=1;
    flag=2;
    flag=3;
changBox.addEventListener("click",function(){
   if(flag==1){
      guessMain[0].classList.remove('cur');
      guessMain[2].classList.remove('cur');
      guessMain[1].classList.add('cur');
      flag=3
  }
  else if(flag==2){
      guessMain[0].classList.add('cur');
      guessMain[2].classList.remove('cur');
      guessMain[1].classList.remove('cur');
       flag=1
     
  }
  else if(flag==3){
      guessMain[0].classList.remove('cur');
      guessMain[2].classList.add('cur');
      guessMain[1].classList.remove('cur');
      flag=1
      
  }
   
})