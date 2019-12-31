-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: boomershub_db
-- ------------------------------------------------------
-- Server version	8.0.18

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
-- Table structure for table `lst_images`
--

DROP TABLE IF EXISTS `lst_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lst_images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `properties_id` int(11) NOT NULL,
  `link` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `properties_id_idx` (`properties_id`),
  CONSTRAINT `properties_id` FOREIGN KEY (`properties_id`) REFERENCES `tbl_properties` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lst_images`
--

LOCK TABLES `lst_images` WRITE;
/*!40000 ALTER TABLE `lst_images` DISABLE KEYS */;
INSERT INTO `lst_images` VALUES (1,1,'/images/Brookdale Creekside/1.jpg'),(2,1,'/images/Brookdale Creekside/2.jpg'),(3,1,'/images/Brookdale Creekside/3.jpg'),(4,2,'/images/The Delaney At Georgetown Village/1.png'),(5,2,'/images/The Delaney At Georgetown Village/2.png'),(6,2,'/images/The Delaney At Georgetown Village/3.png'),(7,3,'/images/Banyan Place/1.png'),(8,3,'/images/Banyan Place/2.jpg'),(9,3,'/images/Banyan Place/3.jpg'),(10,4,'/images/Emerald Park of Hollywood/1.jpg'),(11,4,'/images/Emerald Park of Hollywood/2.jpg'),(12,4,'/images/Emerald Park of Hollywood/3.jpg'),(13,5,'/images/Legacy At Highwoods Preserve/1.jpg'),(14,5,'/images/Legacy At Highwoods Preserve/2.png'),(15,5,'/images/Legacy At Highwoods Preserve/3.jpg'),(16,6,'/images/The Isle At Watermere/1.jpg'),(17,6,'/images/The Isle At Watermere/2.png'),(18,6,'/images/The Isle At Watermere/3.png');
/*!40000 ALTER TABLE `lst_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbl_properties`
--

DROP TABLE IF EXISTS `tbl_properties`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbl_properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `address` varchar(100) DEFAULT NULL,
  `city` varchar(40) DEFAULT NULL,
  `state` varchar(40) DEFAULT NULL,
  `zipcode` int(11) DEFAULT NULL,
  `county` varchar(40) DEFAULT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  `capacity` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbl_properties`
--

LOCK TABLES `tbl_properties` WRITE;
/*!40000 ALTER TABLE `tbl_properties` DISABLE KEYS */;
INSERT INTO `tbl_properties` VALUES (1,'Brookdale Creekside','Address','Dhaka','Texas',1201,'Test','123456',1,12),(2,'The Delaney At Georgetown Village','Address','Atlas','Texas',1201,'Test','12334',2,10),(3,'Banyan Place','Address 3','City 3','State 3',1200,'County 3','12343',3,5),(4,'Emerald Park of Hollywood','Test 4','Test 4','Test 4',120,'San Fransisco','123456',1,10),(5,'Legacy At Highwoods Preserve','Road 5','City 5','State 5',120,'County 5','123654',3,3),(6,'The Isle At Watermere','Road 6','City 6','State 6',1210,'County 6','123728',2,4);
/*!40000 ALTER TABLE `tbl_properties` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-31 20:02:50
