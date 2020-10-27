$(function () {
  checkLogin();
  //内容切换
  $(".el-re-main .nav-tabs li").click(function () {
    $(this).addClass("active").siblings().removeClass("active")
    let index = $(this).index();
    $(".el-re-main .re-body").eq(index).addClass("cur").siblings().removeClass("cur")
  });
  //调用银行卡列表
  $.ajax({
    url: baseURL + "/p2p/cardList",
    type: "get",
    data: {
      userid: localStorage.getItem("userid")
    },
    success: function (data) {
      //判断用户是否有银行卡列表
      // console.log(data.data);
      var arr = data.data;
      if (arr.length === 0) {
        alert("请先绑定银行卡");
        $('[data-toggle="modal"]').click()
      } else { //有银行卡列表 渲染到页面
        var resHTML = "";
        for (var i = arr.length - 1; i >= 0; i--) {
          resHTML += '<option value="' + arr[i].id + '">' + arr[i].bankName + arr[i].cardNumber + "(" + arr[i].branchName + ")" + '</option>';
        }
        $("#cardid").html(resHTML);
        $("")
      }
    }

  })

  //給银行卡号input添加事件
  var kFlog = false;
  $("#cardNumber").blur(function () {
    var uVal = $(this).val();
    let regex = /^([1-9]{1})(\d{14}|\d{16,19})$/;
    if (regex.test(uVal)) {
      $(this).removeClass("is-invalid").siblings("span").text("");
      kFlog = true;
    } else {
      $(this).addClass("is-invalid").siblings("span").text("请输入16-19位数字的银行卡号");
      kFlog = false;
    }
  })


  //给绑定按钮添加点击事件
  $("#bind-btn").click(function () {
    // alert(1);
    if (kFlog) {
      $.ajax({
        url: baseURL + "/p2p/bindCard",
        type: "post",
        data: {
          userid: localStorage.getItem("userid"),
          bankName: $("#bankName").val(),
          branchName: $("#branchName").val(),
          cardNumber: $("#cardNumber").val()
        },
        success: function (data) {
          console.log(data);
          if (data.code === 200) {
            alert("绑定银行卡成功");
            window.location.reload() //刷新
          } else {
            alert("绑定银行卡失败,请稍后再试~~~");
          }
        }
      })
    } else {
      $("#cardNumber").blur();
      $("#cardNumber").addClass("is-invalid").siblings("span").text("客官，请先输入正确的卡号再登录~~");
    }
  })

  //判断充值金额
  var cFlog = false;
  $("#money").blur(function () {
    var uVal = $(this).val();
    let regex = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/;
    if (regex.test(uVal)) {
      $(this).removeClass("is-invalid").siblings("span").text("");
      cFlog = true;
    } else {
      $(this).addClass("is-invalid").siblings("span").text("请输入0-5000之前两位小数的数字");
      cFlog = false;
    }
  })

  //给充值按钮添加点击事件
  $("#charge-btn").click(function () {
    //调用充值接口
    if (cFlog) {
      $.ajax({
        url: baseURL + "/p2p/charge",
        type: "post",
        data: {
          userid: localStorage.getItem("userid"),
          money: $("#money").val(),
          cardid: $("#cardid").val()
        },
        success: function (data) {
          console.log(data);
          if (data.code === 200) {
            alert("充值成功");
            location.href = "/#invest";
          } else {
            alert("充值失败,请稍后再试~~~");
          }
        }
      })
    } else {
      $("#money").blur();
      $("#money").addClass("is-invalid").siblings("span").text("亲，请先充值再提交哟~~");
    }
  })

})