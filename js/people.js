$(document).ready(function(){
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
    })

    
})