<?
    $user_name      = $_POST['이름'];
    $user_email     = $_POST['이메일'];
    $user_message   = $_POST['메시지'];


    // 보내온 폼 데이터를 데이터베이스에 저장하기
    // 0. 테스트 서버파일 생성 form_mail_test.php
    // 1. 데이터베이스 (DataBase) (DB) 사용권한 인증(인가)
    // 2. 데이터베이스 접속(Conection) 접속
    // 3. 데이터베이스 접속(Connection) 확인
    // 4. 더미(의미없는)데이터 DB에 저장하기 테스트
    // 5. 폼전송해서 AJAX 구현해서 DB에 저장한다. 최종

    // 응답 Response
    echo $user_name. "님 메시지 잘 받았습니다. 감사합니다.";
    
?>

