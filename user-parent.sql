!-- Init table
create table User(id int not null primary key auto_increment, username varchar(255) not null, parent int default null);

!-- insert rows
insert into user(username, parent) values('Ali', 2);
insert into user(username, parent) values('Budi', 0);
insert into user(username, parent) values('Cecep', 1);


!-- Query
select u1.id as ID, u1.username as UserName, u2.username as Parent from user u1 left join user u2 on u1.parent = u2.id;