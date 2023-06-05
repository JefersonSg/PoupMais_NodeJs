const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('poupmais', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

// const sequelize = new Sequelize('poupmais', 'root', 'SenhaServer132*', {
//   host: 'localhost',
//   dialect: 'mysql',
// });

try {
  sequelize.authenticate();
  console.log('Conectado ao Sequelize');
} catch (error) {
  console.log(error);
}

module.exports = sequelize;
