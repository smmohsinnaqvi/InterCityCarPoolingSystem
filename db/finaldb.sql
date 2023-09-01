-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: carpoolproject
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `booking`
--

DROP TABLE IF EXISTS `booking`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `booking` (
  `id` int NOT NULL AUTO_INCREMENT,
  `passenger_id` int NOT NULL,
  `ride_id` int NOT NULL,
  `time` datetime NOT NULL,
  `no_of_seats` int NOT NULL,
  `total_price` int NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ride_id_fk_idx` (`ride_id`),
  KEY `user_id_fk1_idx` (`passenger_id`),
  CONSTRAINT `ride_id_fk` FOREIGN KEY (`ride_id`) REFERENCES `rides` (`id`),
  CONSTRAINT `user_id_fk1` FOREIGN KEY (`passenger_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `booking`
--

LOCK TABLES `booking` WRITE;
/*!40000 ALTER TABLE `booking` DISABLE KEYS */;
INSERT INTO `booking` VALUES (1,1,1,'1998-03-13 11:58:58',4,8000,'success'),(2,1,1,'2023-03-13 11:58:58',4,4000,'success'),(3,3,1,'2023-08-26 09:07:15',2,4000,'pending'),(4,3,1,'2023-08-26 10:43:53',2,4000,'pending'),(24,3,1,'2023-08-26 19:24:45',1,2000,'pending'),(25,3,12,'2023-08-26 19:58:47',2,1200,'pending'),(26,3,12,'2023-08-26 20:05:30',1,600,'pending'),(27,3,1,'2023-08-26 20:08:41',2,4000,'pending'),(28,3,1,'2023-08-26 20:34:02',1,2000,'pending'),(29,3,1,'2023-08-26 20:37:19',3,6000,'pending'),(30,3,4,'2023-08-26 20:51:30',3,2100,'pending'),(31,3,8,'2023-08-26 21:04:40',3,2400,'pending'),(32,3,7,'2023-08-27 08:05:22',2,1600,'pending'),(33,3,1,'2023-08-27 08:31:05',1,2000,'success'),(34,3,7,'2023-08-27 10:01:30',2,1600,'success'),(35,3,15,'2023-08-30 10:53:40',2,800,'success');
/*!40000 ALTER TABLE `booking` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_company`
--

DROP TABLE IF EXISTS `car_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_company`
--

LOCK TABLES `car_company` WRITE;
/*!40000 ALTER TABLE `car_company` DISABLE KEYS */;
INSERT INTO `car_company` VALUES (1,'Maruti'),(2,'Toyota');
/*!40000 ALTER TABLE `car_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `car_models`
--

DROP TABLE IF EXISTS `car_models`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_models` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model_name` varchar(100) NOT NULL,
  `fuel_type` varchar(100) NOT NULL,
  `model_type` varchar(100) NOT NULL,
  `Company_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Company_id_fk_idx` (`Company_id`),
  CONSTRAINT `Company_id_fk` FOREIGN KEY (`Company_id`) REFERENCES `car_company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_models`
--

LOCK TABLES `car_models` WRITE;
/*!40000 ALTER TABLE `car_models` DISABLE KEYS */;
INSERT INTO `car_models` VALUES (1,'Ertiga','Petrol','SUV',1),(2,'I20','Petrol','SUV',2);
/*!40000 ALTER TABLE `car_models` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cities` (
  `id` int NOT NULL AUTO_INCREMENT,
  `city` varchar(255) DEFAULT NULL,
  `sid` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sid_fk_idx` (`sid`),
  CONSTRAINT `sid_fk` FOREIGN KEY (`sid`) REFERENCES `states` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (1,'Ahmednagar',1),(2,'Pune',1),(3,'Nagpur',1),(4,'Mumbai',1),(5,'lacknau',2),(6,'Kanpur',2),(7,'Indore',3),(8,'Bhopal',3),(9,'Jabalpur',3);
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `co_passengers`
--

DROP TABLE IF EXISTS `co_passengers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `co_passengers` (
  `id` int NOT NULL AUTO_INCREMENT,
  `passenger_id` int NOT NULL,
  `aadhar_no` varchar(45) NOT NULL,
  `phone_no` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `fname` varchar(45) NOT NULL,
  `lname` varchar(45) NOT NULL,
  `gender` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk2_idx` (`passenger_id`),
  CONSTRAINT `user_id_fk2` FOREIGN KEY (`passenger_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `co_passengers`
--

LOCK TABLES `co_passengers` WRITE;
/*!40000 ALTER TABLE `co_passengers` DISABLE KEYS */;
INSERT INTO `co_passengers` VALUES (1,1,'985262','985262596','m@gmail.com','xyz','abc','male');
/*!40000 ALTER TABLE `co_passengers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `login`
--

DROP TABLE IF EXISTS `login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `login` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roll_id` int NOT NULL,
  `login_id` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` tinyint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_id_UNIQUE` (`login_id`),
  KEY `role_id_fk_idx` (`roll_id`),
  CONSTRAINT `role_id_fk` FOREIGN KEY (`roll_id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `login`
--

LOCK TABLES `login` WRITE;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES (1,1,'nikhil','nikhil',1),(2,2,'madhekarnikhil@gmail.com','abcd',1),(3,3,'mohsin@gmail.com','abcd',1),(4,2,'hello@gmail.com','1234',1);
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `passengers_review`
--

DROP TABLE IF EXISTS `passengers_review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `passengers_review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `passenger_id` int NOT NULL,
  `ride_id` int NOT NULL,
  `rating` decimal(3,2) DEFAULT NULL,
  `comments` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ride_id_fk2_idx` (`ride_id`),
  KEY `user_id_fk3_idx` (`passenger_id`),
  CONSTRAINT `ride_id_fk2` FOREIGN KEY (`ride_id`) REFERENCES `rides` (`id`),
  CONSTRAINT `user_id_fk3` FOREIGN KEY (`passenger_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `passengers_review`
--

LOCK TABLES `passengers_review` WRITE;
/*!40000 ALTER TABLE `passengers_review` DISABLE KEYS */;
INSERT INTO `passengers_review` VALUES (1,1,1,3.40,'Very nice content');
/*!40000 ALTER TABLE `passengers_review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `booking_id` int NOT NULL,
  `passenger_id` int NOT NULL,
  `amount` int NOT NULL,
  `Date_time` datetime NOT NULL,
  `payment_method` varchar(45) NOT NULL,
  `status` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `booking_id_fk_idx` (`booking_id`),
  KEY `user_id_fk4_idx` (`passenger_id`),
  CONSTRAINT `booking_id_fk` FOREIGN KEY (`booking_id`) REFERENCES `booking` (`id`),
  CONSTRAINT `user_id_fk4` FOREIGN KEY (`passenger_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payment`
--

LOCK TABLES `payment` WRITE;
/*!40000 ALTER TABLE `payment` DISABLE KEYS */;
INSERT INTO `payment` VALUES (1,24,3,2000,'2023-08-26 19:24:45','UPI','success'),(2,24,3,2000,'2023-08-26 19:24:45','UPI','success'),(3,24,3,2000,'2023-08-26 19:31:40','UPI','success'),(4,24,3,2000,'2023-08-26 19:33:49','UPI','success'),(5,24,3,2000,'2023-08-26 19:34:37','UPI','success'),(6,24,3,2000,'2023-08-26 19:54:44','Debit Card','success'),(7,24,3,2000,'2023-08-26 19:55:51','UPI','success'),(8,25,3,1200,'2023-08-26 19:59:32','Debit Card','success'),(9,26,3,600,'2023-08-26 20:05:45','Cashback','success'),(10,27,3,4000,'2023-08-26 20:17:28','Credit Card','success'),(11,28,3,2000,'2023-08-26 20:34:14','Credit Card','success'),(12,29,3,6000,'2023-08-26 20:37:39','UPI','success'),(13,32,3,1600,'2023-08-27 08:05:52','Cashback','success'),(14,33,3,2000,'2023-08-27 08:31:53','Debit Card','success'),(15,34,3,1600,'2023-08-27 10:01:45','Debit Card','success'),(16,35,3,800,'2023-08-30 11:07:29','UPI','success');
/*!40000 ALTER TABLE `payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rides`
--

DROP TABLE IF EXISTS `rides`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rides` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carowner_id` int NOT NULL,
  `start_location` int NOT NULL,
  `End_location` int NOT NULL,
  `vehicle_id` int NOT NULL,
  `time_of_departure` time DEFAULT NULL,
  `time_of_arival` time DEFAULT NULL,
  `price_per_seat` int NOT NULL,
  `Available_seats` int NOT NULL,
  `status` varchar(100) DEFAULT NULL,
  `date_of_journey` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `dcityfk_idx` (`start_location`),
  KEY `tocityfk_idx` (`End_location`),
  KEY `user_id_fk5_idx` (`carowner_id`),
  KEY `vehicle_id_fk_idx` (`vehicle_id`),
  CONSTRAINT `dcityfk` FOREIGN KEY (`start_location`) REFERENCES `cities` (`id`),
  CONSTRAINT `tocityfk` FOREIGN KEY (`End_location`) REFERENCES `cities` (`id`),
  CONSTRAINT `user_id_fk5` FOREIGN KEY (`carowner_id`) REFERENCES `users` (`id`),
  CONSTRAINT `vehicle_id_fk` FOREIGN KEY (`vehicle_id`) REFERENCES `vehicles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rides`
--

LOCK TABLES `rides` WRITE;
/*!40000 ALTER TABLE `rides` DISABLE KEYS */;
INSERT INTO `rides` VALUES (1,1,1,2,1,'11:58:58','11:58:58',2000,4,'xyz','2023-05-22'),(2,1,1,2,1,'11:58:58','11:58:58',450,3,'xyz','2023-04-11'),(3,1,2,3,1,'07:30:00','16:30:00',500,0,'abc','2023-08-25'),(4,1,1,2,1,'11:00:00','11:00:00',700,5,'xyz','2023-07-02'),(7,1,1,2,1,'13:00:00','19:00:00',800,3,'pqr','2023-05-18'),(8,1,1,2,1,'13:00:00','19:00:00',800,3,'pqr','2023-05-18'),(9,1,4,2,1,'13:00:00','19:00:00',800,3,'pending','2023-05-18'),(10,1,4,2,1,'13:00:00','19:00:00',800,3,'pending','2023-05-18'),(11,1,4,2,1,'13:00:00','19:00:00',800,3,'pending','2023-05-18'),(12,2,6,5,5,'12:00:00','14:00:00',600,2,'cancelled','2023-08-29'),(13,1,5,8,1,'13:00:00','19:00:00',500,3,'pending','2023-05-18'),(14,2,8,7,5,'07:00:00','10:00:00',400,4,'pending','2023-08-31'),(15,4,2,4,6,'07:00:00','10:00:00',400,3,'pending','2023-09-01');
/*!40000 ALTER TABLE `rides` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int NOT NULL AUTO_INCREMENT,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'car_owner'),(3,'passenger');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int NOT NULL AUTO_INCREMENT,
  `state` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Maharashtra'),(2,'UttarPradesh'),(3,'MadhyaPradesh');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(100) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `gender` varchar(45) NOT NULL,
  `dob` date NOT NULL,
  `aadhar` varchar(45) NOT NULL,
  `licence` varchar(45) DEFAULT NULL,
  `phone_no` varchar(45) NOT NULL,
  `primary_email` varchar(100) NOT NULL,
  `secondary_email` varchar(100) DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk7_idx` (`user_id`),
  CONSTRAINT `user_id_fk7` FOREIGN KEY (`user_id`) REFERENCES `login` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'nikhil','nikhil','madhekar','male','1998-03-13','8529885','59542052','9422778990','a@gmail.com','s@gmail.com',1),(2,'abcd','Sanjay','Patil','M','2022-02-09','123456789123','UP32 20197894561','9422778990','madhekarnikhil@gmail.com','madhekarnikhil1@gmail.com',2),(3,'abcd','Mohsin','Naqvi','M','2023-08-16','123456789123',NULL,'8858224400','mohsi@gmail.com','mohsi@gmail.com',3),(4,'@1Aaaaaa','Mohsin','Naqvi','M','2023-08-09','555554544646','UP14 20160034761','8858224400','hello@gmail.com','hello1@gmail.com',4);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles`
--

DROP TABLE IF EXISTS `vehicles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `carowner_id` int NOT NULL,
  `model_id` int NOT NULL,
  `year` int NOT NULL,
  `color` varchar(45) NOT NULL,
  `rc_book` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_fk6_idx` (`carowner_id`),
  KEY `model_id_fk_idx` (`model_id`),
  CONSTRAINT `model_id_fk` FOREIGN KEY (`model_id`) REFERENCES `car_models` (`id`),
  CONSTRAINT `user_id_fk6` FOREIGN KEY (`carowner_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles`
--

LOCK TABLES `vehicles` WRITE;
/*!40000 ALTER TABLE `vehicles` DISABLE KEYS */;
INSERT INTO `vehicles` VALUES (1,1,1,1997,'red','86263'),(2,1,1,2023,'black','812'),(3,1,1,2021,'blue','4856'),(4,1,1,2020,'2020','789456123'),(5,2,1,2013,'blue','123456'),(6,4,1,2016,'black','54646477575');
/*!40000 ALTER TABLE `vehicles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-09-01 14:11:14
