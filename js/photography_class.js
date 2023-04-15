// 1. 라이브러리 충돌을 피하기
// 즉시실행함수 === 즉시표현함수식 => IIFE

// 2. 섹션, 아트클 별로 사용되는 변수 => 변수 중복성 문제 피하기
// 객체지향기반 => Object(객체) 사용하거나 또는 Class(객체) 사용

(($, window, document)=>{

    class Photograpy {
        init(){
            this.header();
            this.paralax();
            this.section8();
            this.section15();
        }
        header(){

            // 모바일 버튼 클릭 이벤트
            $('.mobile-btn').on({
                click(e) {
                    e.preventDefault();
                    $(this).toggleClass('on');
                    $('.nav-menu').slideToggle(300);
                }
            });



             // 섹션별 스클롩 탑값 알아보기
            const sec1ScrTop = $('#section1').offset().top; // 섹션1의 맨위에서 탑값까지 위치
            const sec2ScrTop = $('#section2').offset().top; // 섹션2의 맨위에서 탑값까지 위치
            const sec3ScrTop = $('#section3').offset().top; // 섹션3의 맨위에서 탑값까지 위치
            const sec4ScrTop = $('#section4').offset().top; // 섹션4의 맨위에서 탑값까지 위치
            const sec5ScrTop = $('#section5').offset().top; // 섹션5의 맨위에서 탑값까지 위치
            const sec6ScrTop = $('#section6').offset().top; // 섹션6의 맨위에서 탑값까지 위치
            const sec7ScrTop = $('#section7').offset().top; // 섹션7의 맨위에서 탑값까지 위치
            const sec8ScrTop = $('#section8').offset().top; // 섹션8의 맨위에서 탑값까지 위치
            const sec9ScrTop = $('#section9').offset().top; // 섹션9의 맨위에서 탑값까지 위치
            const sec10ScrTop = $('#section10').offset().top; // 섹션10의 맨위에서 탑값까지 위치
            const sec11ScrTop = $('#section11').offset().top; // 섹션11의 맨위에서 탑값까지 위치
            const sec12ScrTop = $('#section12').offset().top; // 섹션12의 맨위에서 탑값까지 위치
            const sec13ScrTop = $('#section13').offset().top; // 섹션13의 맨위에서 탑값까지 위치
            const sec14ScrTop = $('#section14').offset().top; // 섹션14의 맨위에서 탑값까지 위치
            const sec15ScrTop = $('#section15').offset().top; // 섹션15의 맨위에서 탑값까지 위치
            const footerScrTop= $('#footer').offset().top; // 섹션15의 맨위에서 탑값까지 위치
    
            let scrNew = 0;      // 스크롤시 새로 스크롤값을 저장변수
            let scrOld = scrNew; // 이전 스크롤값을 저장 

            $(window).scroll(function(){
                if( $(window).scrollTop() > sec5ScrTop-100 && $(window).scrollTop() < sec6ScrTop-100 ){
                    $('.nav-btn').eq(0).addClass('on');
                }
                else {
                    $('.nav-btn').eq(0).removeClass('on');
                }

                if( $(window).scrollTop() >= sec6ScrTop-100 && $(window).scrollTop() < sec8ScrTop-100 ){
                    $('.nav-btn').eq(1).addClass('on');
                }
                else {
                    $('.nav-btn').eq(1).removeClass('on');
                }

                if( $(window).scrollTop() >= sec8ScrTop-100 && $(window).scrollTop() < sec9ScrTop-100 ){
                    $('.nav-btn').eq(2).addClass('on');
                }
                else {
                    $('.nav-btn').eq(2).removeClass('on');
                }


                // 네비게이션 버튼 네번째 AWARDS 영역은 섹션9-100부터 ~ 섹션10미만  범위는 그리고(~하고)(and && )
                if( $(window).scrollTop() >= sec9ScrTop-100 && $(window).scrollTop() < sec10ScrTop ){
                    $('.nav-btn').eq(3).addClass('on');
                }
                else {
                    $('.nav-btn').eq(3).removeClass('on');
                }


                // 네비게이션 버튼 다섯번째 BLOG 영역은 섹션10-100부터 ~ 섹션15-200  범위는 그리고(~하고)(and && )
                if( $(window).scrollTop() > sec10ScrTop-100 && $(window).scrollTop() < sec15ScrTop-160 ){
                    $('.nav-btn').eq(4).addClass('on');
                }
                else {
                    $('.nav-btn').eq(4).removeClass('on');
                }


                // 네비게이션 버튼 여섯번째 AWARDS 영역은 섹션15-200부터 나머지 범위
                if( $(window).scrollTop() >= sec15ScrTop-160 ){
                    $('.nav-btn').eq(5).addClass('on');
                }
                else {
                    $('.nav-btn').eq(5).removeClass('on');
                }



                
                // 새로운(New) 스크롤탑값
                scrNew = $(window).scrollTop();

                    if( $(window).scrollTop()===0 ){  // 다중 중첩 조건문
                        $('#header').removeClass('up');
                        $('#header').removeClass('down');
                    }
                    else{ // 스크롤 탑값이 0보다 큰경우
                        if( scrNew-scrOld > 0 ){
                            $('#header').addClass('down');
                            $('#header').removeClass('up');
                        }
                        if( scrNew-scrOld < 0 ){
                            $('#header').removeClass('down');
                            $('#header').addClass('up');
                        }
                    }

                // 이전(Old) 스크롤탑값
                scrOld = scrNew;
            }); 

            
        }        
        paralax(){

            const sec1ScrTop = $('#section1').offset().top; // 섹션1의 맨위에서 탑값까지 위치
            const sec2ScrTop = $('#section2').offset().top; // 섹션2의 맨위에서 탑값까지 위치
            const sec3ScrTop = $('#section3').offset().top; // 섹션3의 맨위에서 탑값까지 위치
            const sec4ScrTop = $('#section4').offset().top; // 섹션4의 맨위에서 탑값까지 위치
            const sec5ScrTop = $('#section5').offset().top; // 섹션5의 맨위에서 탑값까지 위치
            const sec6ScrTop = $('#section6').offset().top; // 섹션6의 맨위에서 탑값까지 위치
            const sec7ScrTop = $('#section7').offset().top; // 섹션7의 맨위에서 탑값까지 위치
            const sec8ScrTop = $('#section8').offset().top; // 섹션8의 맨위에서 탑값까지 위치
            const sec9ScrTop = $('#section9').offset().top; // 섹션9의 맨위에서 탑값까지 위치
            const sec10ScrTop = $('#section10').offset().top; // 섹션10의 맨위에서 탑값까지 위치
            const sec11ScrTop = $('#section11').offset().top; // 섹션11의 맨위에서 탑값까지 위치
            const sec12ScrTop = $('#section12').offset().top; // 섹션12의 맨위에서 탑값까지 위치
            const sec13ScrTop = $('#section13').offset().top; // 섹션13의 맨위에서 탑값까지 위치
            const sec14ScrTop = $('#section14').offset().top; // 섹션14의 맨위에서 탑값까지 위치
            const sec15ScrTop = $('#section15').offset().top; // 섹션15의 맨위에서 탑값까지 위치
            const footerScrTop= $('#footer').offset().top; // 섹션15의 맨위에서 탑값까지 위치
    
            $(window).scroll(function(){
                // 스크롤탑값이 0이면 모두 초기화
                if( $(window).scrollTop()===0 ){
                    $('#section2') .removeClass('on'); 
                    $('#section3') .removeClass('on'); 
                    $('#section4') .removeClass('on'); 
                    $('#section5') .removeClass('on'); 
                    $('#section6') .removeClass('on'); 
                    $('#section7') .removeClass('on'); 
                    $('#section8') .removeClass('on'); 
                    $('#section9') .removeClass('on'); 
                    $('#section10').removeClass('on');
                    $('#section11').removeClass('on');
                    $('#section12').removeClass('on');
                    $('#section13').removeClass('on');
                    $('#section14').removeClass('on');
                }

                if( $(window).scrollTop() >= sec2ScrTop-300 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section2').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec3ScrTop-300 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section3').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec4ScrTop-300 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section4').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec5ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section5').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec6ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section6').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec7ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section7').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec8ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section8').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec9ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section9').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec10ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section10').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec11ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section11').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec12ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section12').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec13ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section13').addClass('on'); 
                }
                if( $(window).scrollTop() >= sec14ScrTop-500 ){
                    // 섹션2에 on 클래스 이름을 추가(add) 한다. => addClass('on');
                    $('#section14').addClass('on'); 
                }

            });

        }
        section8(){
                
            const galleryBtn = $('#section8 .gallery-btn');
            let btnIndex = 0 ;
            galleryBtn.each(function(index){
                // console.log( index ); // 버튼1 ~ 5 인덱스번호 0 1 2 3 4
                // 클릭이벤트
                $(this).click(function(e){
                    e.preventDefault();
                    
                    btnIndex = index; // 버튼의 번호
                    responseGallery();

                    galleryBtn.removeClass('on');  //  5개버튼 모두 클래스가 삭제된다.
                    $(this).addClass('on');  // 현재 클릭된 버튼만 클래스가 추가된다.
            
                });
            });

            // 전역변수 설정
            const imgWidth = 800;
            const imgHeight1 = 797;
            const imgHeight2 = 1200;
            const heightRate1 =  imgHeight1/imgWidth; // 이미지높이1/이미지너비
            const heightRate2 =  imgHeight2/imgWidth; // 이미지높이2/이미지너비
            const gallery = $('.gallery');

            // 반응형 그리고 버튼 클릭이벤트에 따라 줄수,칸수,이미지너비,이미지높이,전체박스 높이 반응하는 갤러리
            let winW = $(window).innerWidth(); // 창너비 가져오기
            let galleryWidth = 1180;
            let rows = 4;
            let cols = 3;    
            let imgW = $('.gallery img').innerWidth();// 이미지 너비를 가져와서 높이를 구한다. 칸의 left 결정    
            let imgH1 = imgW*heightRate1; // 이미지 높이1 다음줄에 top 값결정
            let imgH2 = imgW*heightRate2; // 이미지 높이2 다음줄에 top 값결정
            let ulH = (imgH1*2+imgH2*2)-(40*(rows-1)); // ul 박스(이미지 전체박스) 높이 
            
            $(window).resize(function(){
                responseGallery();
            });   

            function responseGallery(){
                winW = $(window).innerWidth();

                // 화면 너비가 1170 초과인경우 3칸
                // 화면 너비가 600 초과인경우 2칸
                // 화면 너비가 600이하인경 초과인경우 1칸
                if(winW > 1170){
                    cols=3;
                }        
                else if(winW > 600){
                    cols=2;
                }
                else {
                    cols=1;
                }


                if( winW <= 1170 ){
                    galleryWidth = winW+40;
                }
                else{
                    galleryWidth = 1180;
                }    
                imgW = galleryWidth/cols-40;
                
                // 이미지 너비 반응형 적용하기
                // 창너비가 1140px 이하이면 
                // 갤러리 박스 너비를 창너비로 설정한다.
                // 이미지는 갤러리박스 / 3 - 40 으로 결정한다.
                imgH1 = imgW*heightRate1; // 이미지 높이1 다음줄에 top 값결정
                imgH2 = imgW*heightRate2; // 이미지 높이2 다음줄에 top 값결정
                // 이미지 너비
                $('.gallery .list, .gallery img').css({width:imgW });


                $('.list').removeClass('on');
                if (btnIndex === 0) {

                    // 줌 효과
                    $('.list').removeClass('on');

                    if (cols === 3) {
                        $('.list1').stop().show().animate({top:(imgH1+40)*0,left:0},300); //ctrl shift h => 한번에 ,300넣기(replace all)
                        $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                        $('.list3').stop().show().animate({top:(imgH1+40)*0,left:(imgW*2)+(40*2)},300);

                        $('.list4').stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                        $('.list5').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                        $('.list6').stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                        $('.list7').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*0)+(40*0)},300);
                        $('.list8').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*1)+(40*1)},300);
                        $('.list9').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*2)+(40*2)},300);

                        $('.list10').stop().show().animate({top:(imgH1+40+imgH2+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                        $('.list11').stop().show().animate({top:(imgH2+40+imgH1+40+imgH2+40),left:(imgW*1)+(40*1)},300);
                        $('.list12').stop().show().animate({top:(imgH1+40+imgH2+40+imgH1+40),left:(imgW*2)+(40*2)},300);

                        rows = 4; 
                        ulH = ((imgH1*2)+(imgH2*2))+(40*(rows - 1));
                    } else if (cols === 2) {
                        $('.list1').stop().show().animate({top:(imgH1+40)*0,left:0},300); 
                        $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                        
                        $('.list3').stop().show().animate({top:(imgH1+40)*1,left:(imgW*0)+(40*0)},300);
                        $('.list4').stop().show().animate({top:(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                        
                        $('.list6').stop().show().animate({top:(imgH1+40)*2,left:(imgW*0)+(40*0)},300);
                        $('.list5').stop().show().animate({top:(imgH2+40)*2,left:(imgW*1)+(40*1)},300);

                        $('.list7').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                        $('.list8').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                        
                        $('.list9').stop().show().animate({top:((imgH1+40)*3)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                        $('.list10').stop().show().animate({top:((imgH2+40)*3)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                        
                        $('.list12').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*1),left:(imgW*0)+(40*0)},300);
                        $('.list11').stop().show().animate({top:((imgH2+40)*4)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);

                        rows = 6; 
                        ulH = ((imgH1*2)+(imgH2*4))+(40*(rows - 1));
                    } else {
                        $('.list1').stop().show().animate({top:((imgH1+40)*0)+((imgH2+40)*0),left:0},300); 
                        $('.list2').stop().show().animate({top:((imgH1+40)*1)+((imgH2+40)*0),left:0},300);             
                        $('.list3').stop().show().animate({top:((imgH1+40)*1)+((imgH2+40)*1),left:0},300);
                        $('.list4').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*1),left:0},300);
                        $('.list6').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*2),left:0},300);
                        $('.list5').stop().show().animate({top:((imgH1+40)*2)+((imgH2+40)*3),left:0},300);
                        $('.list7').stop().show().animate({top:((imgH1+40)*3)+((imgH2+40)*3),left:0},300);
                        $('.list8').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*3),left:0},300);               
                        $('.list9').stop().show().animate({top:((imgH1+40)*4)+((imgH2+40)*4),left:0},300);
                        $('.list10').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*4),left:0},300);                
                        $('.list12').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*5),left:0},300);
                        $('.list11').stop().show().animate({top:((imgH1+40)*5)+((imgH2+40)*6),left:0},300);

                        rows = 12; 
                        ulH = ((imgH1*6)+(imgH2*6))+(40*(rows - 1));
                    }

                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height:ulH},300);

                } else if (btnIndex === 1) {
                    // 줌 효과
                    // 줌 효과
                    $('.list').removeClass('on');


                    $('.list1').hide(); //hide가 등장했기때문에 모든 버튼에 show를 해줘야함(btn1fn도)
                    $('.list3').hide();
                    $('.list7').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list2').stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                            $('.list4').stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                            $('.list6').stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                        
                            $('.list5').stop().show().animate({top:(imgH2+40),left:(imgW*0)+(40*0)},300);
                            $('.list8').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                            $('.list9').stop().show().animate({top:(imgH2+40),left:(imgW*2)+(40*2)},300);

                            $('.list10').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                            $('.list11').stop().show().animate({top:(imgH2+40+imgH2+40),left:(imgW*1)+(40*1)},300);
                            $('.list12').stop().show().animate({top:(imgH2+40+imgH1+40),left:(imgW*2)+(40*2)},300);

                            rows = 3; 
                            ulH = (imgH1*1) +(imgH2*2)+(40*(rows - 1));
                            break;
                        case 2:
                            $('.list2').stop().show().animate({top:(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list4') .stop().show().animate({top:(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                            
                            $('.list5') .stop().show().animate({top:(imgH2+40)*1,left:(imgW*0)+(40*0)},300);           
                            $('.list6') .stop().show().animate({top:(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                            
                            $('.list8') .stop().show().animate({top:((imgH2+40)*1)+((imgH1+40)*1),left:(imgW*0)+(40*0)},300);
                            $('.list9') .stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*0),left:(imgW*1)+(40*1)},300);
                            
                            $('.list10').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*0)+(40*0)},300);
                            $('.list11').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*1),left:(imgW*1)+(40*1)},300);
                            
                            $('.list12').stop().show().animate({top:((imgH2+40)*2)+((imgH1+40)*2),left:(imgW*1)+(40*1)},300);

                            rows = 5; 
                            ulH = (imgH1*2)+(imgH2*3)+(40*(rows - 1));
                            break;
                        default:
                            $('.list2') .stop().show().animate({top:(imgH2+40)*0,left:0},300);
                            $('.list4') .stop().show().animate({top:(imgH2+40)*1,left:0},300);                   
                            $('.list6') .stop().show().animate({top:(imgH2+40)*2,left:0},300);           
                            $('.list5') .stop().show().animate({top:(imgH2+40)*3,left:0},300);                    
                            $('.list8') .stop().show().animate({top:(imgH2+40)*3+(imgH1+40)*1,left:0},300);
                            $('.list9') .stop().show().animate({top:(imgH2+40)*4+(imgH1+40)*1,left:0},300);                    
                            $('.list10').stop().show().animate({top:(imgH2+40)*4+(imgH1+40)*2,left:0},300);
                            $('.list11').stop().show().animate({top:(imgH2+40)*5+(imgH1+40)*2,left:0},300);                 
                            $('.list12').stop().show().animate({top:(imgH2+40)*5+(imgH1+40)*3,left:0},300);

                            rows = 9; 
                            ulH = (imgH1*3)+(imgH2*6)+(40*(rows - 1));
                    }

                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height:ulH},300);

                } else if (btnIndex === 2) {
                    // 줌 효과
                    $('.list').removeClass('on');

                    $('.list1').hide();
                    $('.list4').hide();
                    $('.list5').hide();
                    $('.list10').hide();
                    $('.list11').hide();

                    switch(cols) {
                        case 3:
                            $('.list2').stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                            $('.list3').stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                            $('.list6').stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                            
                            $('.list8').stop().show().animate({top:(imgH2+40),left:(imgW*0)+(40*0)},300);
                            $('.list7').stop().show().animate({top:(imgH1+40),left:(imgW*1)+(40*1)},300);
                            $('.list9').stop().show().animate({top:(imgH2+40),left:(imgW*2)+(40*2)},300);

                            $('.list12').stop().show().animate({top:(imgH1+40+imgH1+40),left:(imgW*1)+(40*1)},300);

                            rows = 3; 
                            ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                            break;
                        case 2:
                            $('.list2') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                            
                            $('.list6') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                            $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                            
                            $('.list7') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*2,left:(imgW*0)+(40*0)},300);
                            $('.list9') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);

                            $('.list12').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);

                            rows = 4; 
                            ulH = (imgH1*2)+(imgH2*2)+(40*(rows - 1));
                            break;
                        default:
                            $('.list2') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                            $('.list6') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);                   
                            $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*2,left:(imgW*0)+(40*0)},300);                   
                            $('.list7') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);
                            $('.list9') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);
                            $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:(imgW*0)+(40*0)},300);

                            rows = 7; 
                            ulH = (imgH1*3)+(imgH2*4)+(40*(rows - 1));
                    }
                
                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height:ulH},300);
                } else if (btnIndex === 3) {
                    // 줌 효과
                    $('.list').removeClass('on');

                    $('.list2').hide();
                    $('.list4').hide();
                    $('.list6').hide();
                    $('.list7').hide();
                    $('.list9').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list1') .stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                            $('.list3') .stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                            $('.list5') .stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                            
                            $('.list8') .stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                            $('.list10').stop().show().animate({top:(imgH1+40),left:(imgW*1)+(40*1)},300);
                            $('.list12').stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                            $('.list11').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*0)+(40*0)},300);

                            rows = 3; 
                            ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                            break;
                        case 2:
                            $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list3') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                        
                            $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);     
                            $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                            
                            $('.list10').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list12').stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                            
                            $('.list11').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);

                            rows = 4; 
                            ulH = ((imgH1*3)+(imgH2*1))+(40*(rows - 1));
                            break;
                        default:
                            $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:0},300);
                            $('.list3') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:0},300);       
                            $('.list5') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:0},300);     
                            $('.list8') .stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*0,left:0},300);                   
                            $('.list10').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*1,left:0},300);
                            $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*2,left:0},300);                
                            $('.list11').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:0},300);

                            rows = 7; 
                            ulH = ((imgH1*4)+(imgH2*3))+(40*(rows - 1));
                    }

                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height:ulH},300);
                } else if (btnIndex === 4) {
                    // 줌 효과
                    $('.list').removeClass('on');

                    $('.list2').hide();
                    $('.list3').hide();
                    $('.list6').hide();
                    $('.list9').hide();
                
                    switch(cols) {
                        case 3:
                            $('.list1') .stop().show().animate({top:0,left:(imgW*0)+(40*0)},300);
                            $('.list4') .stop().show().animate({top:0,left:(imgW*1)+(40*1)},300);
                            $('.list5') .stop().show().animate({top:0,left:(imgW*2)+(40*2)},300);
                            
                            $('.list7') .stop().show().animate({top:(imgH1+40),left:(imgW*0)+(40*0)},300);
                            $('.list10').stop().show().animate({top:(imgH2+40),left:(imgW*1)+(40*1)},300);
                            $('.list8') .stop().show().animate({top:(imgH1+40),left:(imgW*2)+(40*2)},300);

                            $('.list12').stop().show().animate({top:(imgH1+40+imgH1+40),left:(imgW*0)+(40*0)},300);
                            $('.list11').stop().show().animate({top:(imgH1+40+imgH2+40),left:(imgW*2)+(40*2)},300);

                            rows = 3; 
                            ulH = ((imgH1*2)+(imgH2*1))+(40*(rows - 1));
                            break;
                        case 2:
                            $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list4') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:(imgW*1)+(40*1)},300);
                            
                            $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list7') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                            
                            $('.list10').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*0,left:(imgW*0)+(40*0)},300);
                            $('.list8') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:(imgW*1)+(40*1)},300);
                            
                            $('.list12').stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:(imgW*0)+(40*0)},300);
                            $('.list11').stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*2,left:(imgW*1)+(40*1)},300);

                            rows = 4; 
                            ulH = ((imgH1*2)+(imgH2*2))+(40*(rows - 1));
                            break;
                        default:
                            $('.list1') .stop().show().animate({top:(imgH1+40)*0+(imgH2+40)*0,left:0},300);
                            $('.list4') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*0,left:0},300);
                            $('.list5') .stop().show().animate({top:(imgH1+40)*1+(imgH2+40)*1,left:0},300);
                            $('.list7') .stop().show().animate({top:(imgH1+40)*2+(imgH2+40)*1,left:0},300);
                            $('.list10').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*1,left:0},300);
                            $('.list8') .stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*2,left:0},300);
                            $('.list12').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*3,left:0},300);
                            $('.list11').stop().show().animate({top:(imgH1+40)*3+(imgH2+40)*4,left:0},300);

                            rows = 8; 
                            ulH = ((imgH1*4)+(imgH2*4))+(40*(rows - 1));
                    }

                    // 줌인 효과
                    $('.list').addClass('on');
                    // ul 높이 설정
                    $('.gallery ul').stop().animate({height:ulH},300);
                }


                

            }   
            responseGallery();  // 초기 실행 함수

            //////////////////////////////////////////////////////////////////////////
            // 갤러리 모달창 이벤트
            // 갤러리 이미지 클릭하면 모달창 보인다.
            // 모달창 닫기 버튼 클릭하면 모달창 숨긴다.

            // 추가 내용
            // 모달창 열릴때 전체창(부모창) 스크롤바 숨기기
            // 그리고 모달창 이미지 높이를 기준으로 맞추기
            // 모달창 스크롤바 숨기기

            // 섹션8 갤러리 이미지 박스 클릭 : 모달창 열기
            // 모달창 열면서 클릭한 이미지 번호로 설정한다.
            let cnt=13;     // 이미지 시작번호
            let imgSrc='';

            $('#section8 .img-box').on({
                click: function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeIn(300);
                    $('html').addClass('on');
                    // 현재(this) 부모박스 클릭한 박스의 
                    // 자식요소인 이미지 속성(Attribute)중 src 속성을 가져온다.
                    // 자식요소의 이미지 태그 검색
                    imgSrc = $(this).find('img').attr('src');
                    $('.gallery-modal-img').attr('src', imgSrc); // 이미지 변경

                    // 선택된 이미지 번호 가져오기
                    cnt = $(this).find('img').data('num');                    
                }
            });
         
            // 모달 이미지 메인함수 : 모달이미지 모두 변경
            function modalImage(){
                imgSrc = `./img/photography-img${cnt}.jpg`;
                $('.gallery-modal-img').stop().fadeOut(0).fadeIn(300).attr('src', imgSrc); // 이미지 변경
            }
            
            // 다음 이미지 슬라이드 함수            
            function nextImageSlide(){
                cnt++;
                if(cnt>24){cnt=13;}   //마지막이미지(24) 초과이면 첫번째 이미지로 이동  
                modalImage();
            }
            
            // 이전 이미지 슬라이드 함수
            function prevImageSlide(){
                cnt--;
                if(cnt<13){cnt=24;}  // 첫번째 미만이면 마지막 이미지로 이동
                modalImage();
            }
            
            // 다음화살버튼 클릭 이벤트
            $('.next-btn').on({
                click(e){
                    e.stopPropagation();
                    nextImageSlide();
                }
            });

            // 이전화살버튼 클릭 이벤트
            $('.prev-btn').on({
                click(e){
                    e.stopPropagation();
                    prevImageSlide();
                }
            });



            // 모달창 닫기 버튼 클릭 이벤트 : 모달창 닫기
            $('#galleryModal .close-btn').on({
                click: function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeOut(300);
                    $('html').removeClass('on');
                }
            });






            // 오늘 추가 내용 //////////////////////////////////////////////////////////
            // 모달창 이미지 A 링크 버튼 클릭 이벤트
            // 클릭하면 부모에게 클릭이벤트가 전파된다.
            // 이유는 부모가 자식을 감싸고 있기 때문에 

            $('#galleryModal .img-btn').on({
                click: function(e){
                    e.preventDefault();
                    e.stopPropagation(); // 부모요소로 이벤트 전달 차단 
                    nextImageSlide();
                }
            })


            // 모달창 컨테이너 박스 클릭 이벤트 : 모달창 닫기
            $('#galleryModal .container').on({
                click:function(e){
                    e.preventDefault();
                    $('#galleryModal').stop().fadeOut(300);
                    $('html').removeClass('on');
                }
            });



        }
        section15(){
            // 폼메일전송하기
            // 비동기전송방식사용
            
            // API => 웹페이지(HTML,CSS,SASS)-폼이메일전송 HTML API() 화면전환 
            // => (JS,JQUERY) AJAX API(화면전환 없이 데이터가 전송유효시간에 나누어서 전송된다.) => 
            // 비동기식 사용목적: 데이터는 유효시간에 데이터는 전송되면서, 
            // 다중작업이 가능한 장점(나는 컴퓨터의 다른 기능을 수행할 수 있다.)
            // PHP(SQL[MYSQL]) 서버사이드스크립언어(JSP,JPA,PHP,ASP...) 
            // =>  데이터베이스(데이터저장소)

            // HTML5 폼전송 이벤트 수행하면  
            // HTML5 API가 동작 폼화면 
            // 입력 상자 및 기타 요소(셀렉트박스, 체크박스, 라디오버튼 등등...)의 
            // name 속성으로 전송되면서 화면이 서버(서버파일 form_message.php)로 전환된다.
            // 전송방식(Method)은 GET, POST 방식 두가지가 있다.
            // GET(전송데이터가 (URL주소창에 ? 뒤에 붙어서가는 데이터)쿼리스트링에 노출), 
            // POST(주소창에 쿼리 스트링이 노출이안된다.) 
            // 

            $('.send-btn').on({
                click(e){
                    e.preventDefault();    
                    
                    const irum    = $('#userName').val();   
                    const email   = $('#userEmail').val();   
                    const message = $('#userMessage').val();   
                    const toDay   = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`; // 오늘날짜 2023-04-09

                    // 폼데이터 객체생성 속성 데이터 가져온다.
                    const formData = {
                        이름: irum,
                        이메일: email,
                        메시지: message,
                        날짜: toDay
                    }

                    $.ajax({
                        url:'http://dksuz.dothome.co.kr/photography_8/form_mail_ajax_insert.php', //서버파일 폼데이터를 받는다.
                        type: 'POST',
                        data: formData, // 폼데이터
                        success(result){ // 응답 결과 확인
                            // 응답결과가 성공 단어가 포함되어있다면                            
                            // 성공 #46b450 Your message was sent successfully. Thanks.
                            // 실패 #ffb900 Validation errors occurred. Please confirm the fields and submit it again.
                            // console.log(" 성공이 포함된 내용 ", result.includes('성공') );
                            // console.log( `AJAX 성공! ${result}` );
                            // 전송성공하고
                            // 1초 후에 실행하도록한다.
                            // 그리고 폼상자는 모두 초기화한다.
                            setTimeout(() => {
                                if(result.includes('성공')===true){
                                    $('.success-message').addClass('on');
                                    $('.error-message').removeClass('on');
    
                                    $('#userName').val('');
                                    $('#userEmail').val('');
                                    $('#userMessage').val('');
                                }  
                                else{
                                    $('.success-message').removeClass('on');
                                    $('.error-message').addClass('on');
                                    alert("다시 확인하고 시도해 주세요")
                                }    
                            }, 1000);
                        },
                        error(error){
                            console.log( `AJAX 실패! ${error}` );
                        }
                    });
                }
            });

        }
    }
    // 클래스 생성자 생성 
    const newPhotograpy = new Photograpy(); // 클래스도 함수다.
    newPhotograpy.init(); // 클래스 생성자에 .대표 메서드 호출 실행

})(jQuery, window, document);
