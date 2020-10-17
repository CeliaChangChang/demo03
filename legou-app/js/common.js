$(function () {
    //给公共的搜索框添加获取焦点事件

    $('input[data-toggle="$-search"]').focus(function () {
        //跳转到搜索页面
        location.href = "./search.html"

    })

    $('[data-toggle="go-back"]').click(function () {
        //跳转到搜索页面
        history.go(-1)

    })



})