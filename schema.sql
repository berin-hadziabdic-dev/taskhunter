
CREATE DATABASE
IF NOT EXISTS taskhunter;
USE taskhunter;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS projects;
CREATE TABLE users
(
    username VARCHAR(20) PRIMARY KEY,
    password VARCHAR(15),
    email VARCHAR(50)
);

CREATE TABLE projects
(
    id INT,
    projectName VARCHAR
    (50),
    projectDescription VARCHAR
    (1500),
);


INSERT INTO users
VALUES
    ("Admin12", "12345", "admin12@email.com")
;