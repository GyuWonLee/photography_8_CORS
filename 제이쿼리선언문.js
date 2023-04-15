// 제이쿼리 사용은  먼저 선언하고 사용한다. 
// 1. 제이쿼리 선언문
// jQuery => $ 간편한 기호 달러 사인 기호를 사용한다.
// 콜백함수 => 부르면 결과과 오는것 콜백 묶음을 함수
// jQuery(콜백함수);
// $(콜백함수);
$(function(){
    // 제이쿼리 시작
    console.log( '$ => ' + $ );  // 제이쿼리 프로그램 실행 코드 확인한다.
});

jQuery(function(){
    // 제이쿼리 시작
    console.log( 'jQuery => ' + jQuery );  
    console.log( `$ =>  ${$}` );  // 탬플릿 리터럴 
});

// 탬플릿 리터럴 ES5  'jQuery' + jQuery
// 2015
// 탬플릿 리터럴 ES6  `$ ${$}`
// 탬플릿 리터럴 ES Nest  `$ ${$}`


////////////////////////////////////////////////////////////////////////////////
// $ 사인이 외브로 노출되어서 충돌이 일어날 수 있다.
// 그래서 해결하는 방법은 =>  $사인을 내부 변수로 사용함으로서 피할 수 있다
////////////////////////////////////////////////////////////////////////////////
//
// => 달러 사인을 아규먼트로 전달하여 매개변수로 받아서 내부 변수로 사용한다.
//
////////////////////////////////////////////////////////////////////////////////

// 실행 안된다.
(function(){
    alert('함수 실행');
});

// 실행 안된다.=> 즉시 실행하도록 실행문()
// 즉시실행함수 => 즉시실행함수표현식(IIFE)

// => 전달인자(Argument 아규먼트 전달인자) 
// => 매개변수(Parameter 파라미터 전달인자를 받는변수)

// 문자열을 인용부호로 감싸면 String 스트링형(문자열)의 자료
(function(매개변수){ // 받는 인수값
    alert('즉시실행함수 실행' + 매개변수);
})('아규먼트'); // 전달인자


// 개발자 사용 구현은 이렇게 한다.
// 제이쿼리의 달러사인을 아규먼트로 전달하여 매개변수로 사용 구현
(function($){
    console.log( `즉시실행함수표현식 전달인자를 jQuery롤 전달 => 달러사인 기호로 받는다 => $  ${$}` );
})(jQuery);


(function(제이쿼리){    

    console.log( 제이쿼리 ); // jQuery 프로그램

    console.log( 제이쿼리('#header') ); // 아이디가 헤더인 선택자

    제이쿼리('#header').click(function(){ // 아이디가 헤더인 선택자 클릭 이벤트
        alert('클릭 테스트');
    });

})(jQuery);


// 즉시 실행 함수로 제이쿼리 $ 사인 기호 내부변수로 사용 구현
(function(a, b, c, d, e){
    // 매개변수는 선언안하고 함수의 ()안에 바로 사용가능
    let cnt; //Undefined
    let c=0;

   console.log( a, b, c, d, e );   
   console.log( 'e는 정의된 아규먼트 즉 전달인자값이 없다 언디파인드 Undefined' + e );

})('jQuery', '변수4', 'window', 'document' );


