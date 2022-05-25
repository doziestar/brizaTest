import config from 'config';
import { Sequelize } from 'sequelize';

const env = process.env.NODE_ENV || 'production';
console.log(`ENV: ${env}`);

let sequelize: Sequelize;

if (env === 'production') {
  // sequelize = new Sequelize(config.get('database.name'), config.get('database.user'), config.get('database.password'), {
  //   dialect: 'postgres',
  //   host: config.get('database.host'),
  //   dialectOptions: {
  //     ssl: true,
  //   },
  // });
  sequelize = new Sequelize(config.get('database.url'), {
    dialect: 'postgres',
    dialectOptions: {
      ssl: true,
      rejectUnauthorized: false,
    },
  });
} else {
  console.log(config.get('db'));
  sequelize = new Sequelize(config.get('db'), { dialect: 'postgres' });
}

export default sequelize;
