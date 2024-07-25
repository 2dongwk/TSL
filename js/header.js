$(document).ready(function(){
    let bg_back = 45;

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

    $('.hamburger').click(function(){
        $('body').css({'padding-right':'15px', 'overflow':'hidden'})
        $('header').css({'width':'calc(95% - 14.6px)', 'left':'calc(50% - 7.3px)'})
        if($(window).width() <= 550){
            $('body').css({'padding-right':'0', 'overflow':'hidden'})
            $('header').css({'width':'95%', 'left':'50%'})
        }
        $('.ham_on').css({'display':'block'}).addClass('on')
        $('.ham_bg').animate({'opacity':'1'},200)
        $('.ham_nav').animate({'right':'0'},200)
    })
    $('.ham_bg').click(function(){
        $('body').css({'padding-right':'0', 'overflow':'auto'})
        $('header').css({'width':'95%', 'left':'50%'})
        $('.ham_bg').animate({'opacity':'0'},200)
        $('.ham_nav').css({'right':'-15px'})
        $('.ham_nav').animate({'right':'-200px'},200,function(){
            $('.ham_on').css({'display':'none'}).removeClass('on')
        })
    })
    $(window).resize(function(){
        if($(window).width() > 930){
            if($('.ham_on').hasClass('on') == true){
                $('body').css({'padding-right':'0', 'overflow':'auto'})
                $('header').css({'width':'95%', 'left':'50%'})
                $('.ham_on').css({'display':'none'}).removeClass('on')
                $('.ham_bg').css({'opacity':'0'})
                $('.ham_nav').css({'right':'-200px'})
            }
        }
    })
})