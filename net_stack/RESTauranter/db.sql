-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema restaurantsdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema restaurantsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `restaurantsdb` DEFAULT CHARACTER SET utf8 ;
USE `restaurantsdb` ;

-- -----------------------------------------------------
-- Table `restaurantsdb`.`reviews`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `restaurantsdb`.`reviews` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `reviewerName` VARCHAR(45) NULL DEFAULT NULL,
  `restaurantName` VARCHAR(45) NULL DEFAULT NULL,
  `review` TEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `stars` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
