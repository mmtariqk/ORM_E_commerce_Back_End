### Object Relational Mapping (ORM): E-commerce Back End

## Walkthrough Videos 
(Because of screencastify free video 5 minutes limit , I created two videos)

## Video-1-of-2: 
https://drive.google.com/file/d/1m1oBN_lcmUC09epMJPVgt-JLSknCj5DN/view?usp=sharing

## Video-2-of-2:
https://drive.google.com/file/d/1iKh8w1olmKUUV9pnIIFiNEf1H2fhnDsZ/view?usp=sharing 

## App description
This application is using mysql2, Sequalize, the dotenv package and express.js API for creating RESTFul API routes for an E-commerce Back End site. This application is the backend portion of an E-Commerce website. Express.js was used for the server and MySQL for the database along with Sequelize as the ORM to run SQL models and queries. The SQL database contains tables for products, categories, tags, and product tags. RESTful API routes are used to make requests and updates from the database which are joined through Sequelize queries.

## Acceptance Criteria:
GIVEN a working Express.js API WHEN I add my database name, MySQL username, and MySQL password to an environment variable file THEN I am able to connect to a database using Sequelize WHEN I enter schema and seed commands THEN a development database is created and is seeded with test data WHEN I enter the command to invoke the application THEN my server is started and the Sequelize models are synced to the MySQL database WHEN I open API GET routes in Insomnia Core for categories, products, or tags THEN the data for each of these routes is displayed in a formatted JSON WHEN I test the API with http verbs or methods GET, POST, PUT, and DELETE routes in Insomnia Core THEN I am able to successfully perform create, update, and delete data in my database.

## Installation
•	Both Node.js and MySQL must be installed on your computer.

npm init -y
npm install
npm install mysql2
npm install sequelize
npm install dotenv

## Instructions on how to run the app
•	Add a .env file to the root of the app with the following details
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PW='xxx'

## App Gif Demo Animations:
Demo-1: Created Schema from mysql CLI:

https://drive.google.com/file/d/1L05jBwdA4OMIOeQ5WCjPDkn7vP8h9amv/view

Demo-2: Seed Data:
  
https://drive.google.com/file/d/1Zz2X9Hcjsieqt3KVgFsD9DLFStzBH-Dj/view

Demo-3: Performed HTTP Methods i.e. POST, PUT, and DELETE routes for products: 

https://drive.google.com/file/d/1LIrKfP_vQCUwYf8FdT5CW5O838ZRqlri/view

•	Create Schema and Seed data
•	GET routes to return all categories, all products
•	GET routes to return a single category, a single product, and a single tag
•	POST, PUT, and DELETE routes for categories
•	POST, PUT, and DELETE routes for Tags
•	POST, PUT, and DELETE routes for products

## Screenshots
Created Schema from mysql Shell:
<img width="1358" alt="Screen Shot 2021-05-04 at 12 29 28 AM" src="https://user-images.githubusercontent.com/77028806/116972491-eea3ed80-ac6f-11eb-8d15-1847156e4440.png">

Seed Data:
<img width="1249" alt="run-seeds" src="https://user-images.githubusercontent.com/77028806/117103517-58cf9780-ad2f-11eb-8ddf-8fbb791d8b8d.png">

Got All Categories:

<img width="1080" alt="Screen Shot 2021-05-04 at 11 28 33 PM" src="https://user-images.githubusercontent.com/77028806/117104470-0abb9380-ad31-11eb-98e2-005b77fd8ff2.png">

Got All Products:

<img width="788" alt="Screen Shot 2021-05-04 at 11 30 06 PM" src="https://user-images.githubusercontent.com/77028806/117104498-16a75580-ad31-11eb-839e-6efc1c45ee3b.png">

Got All Tags:

<img width="788" alt="Screen Shot 2021-05-04 at 11 30 56 PM" src="https://user-images.githubusercontent.com/77028806/117104523-2161ea80-ad31-11eb-8a65-3db9c6cedbe2.png">

                              Got Single Category Route by ID:
<img width="385" alt="Screen Shot 2021-05-04 at 11 37 44 PM" src="https://user-images.githubusercontent.com/77028806/117105348-b1ecfa80-ad32-11eb-907e-04ef98bb2c23.png">

                              Got Single Product Route by ID:
<img width="384" alt="Screen Shot 2021-05-04 at 11 38 10 PM" src="https://user-images.githubusercontent.com/77028806/117105357-b7e2db80-ad32-11eb-822a-baf8e0027083.png">

                              Got Single Tag Route by ID:
<img width="580" alt="Screen Shot 2021-05-04 at 11 38 36 PM" src="https://user-images.githubusercontent.com/77028806/117105382-c0d3ad00-ad32-11eb-84c9-7fc24338e162.png">

