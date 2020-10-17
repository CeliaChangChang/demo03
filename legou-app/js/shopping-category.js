$(function(){
    let pushBox=document.querySelector("#push");
    let phoneBox=document.querySelector("#phone");
    let houseBox=document.querySelector("#house");
    let workBox=document.querySelector("#work");
    let liBtn2=document.querySelector(".libtn2");
    // let sortList=document.querySelectorAll(".sort-left>li");

    // console.log(pushBox,phoneBox,houseBox,workBox,sortList);


    // for (let i=0;i<sortList.length;i++){
    //     sortList[i].addEventListener("click",function(){
    //         //浏览器的滚动值
    //        let st=document.documentElement.scrollTop ||document.body.scrollTop
    //        pushBox.offsetTop=st;
    //        phoneBox.offsetTop=st;
    //        console.log(st);
    //     })
    // }
    liBtn2.addEventListener("click",function(){
        let st=phoneBox.offsetTop;
        // console.log(st);
        st=document.documentElement.scrollTop ||document.body.scrollTop;
        window.scrollTop(0,st);

    })





})