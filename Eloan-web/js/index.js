$(function () {
    //home.html的片段加载过来
    // $("#main").load("../pages/home.html");
    // $("#main").load("../pages/invest.html");
    // $("#main").load("../pages/login-in.html");
    // $("#main").load("../pages/borrow.html");
    // $("#main").load("../pages/mycenter.html");
    // $("#main").load("../pages/404.html");
    window.onhashchange = loadPagesByHash;
    loadPagesByHash()

    function loadPagesByHash() {
        var hash = location.hash;
        console.log(hash);
        if (hash == "") hash = "#home"
        switch (hash) {
            case "#home":
                $("#main").load("../pages/home.html");
                break;
            case "#invest":
                $("#main").load("../pages/invest.html");
                break;
            case "#borrow":
                $("#main").load("../pages/borrow.html");
                break;
                //借款详情
            case "#borrow_info":
                $("#main").load("../pages/borrow_info.html");
                break;
                //个人中心
            case "#mycenter":
                $("#main").load("../pages/mycenter.html", function () {
                    $("#right-content").load("../pages/mycenter/getuserinfo.html");
                });
                break;

                //个人中心>账户信息
            case "#mycenter/getuserinfo":
                //先加载个人中心，再加载子页面
                $("#main").load("../pages/mycenter.html", function () {
                    $("#right-content").load("../pages/mycenter/getuserinfo.html");
                    centerActiveByHash(hash)
                })
                break;
                //个人中心>信用借款
            case "#mycenter/borrow_apply":
                $("#main").load("../pages/mycenter.html", function () {
                    $("#right-content").load("../pages/mycenter/borrow_apply.html");
                    centerActiveByHash(hash)
                })
                break;
                //个人中心>更新资料
            case "#mycenter/updateuser":
                $("#main").load("../pages/mycenter.html", function () {
                    $("#right-content").load("../pages/mycenter/updateuser.html");
                    centerActiveByHash(hash)
                })
                break;

            default:
                $("#main").load("../pages/404.html");
                break;
        }
        navActiveByHash(hash)
    }
    //激活内容导航
    function navActiveByHash(hash) {
        //样式写在a标签上面的
        // $('.el-navbar .nav-item a[href="'+hash+'"]').addClass("active").parent().siblings().find('a').removeClass("active");
        //样式写在li标签上面的
        hash = hash.includes("#mycenter") ? "#mycenter" : hash;
        if(hash==="#borrow_info") hash="#mycenter"
        // console.log(hash);
        $('#el-navbar .nav-item a[href="' + hash + '"]').parent().addClass("active").siblings().removeClass("active");
    }
    //激活个人中心二级菜单
    function centerActiveByHash(hash) {
        console.log(hash);
        $('.left-list>li>ul>li>a[href="' + hash + '"]').parent().addClass("active").closest("ul").parent().siblings().find("li").removeClass("active");

        //   $('.left-list>li>ul>li>a[href="' + hash + '"]').parent().addClass("active");
    }
    whetherLogin();
    //判断用户是否登录
    function whetherLogin() {
        let userid = localStorage.getItem("userid");
        let username = localStorage.getItem("username");
        if (userid && username) {
            //登录时的页面状态
            $("#login-text").html('<a class="nav-link" href="javascript:;">' + username + '</a>')
            $("#reg-text").html('<a class="nav-link" href="#" id="loginout">注销</a>')
        } else {
            //未登时页面的状态
            $("#login-text").html('<a class="nav-link" href="./login-in.html">登录</a>')
            $("#reg-text").html('<a class="nav-link" href="./register.html">注册</a>')
        }
    }
    //给注销 添加点击事件(事件委派)
    $("#reg-text").on("click", "#loginout", function () {
        // alert(1);
        if (confirm("您确定要注销吗？")) {
            localStorage.removeItem("userid");
            localStorage.removeItem("username");
            $("#login-text").html('<a class="nav-link" href="./login-in.html">登录</a>')
            $("#reg-text").html('<a class="nav-link" href="./register.html">注册</a>')
        }

    })



})