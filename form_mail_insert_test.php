<?
    $DB_SERVER    = "localhost"; 
    $DB_USER_NAME = "dksuz";
    $DB_USER_PW   = "Gy9610gy*";
    $DB_NAME      = "dksuz";

    // 데이터베이스 mysql 접속(Connection) 함수 => mysqli_connect();
    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn,'utf8');

    // DB 폼메일 테이블(form_mail_table)에 데이터 insert into 이용 저장하기
    $user_name      = "이순신";
    $user_email     = "dksuz@naver.com";
    $user_message   = "축하드립니다. 승전!";
    $user_date = "2023-04-09";
    
    // SQL 명령문 : 저장시 명령문 INSERT INTO 테이블이름(필드1, 필드2,  ...)
    // SQL 명령문 : 저장시 명령문 INSERT INTO form_mail_table(필드1, 필드2, .....) VALUES(값1, 값2, ... );
    // SQL 명령문 : 저장시 명령문 INSERT INTO form_mail_table() VALUES(값1, 값2, ... );
    // VALUES('$user_name', '$user_email', '$user_message', '$user_date')";
    // VALUES 변수는 반드시 싱글 쿼트 사용 감싸준다.

    $sql = "INSERT INTO form_mail_table(user_name, user_email, user_message, user_date)
            VALUES('$user_name', '$user_email', '$user_message', '$user_date')";
            // 반드시 변수 이름의 양쪽에는 '' 을 사용한다.


    $result = mysqli_query($conn, $sql); // 권한 정보를 적어준다.

    // 저장 확인
    if($result==true){
        echo("데이터 저장 성공! 축하드립니다.");
    }else{
        echo("데이터 저장 실패! 다시 시도하세요.");
    }
?>