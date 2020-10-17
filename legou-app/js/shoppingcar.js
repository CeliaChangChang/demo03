/* 元素的获取 */
//全选按钮
let allchk = document.querySelector(".allchk");
//单个按钮
let singlechks = document.querySelectorAll(".singlechks");
//加按钮
let addBtn = document.querySelectorAll(".addbtn")
//减按钮
let reduceBtn = document.querySelectorAll(".reducebtn")
//总个数
let totalCount = document.querySelector(".totalcount")
//总合计
let allPrice = document.querySelector(".allprice")

console.log(totalCount, allPrice);
/* 元素的获取 */


//全选
allchk.onclick = function () {
    //定义变量保存当前选择值
    let bool = this.checked;
    //所有单个选项的选择中值与当前值相同
    for (let i = 0; i < singlechks.length; i++) {
        singlechks[i].checked = bool;
       
    }
    calcTotalPrice()
}

//单个选项的选中判断全选
for (let i = 0; i < singlechks.length; i++) {
    singlechks[i].onclick = function () {
        let selCount = 0;
        for (let j = 0; j < singlechks.length; j++) {
            let check = singlechks[j].checked;
            if (check) {
                selCount++;
            }
        }
        if (singlechks.length === selCount) {
            allchk.checked = true;
        } else {
            allchk.checked = false;
        }

        calcTotalPrice()
    }


}


//加法按钮
for (let i = 0; i < addBtn.length; i++) {
    addBtn[i].onclick = function () {
        let count = this.parentNode.getElementsByClassName("count")[0].value;
        count++;
        this.parentNode.getElementsByClassName("count")[0].value = count;
        if (count >= 200) {
            alert("购买商品数量不能大于库存量")
            count = 200;
        }
        this.parentNode.getElementsByClassName("count")[0].value = count;
        calcTotalPrice()
    }
}

//减法按钮
for (let i = 0; i < reduceBtn.length; i++) {
    reduceBtn[i].onclick = function () {
        //数量
        let count = this.parentNode.getElementsByClassName("count")[0].value
        count--;
        if (count < 1) {
            alert("商品数量不能小于1")
            count = 1;
        }
        this.parentNode.getElementsByClassName("count")[0].value = count;
        calcTotalPrice()
    }
}


//输入价格的键盘事件
let countBox = document.querySelectorAll(".count");
// console.log(countBox);
for (let i = 0; i < countBox.length; i++) {
    countBox[i].onkeyup = function () {
        let count = countBox[i].value;
        if (isNaN(count)) {
            countBox[i].value = 1;
        }
        if (count < 1) {
            countBox[i].value = 1;
        }
        if (count > 200) {
            countBox[i].value = 200;
        }
        calcTotalPrice()
    }
}




//计算合计(总价)
//分析 ：合计=每个商品单价(singleprice)*选择的数量(input)*被选中复选框的数量

function calcTotalPrice() { 
    let totalPrice = 0;
    let count = 0;
    let singlechks = document.querySelectorAll(".singlechks");
for (let i = 0; i < singlechks.length; i++) {
     if (singlechks[i].checked) {
    let that = singlechks[i];
    //商品单价
    let singlePrice = that.parentElement.parentElement.getElementsByClassName("singleprice")[0].innerHTML;
    //input值
    let num = that.parentElement.parentElement.getElementsByClassName("count")[0].value;
    //总数
    count += parseInt(num);
    totalPrice+=parseFloat(singlePrice*num)
    console.log(singlePrice, num,count,totalPrice);
    }
}
    allPrice.innerHTML=totalPrice.toFixed(2);
    totalCount.innerHTML=count;
}








/* //调用初始化方法
start();

function start() {
    // 一开始让所有的复选框都选中
    allchk.checked = true;
    for (let i = 0; i < singlechks.length; i++) {
        singlechks[i].checked = true;
    }


    //计算总数量和总价

} */