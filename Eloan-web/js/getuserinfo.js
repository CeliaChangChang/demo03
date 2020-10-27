$(function () {
    $.ajax({
        url: baseURL + "/p2p/getuserinfo",
        type: "get",
        data: {
            userid: localStorage.getItem("userid")
        },
        success: function (data) {
            var res = data.data;
            $("#username").text(res.username);
            // console.log($("#username").text(res.username)[0]);

            $("#nickname").text(res.nickname);
            // console.log( $("#nickname").text(res.nickname)[0]);

            $("#lastlogintime").text(res.lastlogintime);
            console.log($("#lastlogintime").text(res.lastlogintime)[0]);

            $("#totalmoney").text(res.totalmoney);
            console.log(res.totalmoney);

            $("#usablemoney").text(res.usablemoney);
            console.log($("#usablemoney").text(res.usablemoney)[0]);

            $("#blockedmoney").text(res.blockedmoney);
            console.log($("#blockedmoney").text(res.blockedmoney)[0]);
            // for (var key in res){
            //     //    console.log(key,res[key]);
            //     $(`#`+key).text(res[key])
            // }
            mychart(res)
        }
    })
    //         if(data.code===200)
    //         console.log(data.data.nickname);
    //         localStorage.setItem("nickname", data.data.nickname)
    //         localStorage.setItem("totalmoney", data.data.totalmoney)
    //         localStorage.setItem("usablemoney", data.data.usablemoney)
    //         localStorage.setItem("blockedmoney", data.data.blockedmoney)
    //         localStorage.setItem("lastlogintime", data.data.lastlogintime)
    //     }     
    // })
    // whetherLogin();
    // //判断用户是否登录
    // function whetherLogin() {
    //     //用户ID
    //     let userid=localStorage.getItem("userid");
    //     //用户名
    //     let username=localStorage.getItem("username");
    //     //昵称
    //     let nickname=localStorage.getItem("nickname");
    //     //总金额
    //     let totalmoney=localStorage.getItem("totalmoney");
    //     //可用金额
    //     let usablemoney=localStorage.getItem("usablemoney");
    //     //冻结金额
    //     let blockedmoney=localStorage.getItem("blockedmoney");
    //     //获取最后登陆时间
    //     let lastlogintime=localStorage.getItem("lastlogintime");

    //     if (userid && username) {
    //         //登录时的页面状态
    //         $("#nickname").html(nickname)
    //         console.log( $("#nickname")[0]);
    //         $("#username").html(username)
    //         $("#lastlogintime").html(lastlogintime)
    //         $("#totalmoney").html(totalmoney)
    //         $("#usablemoney").html(usablemoney)
    //         $("#blockedmoney").html(blockedmoney)
    //     } else {
    //         //未登时页面的状态
    //         $("#nickname").html("未登录")
    //         $("#username").html("未登录")
    //         $("#lastlogintime").html("未登录")
    //         $("#totalmoney").html("")
    //         $("#usablemoney").html("")
    //         $("#blockedmoney").html("")
    //     }
    // }

    // 图表引用
    function mychart(obj) {
        let myChart = echarts.init(document.getElementById("echars"));
        let option = {
            title: {
                text: '用户金额分布',
                subtext: '仅供参考',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                right: 'right',
                data: ['总金额', '可用金额', '冻结金额']
            },
            series: [{
                name: '访问来源',
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: [{
                        value: obj.totalmoney,
                        name: '总金额'
                    },
                    {
                        value:obj.blockedmoney,
                        name: '冻结金额'
                    },
                    {
                        value: obj.usablemoney,
                        name: '可用金额'

                    },

                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }]
        };
        myChart.setOption(option);
    }

})