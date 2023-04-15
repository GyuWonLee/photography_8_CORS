<?
    $DB_SERVER    = "localhost"; 
    $DB_USER_NAME = "dksuz";
    $DB_USER_PW   = "Gy9610gy*";
    $DB_NAME      = "dksuz";

    // 데이터베이스 mysql 접속(Connection) 함수 => mysqli_connect();
    $conn = mysqli_connect($DB_SERVER, $DB_USER_NAME, $DB_USER_PW, $DB_NAME);
    mysqli_set_charset($conn,'utf8');

    if($conn==true){
        echo("데이터베이스 접속을 축하드립니다.");
    }
    else{
        echo("데이터베이스 접속을 실패 다시 시도해주세요.");
    }
?>


