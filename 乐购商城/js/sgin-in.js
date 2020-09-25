$().ready(function () {
    // 在键盘按下并释放及提交后验证提交表单
    $(".signupForm").validate({
      //验证信息
      rules: {
        username: {
          required: true,
          myUsre:true,
        },
        pwd: {
          required: true,
          myPwd:true,
        },
        repwd: {
          required: true,
          myPwd:true,
          equalTo: "#pwd",
        },
        ph:{
            required:true,
            myTel:true,
        },
        auth:{
            required:true,
            myVcode:true,
        },
        phcode:{
            required:true,
            myNameCode:true,
        },

      },
      //提示信息
      messages: {
        username: {
          required: "请填写用户名",
        },
        pwd: {
          required: "请填写密码",
        },
        repwd: {
          required: "请确认密码",
          equalTo: "两次密码输入不一致",
        },
        ph:{
            required: '请填写11位手机号码',
        },
        auth:{
            required:'请输入验证码',
        },
        phcode:{
            required:'请输入手机验证码',
        },

      },
    });
    jQuery.validator.addMethod(
        "myUsre",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4,10}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的用户名"
      );
    
      jQuery.validator.addMethod(
        "myPwd",
        function (value, element) {
          var tel = /^[A-za-z0-9]{6,16}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的密码"
      );
      jQuery.validator.addMethod(
        "myTel",
        function (value, element) {
          var tel = /^[0-9]{11}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的手机号码(11位)"
      );
      jQuery.validator.addMethod(
        "myVcode",
        function (value, element) {
          var tel = /^[A-za-z0-9]{4}$/;
          return this.optional(element) || tel.test(value);
        },
        "请填写正确的验证码"
      );
      jQuery.validator.addMethod(
        "myNameCode",
        function (value, element) {
          var tel = /^[0-9]{6}$/;
          return this.optional(element) || tel.test(value);
        },
        "请输入手机验证码(六位)"
      );
  });

//获取元素

let userName=document.querySelector(".username");
let phBox=document.querySelector(".p-del");
let delImg=document.querySelectorAll("#sgin .signupForm .delimg");
let eyeImg=document.querySelectorAll("#sgin .signupForm .eyeImg");
console.log(userName,phBox,delImg,eyeImg);

//删除效果
for(let i=0;i<delImg.length;i++){
   delImg[i].addEventListener("click",function(){
    phBox.value="";
    userName.value="";
    this.style.display="none"
   }); 
}
 

//点击眼睛睁眼，同时可见密码
let eyeflag=true;
for(let i=0;i<eyeImg.length;i++){
eyeImg[i].addEventListener("click",function(){
    // alert(1);
    if(eyeflag){
       eyeImg[i].src="./imgs/open.png";
       this.parentNode.querySelector(".pwdbox").type="text";
    //    repwdBox.type="text";
    }else if(!eyeflag){
        eyeImg[i].src="./imgs/close.png";
        this.parentNode.querySelector(".pwdbox").type="password";
       
    }
      eyeflag=!eyeflag;
})

}

// 注册效果
  let signBtn=document.querySelector('.sginbtn');
  let choose=document.querySelector('.choose');
  choose.addEventListener('click',function(){
    //   alert(1);
      if(this.checked===true){
      signBtn.style.backgroundColor="#f60" 
      signBtn.disabled=false
      }else{
        signBtn.style.backgroundColor="#ccc"
        signBtn.disabled=true
     }
})




