$(function(){
    // alert(1);
    $("#borrow-btn").on("click","button",function(){
        var type=$(this).data("type")
        console.log(type);
        //存储到会话存储
        sessionStorage.setItem("type",type);
       //跳转到借款申请页面
       location.href="/#mycenter/borrow_apply"
    })


})