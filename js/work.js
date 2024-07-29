$(document).ready(function(){
    $('article').css({'opacity':'1'})
    
    $('.filter li').click(function(){
        $('.work_list>li').css({'margin-top':'0', 'opacity':'1'})

        if($(this).hasClass('on') == true){
            $(this).removeClass('on')
        }else{
            $(this).addClass('on').siblings('li').removeClass('on')
        }

        let theme_t = $('.filter_theme .on').text(),
            year_t = $('.filter_year .on').text();
    
        $('.work_list>li').stop().fadeOut(200)

        if($('.filter_theme li').hasClass('on') == true){
            $('.work_list>li:has(.text_wrap>div:contains('+theme_t+'))').stop().delay(200).fadeIn()
        }
        if($('.filter_year li').hasClass('on') == true){
            $('.work_list>li:has(.text_wrap>div:contains('+year_t+'))').stop().delay(200).fadeIn()
        }
        if($('.filter li').hasClass('on') == false){
            $('.work_list>li').stop().delay(200).fadeIn()
        }
    })

    $('.work_list>li').mouseover(function(){
        $(this).find('a').css({'background-color':'#282828'}).find('h3').css({'color':'#ffffff'})
        $(this).find('.img_wrap li:first').stop().animate({'opacity':'0'},400)
        .siblings('li').stop().animate({'opacity':'1'},400)
    }).mouseout(function(){
        $(this).find('a').css({'background-color':'#ffffff'}).find('h3').css({'color':'#000000'})
        $(this).find('.img_wrap li:first').stop().animate({'opacity':'1'},400)
        .siblings('li').stop().animate({'opacity':'0'},400)
    })
    
})