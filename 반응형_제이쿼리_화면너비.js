
    // 반응형 웹개발 시작
    // 화면의 너비(윈도우너비 창너비)에 반응하는 반응형
    // 창너비에 반응하는 자바스크립트, 제이쿼리 함수 resize()
    // $(window).resize();
    console.log('gallery innerWidth ', $('.gallery').innerWidth());
    console.log('gallery ul innerWidth ', $('.gallery ul').innerWidth());
    console.log('gallery ul innerWidth ', $('.gallery ul').innerWidth());
    console.log('gallery ul li innerWidth ', $('.gallery ul li').innerWidth());
    console.log('gallery ul li img innerWidth ', $('.gallery ul li img').innerWidth());
    console.log('gallery ul li img innerHeight ', $('.gallery ul li img').innerHeight());
    // 기본 높이의 비율
    // 이미지1,2 너비 800
    // 이미지1 높이 797
    // 이미지2 높이 1200
    const imgWidth = 800;
    const imgHeight1 = 797;
    const imgHeight2 = 1200;
    const heightRate1 =  imgHeight1/imgWidth; // 이미지높이1/이미지너비
    const heightRate2 =  imgHeight2/imgWidth; // 이미지높이2/이미지너비
    // 이미지 너비를 가져와서 높이를 구한다.
    let imgW = $('.gallery img').innerWidth();    

    $(window).resize(function(){
        console.log('gallery innerWidth ', $('.gallery').innerWidth());
        console.log('gallery ul innerWidth ', $('.gallery ul').innerWidth());
        console.log('gallery ul innerWidth ', $('.gallery ul').innerWidth());
        console.log('gallery ul li innerWidth ', $('.gallery ul li').innerWidth());
        console.log('gallery ul li img innerWidth ', $('.gallery ul li img').innerWidth());
        console.log('gallery ul li img innerHeight ', $('.gallery ul li img').innerHeight());
        console.log('이미지 높이 ', $('.gallery ul li img').innerWidth()*높이비율)
    });
   

