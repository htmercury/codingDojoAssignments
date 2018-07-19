-- MySQL Script generated by MySQL Workbench
-- Wed Jul 11 14:48:00 2018
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema usersdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema usersdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `usersdb` DEFAULT CHARACTER SET utf8 ;
USE `usersdb` ;

-- -----------------------------------------------------
-- Table `usersdb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usersdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email_address` VARCHAR(512) NULL,
  `first_name` VARCHAR(128) NULL,
  `last_name` VARCHAR(256) NULL,
  `password` VARCHAR(512) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
