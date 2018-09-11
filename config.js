'use strict';

exports.PORT = process.env.PORT || 8080;

const DATABASE_URL = process.env.DATABASE_URL || 'postgresql://localhost/restaurants-app';
/*
postgres://wkmbrfrw:6cO8HrEZ3bBmTcfPDxvJNCv5rU11pV7-@baasu.db.elephantsql.com:5432/wkmbrfrw
*/
exports.DATABASE = {
  client: 'pg',
  connection: DATABASE_URL,
  pool: { min: 0, max: 3 }, // Fix issue w/ ElephantSQL
  debug: true               // Outputs knex debugging information
};
