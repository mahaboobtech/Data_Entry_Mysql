# Data_Entry_Mysql
## A Basic website used to take details and store in mysql data base 

the main purpose of this to understand the client and server communication by using nodejs 

and i have add validation code 

### part 1
before get started you need mysql 
install it from  official website 

> make sure you have user and password which have all required privileges of MySql

by default it would be root and password 

but i have created new user 

by opening the cmd prompt 

login to my sql 

```
mysql -u root -p 
```
enter the password 

next create user 

```
CREATE USER 'tempuser'@'localhost' IDENTIFIED BY 'password';
```

next grant the persmission to user or grant all by 
```
GRANT ALL PRIVILEGES ON database_name.* TO 'tempuser'@'localhost';
```
or
```
GRANT ALL PRIVILEGES ON *.* TO 'tolkien'@'%';
```
now create the table what you want here i am just giving you model 
```
CREATE TABLE tabletemp(
    fullname VARCHAR(255),
    email VARCHAR(255),
    age INT,
    dob DATE
    )
```

thats it  your done in creating mysql database 

next modify the user and password in the app.js file 
and also modify the query which is as require for your table and values 

### part 2
now install nodejs from official website 

after installation of nodejs software 

``` 
npm install -g yarn
```

then after yarn installed next you need to install packages 

``` 
yarn
```

now everything is ready 

now 

``` 
npm src/app.js
```

<img width="298" alt="image" src="https://github.com/mahaboobtech/Data_Entry_Mysql/assets/52873899/11a8bcfd-5c60-4bcc-9d79-a1345bf3d440">


open the link your browser 


#### note if you got client side connection error in the log of the server make sure this command to rectify 

```
ALTER USER 'tempuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'; 
```


reference : 
1. https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
