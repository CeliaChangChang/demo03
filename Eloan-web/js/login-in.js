$(function () {
    //给登录按钮添加点击事件
    $("#login-btn").click(function () {
        let username = $("#username").val();
        let pwd = $("#pwd").val();
        // console.log(username,pwd);
        if (!(username && pwd)) return false;
        $.ajax({
                url: baseURL + "/p2p/login",
                type: "post",
                data: {
                    username: username,
                    pwd: pwd
                },
                success: function (data) {
                    if (data.code === 200) {
                        alert('欢迎回来,' + username);
                        console.log(data);
                        localStorage.setItem("userid", data.data.id)
                        localStorage.setItem("username", data.data.username)
                        location.href = "/"
                    } else {
                        alert("用户名或密码错误");
                    }
                }
            }

        )

    })
})