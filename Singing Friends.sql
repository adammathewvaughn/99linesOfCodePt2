create database SingingFriendsDB;

use SingingFriendsDB;

create TABLE FriendsTable (
    id varchar(255) NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    _created datetime default CURRENT_TIMESTAMP,
);

create user 'Friend'@'localhost'
identified with mysql_natiy 'guest';

GRANT ALL PRIVILEGES ON SingingFriendsDB TO 'Friend'@'localhost';

INSERT INTO FriendsTable (id, name, _created username) VALUES 
('Friend1',"Tom",  "1@test.com");
('Friend2', "Bill", "2@test.com");
('Friend3', "Harry", "3@test.com");
select * from users;