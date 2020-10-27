$(function () {
    //失去焦点验证用户名
    //保存节点
    var $username = $("#username");
    var $nickname = $("#nickname");
    var $pwd = $("#pwd");
    var $repwd = $("#repwd");
    var $email = $("#email");

    //定义标杆，通过位true，没通过false
    //确认密码
    var qFlog = false;
    //密码
    var mFlog = false;
    //姓名
    var uFlog = false;
    //昵称
    var nFlog = false;
    //邮箱
    var eFlog = false;

    //验证姓名
    $username.blur(function () {
        //获取值
        var uVal = $(this).val();
        var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,12}$");
        if (regex.test(uVal)) {
            $(this).addClass("is-valid").removeClass("is-invalid").next("span").text("");
            $.ajax({
                url: baseURL + "/p2p/accrepeat",
                type: "post",
                data: "username=" + uVal,
                success: function (res) {
                    if (res.code === 200) { //可以使用
                        $username.addClass("is-valid").removeClass("is-invalid").siblings("p").text("");
                        uFlog = true;
                    } else { //重复了
                        $username.addClass("is-invalid").removeClass("is-valid").siblings("p").text("该用户名太受欢迎了，请更换");
                        // console.log(res);
                        uFlog = false;
                    }
                }

            })
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("用户名格式不正确");
            uFlog = false;
        }
    })

    //验证昵称
    $nickname.blur(function () {
        //获取值
        var uVal = $(this).val();
        var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){2,12}$")
        if (regex.test(uVal)) {
            $(this).addClass("is-valid").removeClass("is-invalid").siblings("span").text("");
            nFlog = true;
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("昵称格式不正确");
            nFlog = false;
        }
    })

    //验证设置密码
    $pwd.blur(function () {
        //获取值
        var uVal = $(this).val();
        var regex = /^\w{6,12}$/;
        if (regex.test(uVal)) {
            $(this).addClass("is-valid").removeClass("is-invalid").siblings("span").text("");
            mFlog = true;
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("密码设置格式错误");
            mFlog = false;
        }
    })

    //确认密码  设置密码通过了，才去验证确认密码。如果设置密码没有通过，确认密码直接不通过
    $repwd.blur(function () {
        //获取值
        if (mFlog) {
            var uVal = $(this).val();
            if (uVal === $pwd.val()) {
                $(this).addClass("is-valid").removeClass("is-invalid").siblings("span").text("");
                qFlog = true;
            } else {
                $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("两次密码不一致");
                qFlog = false;
            }
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("两次密码不一致");
            qFlog = false;
        }

    })

    //验证邮箱
    $email.blur(function () {
        //获取值
        var uVal = $(this).val();
        var regex = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/;
        if (regex.test(uVal)) {
            $(this).addClass("is-valid").removeClass("is-invalid").siblings("span").text("");
            eFlog = true;
        } else {
            $(this).addClass("is-invalid").removeClass("is-valid").siblings("span").text("邮箱格式不正确");
            eFlog = false;
        }
    })



    //给reg-btn按钮添加点击事件
    $("#reg-btn").click(function () {
        if (qFlog && mFlog && nFlog && uFlog && eFlog) {
            $.ajax({
                url: baseURL + "/p2p/reg",
                type: "post",
                data: {
                    username: $username.val(),
                    nickname: $nickname.val(),
                    pwd: $pwd.val(),
                    email: $email.val()
                },
                success: function (data) {
                    if (data.code === 200) {
                        alert("注册成功！");
                      //把标杆全部重置为false,为下次注册做准备
                        qFlog = false;
                        //密码
                        mFlog = false;
                        //姓名
                        uFlog = false;
                        //昵称
                        nFlog = false;
                        //邮箱
                        eFlog = false;
                        location.href="/login-in.html"

                    }else{
                        alert("注册失败，请稍后再试~~~");
                    }
                }
            })
        } else {//不通过
           $username.blur();
           $nickname.blur();
           $pwd.blur();
           $repwd.blur();
           $email.blur();
        }
    })




})