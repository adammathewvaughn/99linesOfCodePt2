create database SingingFriendsDB;

use SingingFriendsDB;

create TABLE FriendsTable (
    id varchar(255) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    _created datetime default CURRENT_TIMESTAMP,
);

