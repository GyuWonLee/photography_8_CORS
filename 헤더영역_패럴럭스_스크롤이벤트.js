  // 헤더 /////////////////////////////////////////////////////////////////////// 
    // 1. 스크롤이벤트의 방향 위, 아래 결정
    // 2. 아래(DOWN) 스크롤시 헤더영역부분이 부드럽게 위로 올라가서 안보이게 한다.
    // 3. 위(UP)     스크롤시 헤더영역부분이 부드럽게 다시 내려온다.
    // 4. 스크롤탑값이 0(맨위에도달하면)이면 헤더영역이 배경이 부드럽게 투명하게 변경된다.
    let scrNew = 0;      // 스크롤시 새로 스크롤값을 저장변수
    let scrOld = scrNew; // 이전 스크롤값을 저장 

    $(window).scroll(function(){  //  $(this) => $(window)
        scrNew = $(window).scrollTop(); // 새로운(New) 스크롤탑값

            if( $(window).scrollTop()===0 ){
                $('#header').removeClass('up');
                $('#header').removeClass('down');
            }
            else{
                // 1. 스크롤이벤트의 방향 위, 아래 결정
                if( scrNew-scrOld > 0 ){
                    // console.log( '아래 DOWN' );
                    // 2. 아래(DOWN) 스크롤시 헤더영역부분이 부드럽게 위로 올라가서 안보이게 한다.
                    $('#header').addClass('down');
                    $('#header').removeClass('up');
                }
                if( scrNew-scrOld < 0 ){
                    // console.log( '위 UP' );
                    // 3. 위(UP)     스크롤시 헤더영역부분이 부드럽게 다시 내려온다.
                    $('#header').removeClass('down');
                    $('#header').addClass('up');
                }
            }

           

        scrOld = scrNew;                // 이전(Old) 스크롤탑값
    });
