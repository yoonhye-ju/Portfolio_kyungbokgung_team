$(function(){
    $(".dot1").click(function(){
        $('.item').css({'transform':'translateX(0)'});
        $(".dot1").css("background-color",'#717171');
        var dot = $('.dot');
        var i = 0;
        var q = 0;
        for(i+1;i<7;i++) {
            $(dot[i+1]).css("background-color",'#bbb');
        }
        for(q-1;q<0;q--) {
            $(dot[q-1]).css("background-color",'#bbb');
        }
    })
    $(".dot2").click(function(){
        $('.item').css({'transform':'translateX(-100%)'});
        $(".dot2").css("background-color",'#717171');
        var dot = $('.dot');
        var i = 1;
        var q = 1;
        for(i+1;i<7;i++) {
            // console.log(i);
            $(dot[i+1]).css("background-color",'#bbb');
        }
        for(q-1;q>0;q--) {
            // console.log(q);
            $(dot[q-1]).css("background-color",'#bbb');
        }
    })
    $(".dot3").click(function(){
        $('.item').css({'transform':'translateX(-200%)'});
        $(".dot3").css("background-color",'#717171');
        var dot = $('.dot');
        var i = 2;
        var q = 2;
        for(i+1;i<7;i++) {
            // console.log(i);
            $(dot[i+1]).css("background-color",'#bbb');
        }
        for(q-1;q>0;q--) {
            $(dot[q-1]).css("background-color",'#bbb');
        }
    })
})