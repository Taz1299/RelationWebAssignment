
This project is a backend application built using Express and Sequelize. It manages Authors and Books with a one-to-many relationship.
1. Clone the repository
2. Run npm install
3. Configure database in config/config.json
4. Run:
   npx sequelize-cli db:create
   npx sequelize-cli db:migrate
5. Start server:
   node app.js