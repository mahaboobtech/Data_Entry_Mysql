# Data_Entry_Mysql
A Basic website used to take details and store in mysql data base 

the main purpose of this to understand the client and server communication by using nodejs 

and i have add validation code 

before get started you need mysql 
install it from  official website 

make sure you have user and password which have all required privileges 

by default it would be root and password 

note if you got client side connection error make sure this command to rectify 

>. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';

next modify the user and password in the app.js file 
and also modify the query which is as require for your table and values 


after the data base is setted 

now install nodejs from official website 

after installation of nodejs software 

>. npm install -g yarn

then after yarn installed next you need to install packages 

>. yarn

thats is everything is ready 

now 
>. npm src/app.js

<img width="298" alt="image" src="https://github.com/mahaboobtech/Data_Entry_Mysql/assets/52873899/11a8bcfd-5c60-4bcc-9d79-a1345bf3d440">


open the link your browser 




reference : 
1. https://stackoverflow.com/questions/50093144/mysql-8-0-client-does-not-support-authentication-protocol-requested-by-server
