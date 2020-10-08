import 'dotenv/config';
import { resolve } from 'path';

module.exports = {
  client: 'pg',
  connection: {
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
  },
  migrations: {
    tableName: 'migrations',
    directory: resolve(
      __dirname,
      'src',
      'shared',
      'infra',
      'knex',
      'migrations',
    ),
  },
  seeds: {
    tableName: 'seeders',
    directory: resolve(__dirname, 'src', 'shared', 'infra', 'knex', 'seeds'),
  },
};
