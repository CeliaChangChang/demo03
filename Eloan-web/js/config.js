    //配置文件
    var baseURL = "http://139.9.177.51:3333";
    //判断用户是否登录
    function checkLogin() {
        let userid = localStorage.getItem("userid");
        let username = localStorage.getItem("username");
        if (!(userid && username)) {
            //未登时页面的状态
            alert("未登录，请登录后再试~~");
            location.href = "../login-in.html"
            return false;
        }
    }

