# FullStackProjectWithPostgresql


### cd projekti-backend
### npm install 
### create the database in terminal ---> https://www.guru99.com/postgresql-create-database.html

#### CREATE TABLE projekti (
 id serial PRIMARY KEY, </br>
 first VARCHAR(100), </br>
 last VARCHAR(100),
 email text UNIQUE NOT NULL, </br>
 phone VARCHAR(100), </br>
 location VARCHAR(100), </br>
 profession VARCHAR(100), </br>
 added TIMESTAMP NOT NULL </br>
); </br>

### start nodemon server.js
### cd .. 
### cd projekti-frontend
### npm install 
### npm start
