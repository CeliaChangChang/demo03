$(function () {
    new Swiper('.banner', {
        direction: 'horizontal', // 水平切换选项
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3500,
            stopOnLastSlide: true,
            disableOnInteraction: true,
        },

    })
    new Swiper('.nav', {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        }
    })
    // 乐购快报
    new Swiper('.news-hot', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            delay: 3500,
            stopOnLastSlide: true,
            disableOnInteraction: true,
        },

    })
    let timeBox1=document.querySelector(".time1");
    let timeBox2=document.querySelector(".time2");
    let timeBox3=document.querySelector(".time3");
    console.log(timeBox1,timeBox2,timeBox3);
    //倒计时
    countDown();
    function countDown() {
        let newDate = new Date("2020-10-14 8:00:00");
        let curDate = new Date();
        let diffTime = newDate - curDate;
        //小时
        let hours = Math.floor(diffTime / 1000 / 60 / 60 % 24);
        hours = hours < 10 ? '0' + hours : hours;
        //分钟
        let minutes = Math.floor(diffTime / 1000 / 60 % 60);
        minutes=minutes<10? '0'+minutes:minutes;
        // 秒
        let seconds = Math.floor(diffTime / 1000 % 60);
        seconds=seconds<10? '0'+ seconds:seconds;
        if(hours<=0 && minutes<=0 && seconds<=0){
           clearInterval(clear);
        }
        timeBox1.innerHTML=hours; 
        timeBox2.innerHTML=minutes; 
        timeBox3.innerHTML=seconds; 
    }
    let clear=setInterval(countDown,1000);//1000,1秒


   



















})