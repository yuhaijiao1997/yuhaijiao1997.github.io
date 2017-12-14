var swiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
    },
    //切换效果

    //effect : 'flip',
    //flipEffect: {
    //    slideShadows : true,
    //    limitRotation : true,
    //},

    //动画效果
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
});

var mp3=document.querySelector("#mp3");
var mp3Btn=document.querySelector("#mp3Btn");
mp3Btn.onclick=function(){
    //mp3.paused  是false
    if(mp3.paused){
        mp3.play();
        mp3Btn.style.animationPlayState="running";
    }else{
        mp3.pause();
        mp3Btn.style.animationPlayState="paused";
    }
};
