import type {Knex} from 'knex';

require('dotenv').config({path: './.env'});

const config: {[key: string]: Knex.Config} = {
  development: {
    client: 'postgres',
    connection: {
      host: process.env.POSTGRES_HOST,
      port: 5432,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      ssl: { rejectUnauthorized: false }
    },
    seeds: {
      directory: './database/seeds',
    },
    migrations: {
      directory: './database/migrations',
    }
  },
};

export default config;
