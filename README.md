# FullStackProjectWithPostgresql


cd projekti-backend
npm install 
create the database in terminal ---> https://www.guru99.com/postgresql-create-database.html
CREATE TABLE projekti (
 id serial PRIMARY KEY,
 first VARCHAR(100),
 last VARCHAR(100),
 email text UNIQUE NOT NULL,
 phone VARCHAR(100),
 location VARCHAR(100),
 profession VARCHAR(100),
 added TIMESTAMP NOT NULL
);
start nodemon server.js
cd .. 
cd projekti-frontend
npm install 
npm start
