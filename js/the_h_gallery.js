$(document).ready(function(){
    let people_thumbnail_h = $('.people_thumbnail').height(),
        detail_h = $('.story').height(),
        text_menu_h = $('.text_menu').height();

    $('.info').css({'height':detail_h + people_thumbnail_h + text_menu_h + 160})

    if($(window).width() < 1036){
        $('.info').css({'height':$('.left_box').height() + $('.right_box').height()})
    }

    $(window).resize(function(){
        people_thumbnail_h = $('.people_thumbnail').height()
        detail_h = $('.story').height()
        text_menu_h = $('.text_menu').height()

        $('.info').css({'height':detail_h + people_thumbnail_h + text_menu_h + 160})

        if($(this).width() < 1036){
            $('.info').css({'height':$('.left_box').height() + $('.right_box').height()})
        }
    })
    
    $('h2').animate({'opacity':'1'},400)
    $('.small_img').delay(200).animate({'opacity':'1'},600)
    $('.right_box').delay(600).animate({'opacity':'1'},800)
    $('.detail_img').delay(800).animate({'opacity':'1'},800)

    $('.people_thumbnail li').mouseover(function(){
        $(this).find('span').css({'opacity':'1', 'top':'56px'})
    }).mouseout(function(){
        $(this).find('span').css({'opacity':'0', 'top':'60px'})
    })

    $('.text_menu li').mouseover(function(){
        $(this).css({'color':'#f3f3f3'})
    }).mouseout(function(){
        $(this).css({'color':'#999999'})
    })

    $('.text_menu li').click(function(){
        $(this).addClass('text_on').siblings('li').removeClass('text_on')
        
        let text_menu_index = $(this).index();

        if(text_menu_index == 0){
            $('.facts').removeClass('on').siblings('.story').addClass('on')
        }else{
            $('.story').removeClass('on').siblings('.facts').addClass('on')
        }
    })

    $('.img_list li').mouseover(function(){
        $(this).css({'opacity':'1', 'filter':'none'})
    }).mouseout(function(){
        $(this).css({'opacity':'0.5', 'filter':'grayscale(100%)'})
    })

    $('.img_list li').click(function(){
        let img_index = $(this).index();

        $(this).addClass('img_on').siblings('li').removeClass('img_on')
        $('.img_list div').css({'border':'none'})
        $(this).find('div').css({'border':'2px solid #ffffff'})
        $('.big_img li').css({'opacity':'0'}).eq(img_index).css({'opacity':'1'})
    })
})