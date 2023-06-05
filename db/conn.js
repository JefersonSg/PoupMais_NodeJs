const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('poupmais', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

try {
  sequelize.authenticate();
  console.log('Conectado ao Sequelize');
} catch (error) {
  console.log(error);
}
