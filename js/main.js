$(document).ready(function(){
    $('.con_text').animate({'opacity':'1'},50)
    for(let i = 0; i<3; i++){
        $('.con_menu div').eq(i).delay(600 + (i*200)).animate({'opacity':'1'},600)
    }

    $('.slider').delay(1400).animate({'opacity':'1'},400)

    setInterval(function(){
        $('.slider_img li:first').stop().animate({'opacity':'0.1'},700)
        $('.slider_img').stop().animate({'left':'-100%'},700,function(){
            $('.slider_img li:first').appendTo($('.slider_img')).css({'opacity':'1'})
            $('.slider_img').css({'left':'0'})
        })

        $('.slider_info li:first').stop().fadeOut(200,function(){
            $(this).appendTo('.slider_info ul')
        })
        .siblings('.slider_info li:first').stop().fadeIn(800)
    },4000)

    function arrow(){
        $('.arrow').stop().animate({'right':'0'},500,function(){
            $(this).stop().animate({'right':'1%'},500)
        })
    }
    
    $('.slider_info a').mouseover(function(){
        arrow()
        arrow_on = setInterval(arrow, 1000)
    }).mouseout(function(){
        clearInterval(arrow_on)
    })

    $('.con_menu div').mouseover(function(){
        $(this).find('img').css({'filter':'none'})
    }).mouseout(function(){
        $(this).find('img').css({'filter':'blur(18px)'})
    })

    if($(window).width() <= 1155){
        $('.con_menu').css({'display':'none'})
    }else{
        $('.con_menu').css({'display':'block'})
    }

    $(window).resize(function(){
        if($(window).width() <= 1155){
            $('.con_menu').css({'display':'none'})
        }else{
            $('.con_menu').css({'display':'block'})
        }
    })
})