
This project is a simple backend application built using Node.js, Express, Sequelize, and MySQL. It manages authors and books with a one-to-many relationship. The project demonstrates models, relationships, CRUD operations, routes, controllers, and migrations.

Setup Instructions
1. Clone the repository
2. Run `npm install`
3. Configure MySQL in `config/config.json`
4. Create the database
5. Run migrations

How to Run 
```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
node app.js

Available APIs
Authors
POST /authors
GET /authors
GET /authors/:id
PUT /authors/:id
DELETE /authors/:id
Books
POST /books
GET /books
GET /books/:id
PUT /books/:id
DELETE /books/:id