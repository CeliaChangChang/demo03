
$(function(){
  //全选，选中或不选择子项目前的复选框
  $(".selall").click(function(){
      let bool=$(this).prop("checked")
      $(".singlechk, .selall").prop("checked",bool)
      totalPrice()
  })  

   /* 
 子项目的选中状态来决定全选的选中状态
 如果选中子项目复选框的个数与所有子项目复选框的个数相同时，那么就全选，否则就不全选 */

  $("table .singlechk").click(function(){
      let singleNum=$("table .singlechk:checked").length
      let singleAll=$("table .singlechk").length
      if(singleAll===singleNum){
          $(".selall").prop("checked",true)
      }else{
          $(".selall").prop("checked",false)
      }
      totalPriceAndCount();
  })

  //增加数量+
    $("#shopcartarea table tbody .addbtn").click(function(){
        let num=$(this).siblings(".count").val()
        // console.log(num);
        num++;
       $(this).siblings(".count").val(num)

       singleToatalPrice(this,num)
       totalPriceAndCount();
    })

    //输入价格的键盘事件
    $("#shopcartarea table tbody .count").keyup(function(){
        let num=$(this).val()
        // console.log(num)
        if(isNaN(num)){
            $(this).val(1)
        }if(num<1){                
            $(this).val(1)
        }if(num>200){
             $(this).val(200)
        }
        totalPriceAndCount();

    })

  //减少数量
  $("#shopcartarea table tbody .reducebtn").click(function(){
    let num=$(this).siblings(".count").val()
    if(num>1){
        num--;
    }
    $(this).siblings(".count").val(num);
    // singleTotalPrice(this, num);
   
    singleToatalPrice(this,num)
    totalPriceAndCount();
})

//删除单个商品
$(".delbtn").click(function(){
    $(this).parent().parent().remove();
    totalPriceAndCount();
})
//删除选中商品
/* 
  分析：
  获取所有选中的商品，遍历删除
*/
$(".delallbtn").click(function(){
    $("table .singlechk:checked").each(function(index,dom){
       $(this).parent().parent().remove();
    }) 
    singleToatalPrice(this,num)

})

  //计算小计
    function singleToatalPrice(obj,num){
        //小计=数量*单价
        // alert(1);
        let singlePrice=$(obj).parent().siblings(".singleprice").html()
        // console.log($(obj).parent().siblings(".singleprice"))
        let singleToatalPrice=singlePrice*num;
        $(obj).parent().siblings(".singleTotalPrice").html(singleToatalPrice.toFixed(2))
      
    }

  //计算价格的总计
 /*
  * 分析 ：
  *    应该计算所有选中单项的小计之和，显示在总价处。
  *    找出选中的单项，分别去取出对应的小计，然后相加
  */
 function totalPriceAndCount (){
     let sum=0;
     let sumNum=0;
     $("table .singlechk:checked").each
        (function(index,dom){
            // console.log(index,dom);
          let singleToatalPrice=$(dom).parent().siblings(".singleTotalPrice").html();
          let totalNum=$(dom).parent().siblings().find(".count").val();
        //   console.log(singleToatalPrice)
          sum+=parseFloat(singleToatalPrice)
          sumNum+=parseInt(totalNum)
         })
       $(".totalprice").html(sum.toFixed(2)) 
       $(".totalnum").html(sumNum) 
 }



 
//计算商品的总数,test
//  function totalNum(){
//      let sumNum=0;
//     $("table .singlechk:checked").each(
//         function(index,dom){
//         //console.log(index,dom);
//           let totalNum=$(dom).parent().siblings().find(".count").val();
//           console.log("a:" ,totalNum);
//           sumNum+=parseInt(totalNum) 
//           console.log(totalNum);     
//         })
//         $(".totalnum").html(sumNum) 
//  }

 })


















