$(function(){
    var cur = 0;
    function fadeInOut(){
        cur++;
        if(cur > $('.sky-fade').length - 1){
            cur = 0;
        }
        $('.sky-fade').eq(cur).fadeIn().siblings().fadeOut();
    }
    var timer = setInterval(function(){
        fadeInOut();
    },3000)
})