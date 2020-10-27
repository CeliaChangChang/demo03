$(function () {
    var type = sessionStorage.getItem("type");
    // console.log(type);
    switch (type) {
        case "1":
            $("#borrow-brand").text("信用贷").css({
                "background": "#40d47e"
            })
            break;
        case "2":
            $("#borrow-brand").text("车易贷").css({
                "background": "#ec7e20"
            })
            break;
        case "3":
            $("#borrow-brand").text("房易贷").css({
                "background": "#2ca2ee"
            })
            break;
        default:
            alert("请选择借款类型");
            location.href = "/#borrow";
            break;
    }
    //借款金额
    var bFlog = false;
    $("#borrowmoney").blur(function () {
        var uVal = $(this).val();
        let regex = /(^([0-9]{1,6})?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (regex.test(uVal)) {
            $(this).removeClass("is-invalid").parent().siblings("p").text("");
            bFlog = true;
        } else {
            $(this).addClass("is-invalid").parent().siblings("p").text("请输入正确金额");
            bFlog = false;
        }
    })
    //最小投标
    var mFlog = false;
    $("#minbid").blur(function () {
        var uVal = $(this).val();
        let regex = /(^([0-9]{1,6})?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
        if (regex.test(uVal)) {
            $(this).removeClass("is-invalid").parent().siblings("p").text("");
            mFlog = true;
        } else {
            $(this).addClass("is-invalid").parent().siblings("p").text("请输入正确金额");
            mFlog = false;
        }
    })

    //给提交按钮添加点击事件
    $("#borrow-btn").click(function () {
        //调用申请借款接口
        if (bFlog && mFlog) {
            $.ajax({
                url: baseURL + "/p2p/borrow",
                type: "post",
                data: {
                    userid: localStorage.getItem("userid"),
                    borrowType: sessionStorage.getItem("type"),
                    borrowmoney: $("#borrowmoney").val(),
                    interest: $("#interest").val(),
                    borrowtime: $("#borrowtime").val(),
                    repaytype: $('[name="repaytype"]:checked').val(),
                    minbid: $("#minbid").val(),
                    bouns: $("#bouns").val(),
                    days: $("#days").val(),
                    title: $("#title").val(),
                    info: $("#info").val()
                },
                success: function (data) {
                    if (data.code === 200) {
                        console.log(data);
                        alert("申请成功，等待审核...");
                        mFlog = false;
                        bFlog = false;
                        location.href = "/#invest";
                    } else {
                        alert("申请失败，请稍后再试~~~");
                    }
                }
            })
        } else {
            $("#minbid").blur();
            $("#borrowmoney").blur();
        }
    });



})