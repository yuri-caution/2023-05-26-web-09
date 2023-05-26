$(function(){
    
        //서브메뉴
        $('.gnb>li').hover(function(){
            $(this).find('ul').stop().slideDown()
        },function(){
            $(this).find('ul').stop().slideUp('fast')
        })

        // Fade 슬라이드
        var index = 0
        $('.slide a').eq(index).show()
        setInterval(function(){
            var nextIndex = (index+1) % 3
            $('.slide a').eq(index).stop().fadeOut()
            $('.slide a').eq(nextIndex).stop().fadeIn()
            index = nextIndex
        }, 2700)

        // 상하 슬라이드
        // setInterval(function(){
        //     $('.slide').animate({top: -350}, function(){
        //         $('.slide a:first').appendTo('.slide')
        //         $('.slide').css('top', 0)
        //     })
        // },2700)
        
        // 좌우 슬라이드
        // setInterval(function(){
        //     $('.slide').animate({left: -800}, function(){
        //         $('.slide a:first').appendTo('.slide')
        //         $('.slide').css('left', 0)
        //     })
        // },2700)        
        
        // 탭
        $('.tab_tit h3').click(function(){
            $('.tab_tit h3').removeClass('on')
            $(this).addClass('on')
            $('.tab_con ul').hide()
            $('.tab_con ul').eq($(this).index()).show()
        })

        // 모달
        $('.notice li:first').click(function(){
            $('.modal').show()
        })
        $('.close').click(function(){
            $('.modal').hide()
        })

})