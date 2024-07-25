$(document).ready(function(){
    let bg_back = 45,
        window_w = $(window).width();

        
    $('header').delay(500).fadeIn(600)
    $('h1').delay(800).fadeIn(600)
    $('.h_bg').delay(1000).animate({'opacity':'1'},3000)
    $('.h_bg>img').delay(800).animate({'rotate':'-45deg'},10000,'linear')
    $('nav').delay(1100).fadeIn(600)

    setInterval(function(){
        bg_back=bg_back+45
        $('.h_bg>img').animate({'rotate':-bg_back+'deg'},10000,'linear')
    },10000)

    $('.menu li a, .lang a:last').mouseover(function(){
        $(this).css({'color':'#ffffff'})
    }).mouseout(function(){
        $(this).css({'color':'#aaaaaa'})
    })
})