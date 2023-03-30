-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 30, 2023 at 09:21 PM
-- Server version: 8.0.17
-- PHP Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `nsc`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `idaccount` int(11) NOT NULL,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `record` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`idaccount`, `username`, `password`, `email`, `name`, `record`) VALUES
(1, 'test1', 'test1', 'test1@mail.com', 'test1', '2023-03-29 02:36:23'),
(2, 'test2', 'test2', 'test@gmail.com', 'test2', '2023-03-29 02:37:31'),
(3, 'test3', 'test3', 'test3@gmail.com', 'test3', '2023-03-29 02:39:27'),
(4, 'test4', 'test4', 'test4@gmail.com', 'test4', '2023-03-29 02:40:17'),
(5, 'test5', 'test5', 'test5@gmail.com', 'test5', '2023-03-29 02:40:54'),
(6, 'test6', 'test6', 'test6@mail.com', 'test6', '2023-03-29 02:43:07'),
(7, 'test7', 'test7', 'test7@gmail.com', 'test7', '2023-03-29 13:18:04'),
(8, 'krumos', 'krumos', 'krumos@gmail.com', 'krumos', '2023-03-30 17:04:58');

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

CREATE TABLE `course` (
  `idcourse` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  `total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`idcourse`, `name`, `level`, `total`) VALUES
(1, 'Subject Verb Agreement', '1,2,3,4', 100),
(2, 'Determiners', '1,2', 100);

-- --------------------------------------------------------

--
-- Table structure for table `learning`
--

CREATE TABLE `learning` (
  `idlearning` int(11) NOT NULL,
  `level` varchar(45) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `record` datetime DEFAULT NULL,
  `idaccount` int(11) DEFAULT NULL,
  `idcourse` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `learning`
--

INSERT INTO `learning` (`idlearning`, `level`, `score`, `record`, `idaccount`, `idcourse`) VALUES
(1, '1', 5, '2023-03-30 13:49:51', 1, 1),
(2, '1', 3, '2023-03-30 13:51:07', 1, 1),
(3, '1', 5, '2023-03-30 14:02:08', 2, 1),
(4, '1', 5, '2023-03-30 14:02:53', 3, 1),
(5, '1', 1, '2023-03-30 14:15:17', 1, 1),
(6, '1', 3, '2023-03-30 14:16:29', 1, 1),
(7, '2', 1, '2023-03-30 16:16:28', 1, 1),
(8, '2', 1, '2023-03-30 16:20:21', 1, 1),
(9, '1', 5, '2023-03-30 17:05:29', 8, 1),
(10, '2', 3, '2023-03-30 17:06:01', 8, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`idaccount`);

--
-- Indexes for table `course`
--
ALTER TABLE `course`
  ADD PRIMARY KEY (`idcourse`);

--
-- Indexes for table `learning`
--
ALTER TABLE `learning`
  ADD PRIMARY KEY (`idlearning`),
  ADD KEY `idaccount_idx` (`idaccount`),
  ADD KEY `idcourse_idx` (`idcourse`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `idaccount` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `course`
--
ALTER TABLE `course`
  MODIFY `idcourse` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `learning`
--
ALTER TABLE `learning`
  MODIFY `idlearning` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `learning`
--
ALTER TABLE `learning`
  ADD CONSTRAINT `idaccount` FOREIGN KEY (`idaccount`) REFERENCES `account` (`idaccount`),
  ADD CONSTRAINT `idcourse` FOREIGN KEY (`idcourse`) REFERENCES `course` (`idcourse`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
