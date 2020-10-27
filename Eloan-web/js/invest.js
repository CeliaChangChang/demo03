$(function () {
    var page = 1; //当前页
    var row =15; //每页显示的条数
    // console.log("home.js");
    getBorrowList()

    function getBorrowList() {
        $.ajax({
            url: baseURL + "/p2p/getBorrowList",
            type: "get",
            data: {
                pageIndex: page,
                pageSize: row
            },
            success: function (data) {
                console.log(data);
                var total = data.total;
                var totalPage = (Math.ceil(total / row)); //总页数

                $("#page").pagenation({
                    nowPage: page, //当前页
                    pageNum: totalPage, //总页数
                    buttonNum: 10,
                    callback: function (p) { //回调函数
                        // console.log(p);
                        page = p;
                        getBorrowList()
                    }
                })
                var list = data.data;
                var resHTML = "";
                //遍历
                for (var i = 0; i < list.length; i++) {

                    resHTML += `
                        <tr>
                            <th scope="row">${list[i].username}</th>
                            <td>${list[i].title}</td>
                            <td class="text-info">${(list[i].interest).toFixed(2)}%</td>
                            <td class="text-info">￥${(list[i].borrowmoney).toFixed(2)}</td>
                            <td>${list[i].repaytype==0?"按月分期":"按月到期"}</td>
                            <td>${((list[i].ownmoney/list[i].borrowmoney)*100).toFixed(2)}%</td>
                            <td>
                                <button class="btn btn-danger btn-sm" data-bid='${list[i].id}'>查看</button>
                            </td>
                        </tr>

                         `    
                }

                //渲染
                // console.log($("#debit-body")[0]);
                $("#debit-body").html(resHTML);

            }
        })

    }

  //点击按钮跳转到#borrow_info页面，用会话存储
    $("#debit-body").on("click", "button", function () {

        // alert(1);
        var bid = $(this).data("bid");
        sessionStorage.setItem("bid",bid)
        location.href="/#borrow_info"
        console.log(bid)
    })

})