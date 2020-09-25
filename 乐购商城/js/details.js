
// 放大镜效果
$(function() {
	
	var magnifierConfig = {
		magnifier : "#magnifier1",//最外层的大容器
		width : 340,//承载容器宽
		height : 340,//承载容器高
		moveWidth : null,//如果设置了移动盒子的宽度，则不计算缩放比例
		zoom : 5//缩放比例
	};

	var _magnifier = magnifier(magnifierConfig);

	/*magnifier的内置函数调用*/
	/*
		//设置magnifier函数的index属性
		_magnifier.setIndex(1);

		//重新载入主图,根据magnifier函数的index属性
		_magnifier.eqImg();
	*/
});




//lots内选择效果
 $(function(){
	 $("#banner .de-content .de-right .lots .pack1").click(function(){
		 $(this).css("border", "solid 2px #ff6600")
		 $(this).find("i").show()
		 $("#banner .de-content .de-right .lots .pack2").css("border","solid 1px #c9c9c9")
		 $("#banner .de-content .de-right .lots .pack2").find("i").css("display","none")
	 })
	 $("#banner .de-content .de-right .lots .pack2").click(function(){
		$(this).css("border", "solid 2px #ff6600")
		$(this).find("i").show()
		$("#banner .de-content .de-right .lots .pack1").css("border","solid 1px #c9c9c9")
		$("#banner .de-content .de-right .lots .pack1").find("i").css("display","none")
	})
 })


 //购物数量加减
 let addBox=document.querySelector(".add")
 let cutBox=document.querySelector(".cut")
 let joinBox=document.querySelector(".join")
 console.log(addBox,cutBox,joinBox);
 let num=joinBox.value;
 console.log(num);
 addBox.addEventListener("click",function(){
   num++;
   joinBox.value=num;
 })
 cutBox.addEventListener("click",function(){
	num--;
	if(num>=1){
	joinBox.value=num;	
	}else{
	joinBox.value=1;
	num=1;
	} 
  })

  joinBox.addEventListener("input",function(){
	  let str=this.value;
	  console.log(str,typeof str); 
	  str++;
	  if(isNaN(str)){
		joinBox.value=1;
	  }
	//let num=parseFloat(str)
	  if(str<1){
		joinBox.value=1;
	  }
	  if(str>200){
		joinBox.value=200;
	  }
  })

//评价选项卡
let lis=document.querySelectorAll(".ev-right .com-title>ul>li")
let divs=document.querySelectorAll(".ev-right .ev-main")
console.log(lis,divs);
for(let i=0;i<lis.length;i++){
   lis[i].addEventListener("mouseenter",function(){
	   for(let j=0;j<lis.length;j++){
			 lis[j].classList.remove("cur");
			divs[j].classList.remove("active");
	   }
	   lis[i].classList.add("cur");
	   divs[i].classList.add("active");
   })
}