$(function () {
    //把获取到用户的信息显示到页面上
    $.ajax({
        url: baseURL + "/p2p/getuserinfo",
        type: "get",
        data: {
            userid: localStorage.getItem("userid")
        },
        success: function (data) {
            var res = data.data;
            // for (var key in res) {
            //     //console.log(key,res[key]);
            //     $(`#` + key).val(res[key])
            // }
            $("#username").val(res.username);
        }
    })
    var nFlog = false;
    var eFlog = false;
    //判断昵称是否正确
    $("#nickname").blur(function () {
        var uVal = $(this).val();
        // console.log(uVal);
        var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,12}$")
        if (regex.test(uVal)) {
            $(this).removeClass("is-invalid").siblings("span").text("");
            nFlog = true;
        } else {
            $(this).addClass("is-invalid").siblings("span").text("昵称格式不正确");
            nFlog = false;
        }
    })
    //判断邮箱格式是否正确
    $("#email").blur(function () {
        //获取值
        var uVal = $(this).val();
        var regex = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (regex.test(uVal)) {
            $(this).removeClass("is-invalid").siblings("span").text("");
            eFlog = true;
        } else {
            $(this).addClass("is-invalid").siblings("span").text("邮箱格式不正确");
            eFlog = false;
        }
    })
    //给更新的按钮添加点击事件
    $("#upadte-btn").click(function () {
        var nickname = $("#nickname").val();
        var email = $("#email").val();
        if (nFlog && eFlog) {
            $.ajax({
                url: baseURL + "/p2p/updateuser",
                type: "post",
                data: {
                    userid: localStorage.getItem("userid"),
                    nickname: nickname,
                    email: email
                },
                success: function (data) {
                    // console.log(data);
                    if (data.code === 200) {
                        alert("保存数据成功");
                        history.go(0)
                        // location.href = "#mycenter/getuserinfo";
                    } else {
                        alert("保存数据失败，请稍后再试~~");

                    }
                }
            })

        } else { //不通过
            $("#nickname").blur();
            $("#email").blur();
        }
        //    console.log(nickname,email);
    })

})