$(function () {
    $("#search-btn").click(function () {
        let keyword = $("#keyword").val()
        if (keyword == '') return false
        addLoclStorage(keyword)
        getLoclStorage()
    })

    //添加到本地存储
    function addLoclStorage(keyword) {
        //获取本地的数据
        let kw = localStorage.getItem("kw")
        let data = JSON.parse(kw)
        if (data) {
            data.push(keyword)
            localStorage.setItem("kw", JSON.stringify(data))
        } else {
            let arr = [];
            arr.push(keyword)
            localStorage.setItem("kw", JSON.stringify(arr))
        }
    }

    //从本地获取数据，渲染到页面
    function getLoclStorage() {
        let kw = localStorage.getItem("kw")
        let data = JSON.parse(kw)
        if (data) {
            var str = ''
            for (let i = data.length - 1; i >= 0; i--) {
                str += `<li>${data[i]}</li>`
            }
        }
        $("#content").html(str)
    }

     //删除图标添加点击事件
     $("#delbtn").click(function () {
        alert(1);
        if(confirm("你确定要清除搜索记录吗？")){
            localStorage.removeItem("kw")
            $("#content").text('')
        }
    })



    
})