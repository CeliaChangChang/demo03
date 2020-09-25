//登录选项卡效果
let spans=document.querySelectorAll("#register .title>span");
let divs=document.querySelectorAll("#register .re-main");
console.log(spans,divs);
for(let i=0;i<spans.length;i++){
    spans[i].addEventListener("click",function(){
        for(let j=0;j<spans.length;j++){
            spans[j].classList.remove("cur")
            divs[j].classList.remove("active")
         }
           spans[i].classList.add("cur")
           divs[i].classList.add("active")
    })
}


//二维码的交互效果
let qrMain=document.querySelector(".qr-main");
let qrCode=document.querySelector(".qr-code");
let phone=document.querySelector(".phone");
console.log(qrCode,phone,qrMain);
// qrCode.addEventListener("mouseenter",function(){
//     // alert(1);
//     // qrCode.style.left=25+"px";
//     phone.style.display="block";
// })
// qrCode.addEventListener("mouseleave",function(){
//     // alert(1);
//     // qrCode.style.left=100+"px";
   
// })


qrCode.addEventListener("mouseenter",function(){
    startMove(this, {left:25}, 300, "linear")
    phone.style.display="block";
})
qrCode.addEventListener("mouseleave",function(){
    startMove(this, {left:100}, 300, "linear")
     phone.style.display="none";
})





$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $("#signupForm").validate({
        rules: {
            username: {
                required: true,
                username:true,
            },
            pwd: {
                required: true,
                pwd:true
            }
        },
        messages: {
            username: {
                required: "请输入用户名",
            },
            pwd: {
                required: "请输入密码",
            },
            repwd: {
                required: "请输入密码",
                equalTo: "两次密码输入不一致"
            },
            agree: "请接受我们的声明",
            select:'请选择选项'
            
        }
    })
    //用户名
    jQuery.validator.addMethod("username", function(value, element) {   
            var tel = /^[A-Za-z0-9]{4,10}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的用户名");
    //用户名
    jQuery.validator.addMethod("pwd", function(value, element) {   
            var tel = /^[A-Za-z0-9]{6,12}$/;
            return this.optional(element) || (tel.test(value));
    }, "请正确填写您的密码");

});



//点击x取消
let cancel=document.querySelector('.cancel')
let userBox=document.querySelector('.user')
console.log(cancel,userBox);
cancel.addEventListener("click",function(){
    userBox.value="";
    // this.style.display="none";
})

