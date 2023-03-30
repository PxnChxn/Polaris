-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nsc
-- ------------------------------------------------------
-- Server version	8.0.17

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `idaccount` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `record` datetime DEFAULT NULL,
  PRIMARY KEY (`idaccount`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'test1','test1','test1@mail.com','test1','2023-03-29 02:36:23'),(2,'test2','test2','test@gmail.com','test2','2023-03-29 02:37:31'),(3,'test3','test3','test3@gmail.com','test3','2023-03-29 02:39:27'),(4,'test4','test4','test4@gmail.com','test4','2023-03-29 02:40:17'),(5,'test5','test5','test5@gmail.com','test5','2023-03-29 02:40:54'),(6,'test6','test6','test6@mail.com','test6','2023-03-29 02:43:07'),(7,'test7','test7','test7@gmail.com','test7','2023-03-29 13:18:04'),(8,'krumos','krumos','krumos@gmail.com','krumos','2023-03-30 17:04:58');
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `idcourse` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `level` varchar(45) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  PRIMARY KEY (`idcourse`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,'Subject Verb Agreement','1,2,3,4',100),(2,'Determiners','1,2',100);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learning`
--

DROP TABLE IF EXISTS `learning`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learning` (
  `idlearning` int(11) NOT NULL AUTO_INCREMENT,
  `level` varchar(45) DEFAULT NULL,
  `score` int(11) DEFAULT NULL,
  `record` datetime DEFAULT NULL,
  `idaccount` int(11) DEFAULT NULL,
  `idcourse` int(11) DEFAULT NULL,
  PRIMARY KEY (`idlearning`),
  KEY `idaccount_idx` (`idaccount`),
  KEY `idcourse_idx` (`idcourse`),
  CONSTRAINT `idaccount` FOREIGN KEY (`idaccount`) REFERENCES `account` (`idaccount`),
  CONSTRAINT `idcourse` FOREIGN KEY (`idcourse`) REFERENCES `course` (`idcourse`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learning`
--

LOCK TABLES `learning` WRITE;
/*!40000 ALTER TABLE `learning` DISABLE KEYS */;
INSERT INTO `learning` VALUES (1,'1',5,'2023-03-30 13:49:51',1,1),(2,'1',3,'2023-03-30 13:51:07',1,1),(3,'1',5,'2023-03-30 14:02:08',2,1),(4,'1',5,'2023-03-30 14:02:53',3,1),(5,'1',1,'2023-03-30 14:15:17',1,1),(6,'1',3,'2023-03-30 14:16:29',1,1),(7,'2',1,'2023-03-30 16:16:28',1,1),(8,'2',1,'2023-03-30 16:20:21',1,1),(9,'1',5,'2023-03-30 17:05:29',8,1),(10,'2',3,'2023-03-30 17:06:01',8,1);
/*!40000 ALTER TABLE `learning` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-30 17:13:23
