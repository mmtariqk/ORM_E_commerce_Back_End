// Here are the require npm packages

const express = require('express');
const routes = require('./routes');

// We need to import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// First of all sync sequelize models to the database, then turn on the server

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
});