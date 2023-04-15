-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- 생성 시간: 23-04-08 13:10
-- 서버 버전: 8.0.32
-- PHP 버전: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 데이터베이스: `dksuz`
--

-- --------------------------------------------------------

--
-- 테이블 구조 `form_mail_table`
--

CREATE TABLE `form_mail_table` (
  `idx` int NOT NULL COMMENT '자동 증가 인덱스',
  `user_name` varchar(50) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이름',
  `user_email` varchar(250) COLLATE utf8mb4_general_ci NOT NULL COMMENT '이메일',
  `user_message` text COLLATE utf8mb4_general_ci NOT NULL COMMENT '메시지',
  `user_date` varchar(10) COLLATE utf8mb4_general_ci NOT NULL COMMENT '날짜'
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='포토그라피  폼메일 테이블';

--
-- 덤프된 테이블의 인덱스
--

--
-- 테이블의 인덱스 `form_mail_table`
--
ALTER TABLE `form_mail_table`
  ADD PRIMARY KEY (`idx`);

--
-- 덤프된 테이블의 AUTO_INCREMENT
--

--
-- 테이블의 AUTO_INCREMENT `form_mail_table`
--
ALTER TABLE `form_mail_table`
  MODIFY `idx` int NOT NULL AUTO_INCREMENT COMMENT '자동 증가 인덱스';
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
