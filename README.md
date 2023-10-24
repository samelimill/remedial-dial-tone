<h1 align="center" id="title">E-Commerce Back End</h1>
<div align="center">

![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/t/samelimill/remedial-dial-tone)
![Express badge](https://img.shields.io/badge/express-yellow?logo=express)
![MySQL badge](https://img.shields.io/badge/mysql-orange?logo=mysql)
![Sequelize badge](https://img.shields.io/badge/sequelize-blue?logo=sequelize)

It's a Back End. For E-Commerce. 
</div>

## Objectives

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
In order to use this back end, the user will first need to create an `.env` file, and populate it with the following along with your information:
```
DB_NAME='ecommerce_db'
DB_USER='YOUR USERNAME HERE'
DB_PASSWORD='YOUR PASSWORD HERE'
```
After this, open the MySQL shell and create the schema for the database by running:
```
SOURCE db/schema.sql;
```
One can then seed the database by running: 
```
node seeds
```

## Usage
To see the back end in action, we can use Insomnia or another API Client to make ```PUSH```, ```GET```, ```PUT```, or ```DELETE``` requests for ```products```, ```categories```, and ```tags```. 

## Demo
A video walkthrough for the back end can be found [here](https://drive.google.com/file/d/1MZSSldCzpm5DKSywKXFIW0MpVUOpP5Ur/view).
