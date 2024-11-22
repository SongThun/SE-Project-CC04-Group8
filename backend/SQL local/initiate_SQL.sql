DROP DATABASE IF EXISTS printingService;
CREATE DATABASE printingService;
USE printingService;
CREATE TABLE `user` (
    user_id VARCHAR(255) PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_phone VARCHAR(30)
);