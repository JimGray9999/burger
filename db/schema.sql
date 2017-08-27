-- Create the DB (only works on local connections)
-- will use the JAWSDB when loaded into Heroku
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table "burgers" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  devoured boolean DEFAULT false,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY(id)
);