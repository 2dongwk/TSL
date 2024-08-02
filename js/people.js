$(document).ready(function(){
    $('.info').animate({'opacity':'1'},600)
    $('.people_list').css({'opacity':'1'})
    setTimeout(function(){
        $('.people_list').css({'transition-duration':'unset', 'transition-delay':'unset'})
    },1000)

    $('.people_list_wrap li').mouseover(function(){
        $(this).css({'background-color':'#282828'}).find('h3').css({'color':'#ffffff'}).siblings('p').css({'color':'#c2c2c2'})
        $(this).find('.people_img').css({'filter':'none'})
    }).mouseout(function(){
        $(this).css({'background-color':'#ffffff'}).find('h3').css({'color':'#000000'}).siblings('p').css({'color':'#999999'})
        $(this).find('.people_img').css({'filter':'grayscale(100%)'})
    })

    $('.people_list_wrap li').click(function(){
        let people_index = $(this).index();
        $(this).addClass('select').siblings('li').removeClass('select')

        $('.info li').stop().fadeOut().eq(people_index).stop().fadeIn()

        if(people_index == 0){
            $('.info ul').css({'min-height':'100%'})
        }else{
            $('.info ul').css({'min-height':'70%'})
        }
    })

    $('.page_number li').click(function(){
        let page_num = $('.people_list_wrap').width() / 5,
            page_now = $(this).index();

        if($(this).hasClass('page_on') == false){
            $(this).addClass('page_on').siblings('li').removeClass('page_on')
            $('.people_list_wrap').animate({'opacity':'0'},200,function(){
                $('.people_list_wrap').css({'left':-(page_num * page_now)})
                $('.people_list_wrap').animate({'opacity':'1'},200)
            })
        }
    })

    function arrow(){
        $('.arrow').stop().animate({'right':'0'},500,function(){
            $(this).stop().animate({'right':'2%'},500)
        })
    }
    
    $('.info_name').mouseover(function(){
        arrow()
        arrow_on = setInterval(arrow, 1000)
    }).mouseout(function(){
        clearInterval(arrow_on)
    })

    $('.people_list').on('scroll',function(){
        let scroll_top = ($('.people_list_wrap').height() - $('.people_list').height()) / $('.people_list').scrollTop(),
            scroll_bar = $('.scroll_now').width() - 10,
            scroll_now = scroll_bar / scroll_top;

        $('.scroll_now div').css({'width':'calc(10px + '+scroll_now+'px)'})


        let scroll = $('.people_list').scrollTop();

        if($(window).width() < 1011){
            if(scroll > 300){
                $('.top_btn_wrap').stop().fadeIn(200)
            }else{
                $('.top_btn_wrap').stop().fadeOut(200)
            }
        }else{
            $('.top_btn_wrap').stop().fadeOut(200)
        }
    })

    $('.top_btn').click(function(){
        $('.top_btn_wrap').stop().fadeOut(200)

        $('.people_list').animate({'opacity':'0'},200,function(){
            $('.people_list').scrollTop(0)
            $('.people_list').animate({'opacity':'1'},200)
        })

        if($(window).width() >= 754){
            $('html').animate({scrollTop:0},400)
        }
    })

    $('.top_btn').mouseover(function(){
        $(this).css({'background-color':'#333333'})
    }).mouseout(function(){
        $(this).css({'background-color':'#ffffff'})
    })

    $(window).resize(function(){
        page_num = $('.people_list_wrap').width() / 5
        page_now = $('.page_number li.page_on').index()
        $('.people_list_wrap').css({'left':-(page_num * page_now)})

        if($(window).width() < 1010){
            $('.people_list_wrap').css({'left':'0'})
        }

        scroll = $('.people_list').scrollTop()

        if($(window).width() < 1011){
            if(scroll > 300){
                $('.top_btn_wrap').stop().fadeIn(200)
            }else{
                $('.top_btn_wrap').stop().fadeOut(200)
            }
        }else{
            $('.top_btn_wrap').stop().fadeOut(200)
        }

        scroll_top = ($('.people_list_wrap').height() - $('.people_list').height()) / $('.people_list').scrollTop()
        scroll_bar = $('.scroll_now').width() - 10
        scroll_now = scroll_bar / scroll_top
        $('.scroll_now div').css({'width':'calc(10px + '+scroll_now+'px)'})
    })

})