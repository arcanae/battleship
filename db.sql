DROP DATABASE IF EXISTS `battleship`;
CREATE DATABASE `battleship`;

USE `battleship`;

CREATE TABLE `user` (
    `id` INT PRIMARY KEY AUTO_INCREMENT, 
    `username` VARCHAR(16), 
    `pass` VARCHAR(32), 
    `elo` INT(5)
);

CREATE TABLE game()