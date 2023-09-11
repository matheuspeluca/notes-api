import Knex from 'knex';
import config from '../../knexfile';

const environment = process.env.ENVIRONMENT || 'development';
const knex = Knex(config[environment]);
export default knex;
