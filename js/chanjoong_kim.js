$(document).ready(function(){
    $('section').css({'opacity':'1'})

    let cr_menu_w = $('.career_menu li:first').width(),
        cr_menu_x = $('.career_menu li:first').position().left,
        cr_h = $('.career_menu').height() + $('.career_project').height() + 90;

    $('.career').css({'height':cr_h})

    $('.career_menu li').eq(3).css({'width':cr_menu_w + 60, 'left':cr_menu_x - 30})

    let window_center = $(window).width() / 2,
        pj_img_center = $('.pj_img li.now').width() / 2,
        pj_img_left = $('.pj_img li.now').position().left,
        pj_img_now = window_center - pj_img_center - pj_img_left,
        i = 2;

    if($(window).width() > 754){
        $('.pj_img ul').css({'left':pj_img_now})
        $('.pj_img li a').click(function(e){
            let pj_img = $(this).parent('li'),
                pj_img_index = pj_img.index(),
                pj_img_width = pj_img.width();
    
            if(pj_img.hasClass('now') == false){
                e.preventDefault()
    
                $('.pj_img li.now').removeClass('now')
    
                if(pj_img_index == 3){
                    i = (i+1)%6
                    $('.pj_img ul').animate({'left':pj_img_now - pj_img_width},400,function(){
                        $('.pj_img li:first').appendTo('.pj_img ul')
                        $(this).css({'left':pj_img_now})
                    })
                    pj_img.addClass('now')
                }else if(pj_img_index == 1){
                    i = (i+5)%6
                    $('.pj_img ul').animate({'left':pj_img_now + pj_img_width},400,function(){
                        $('.pj_img li:last').prependTo('.pj_img ul')
                        $(this).css({'left':pj_img_now})
                    })
                    pj_img.addClass('now')
                }
            }
    
            $('.pj_info li').stop().fadeOut(200).eq(i).stop().fadeIn()
        })
    }
    

    $('.career_menu li:lt(3)').click(function(){
        if($(this).hasClass('focus')) return

        cr_menu_w = $(this).width()
        cr_menu_x = $(this).position().left

        $(this).addClass('focus').siblings('li').removeClass('focus')
        $('.career_menu li').eq(3).css({'width':cr_menu_w + 60, 'left':cr_menu_x - 30})

        let open = $(this).index();

        cr_h = $('.career_menu').height() + $('.career_content>div').eq(open).height() + 90

        $('.career').css({'height':cr_h})

        if(open == 0){
            $('.career_content>div').stop().fadeOut(200,function(){
                $('.career_project').css({'opacity':'0', 'display':'block'})
                
                window_center = $(window).width() / 2
                pj_img_center = $('.pj_img li.now').width() / 2
                pj_img_left = $('.pj_img li.now').position().left
                pj_img_now = window_center - pj_img_center - pj_img_left
    
                $('.pj_img ul').css({'left':pj_img_now})
            })
            $('.career_project').stop().delay(200).animate({'opacity':'1'},400)
        }else{
            $('.career_content>div').stop().fadeOut(200,function(){
                $('.career_content>div').eq(open).css({'opacity':'0', 'display':'block'})
    
                cr_h = $('.career_menu').height() + $('.career_content>div').eq(open).find('ul').height() + 80
    
                $('.career').css({'height':cr_h})
            })
            $('.career_content>div').eq(open).stop().delay(200).animate({'opacity':'1'},400)
        }
    })

    $(window).resize(function(){
        if($(this).width() > 754){
            window_center = $(window).width() / 2
            pj_img_center = $('.pj_img li.now').width() / 2
            pj_img_left = $('.pj_img li.now').position().left
            pj_img_now = window_center - pj_img_center - pj_img_left

            $('.pj_img ul').css({'left':pj_img_now})
        }

        let open = $('.career_menu li.focus').index();

        cr_h = $('.career_menu').height() + $('.career_content>div').eq(open).find('ul').height() + 90

        $('.career').css({'height':cr_h})

        if(open == 0){
            cr_h = $('.career_menu').height() + $('.career_project').height() + 80

            $('.career').css({'height':cr_h})
        }
    })
})