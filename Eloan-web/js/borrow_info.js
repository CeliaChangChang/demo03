$(function () {
    var bid = sessionStorage.getItem("bid");
    //    console.log(bid);
    $.ajax({
        url: baseURL + "/p2p/getborrowinfo",
        type: "get",
        data: {
            borrowid: bid,
        },
        success: function (data) {
            // console.log(data.data);
            var obj = data.data;
            // console.log(obj);
            for (var key in obj) {
                if (key === "borrowType") {
                    var arr = ['', '信用贷', '车易贷', '房易贷']
                    $("#" + key).text(arr[obj[key]])
                } else if (key === "borrowmoney" || key === "ownmoney" || key === "minbid") {
                    $("#" + key).text("￥" + obj[key].toFixed(2))
                } else if (key === "interest") {
                    $("#" + key).text(obj[key].toFixed(2) + "%")
                } else if (key === "repaytype") {
                    var arr2 = ['按月分期', '按月到期'];
                    $("#" + key).text(arr2[obj[key]])
                } else {
                    $("#" + key).text(obj[key])
                }
            }


            //进度条
            var pro = ((obj.ownmoney / obj.borrowmoney) * 100).toFixed(2) + "%";

            console.log($("#progress-bar")[0]);
            // console.log(pro);
            $("#progress-bar").css("width", pro).html(pro)

        }
    })

  //调用投资接口
  $("#invest-btn").click(function(){
     $.ajax({
         url: baseURL+"/p2p/invest",
         type:"post",
         data:{
            userid:localStorage.getItem("userid"),
            borrowid: bid,
            chargemoney:$("#chargemoney").val()

         },
         success:function(data){
             console.log(data);
            if(data.code===200){
                alert("老板，投资成功，坐等分红吧~");
                location.href="/#invest";
            }else{
                if(data.msg==="余额不足，请及时充值"){
                    alert("请充值");
                    location.href="/recharge.html";
                }else{
                    alert("投资失败，请稍后再试~~")
                }
            }
         }
     })
  })

})