$(function(){
    
        //서브메뉴
        $('.gnb>li').hover(function(){
            $(this).find('ul').stop().show()
        },function(){
            $(this).find('ul').stop().hide()
        })

        // 상하 슬라이드
        // setInterval(function(){
        //     $('.slide').animate({top: -350}, function(){
        //         $('.slide a:first').appendTo('.slide')
        //         $('.slide').css('top', 0)
        //     })
        // },2700)
        
        //좌우 슬라이드
        setInterval(function(){
            $('.slide').animate({left: -800}, function(){
                $('.slide a:first').appendTo('.slide')
                $('.slide').css('left', 0)
            })
        },2700)        

        // 모달
        $('.notice li:first').click(function(){
            $('.modal').show()
        })
        $('.close').click(function(){
            $('.modal').hide()
        })

})