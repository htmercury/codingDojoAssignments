-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema dojosdb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema dojosdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojosdb` DEFAULT CHARACTER SET utf8 ;
USE `dojosdb` ;

-- -----------------------------------------------------
-- Table `dojosdb`.`dojos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojosdb`.`dojos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `location` VARCHAR(45) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `dojosdb`.`ninjas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojosdb`.`ninjas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `level` INT NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `dojo_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ninjas_dojos_idx` (`dojo_id` ASC),
  CONSTRAINT `fk_ninjas_dojos`
    FOREIGN KEY (`dojo_id`)
    REFERENCES `dojosdb`.`dojos` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
