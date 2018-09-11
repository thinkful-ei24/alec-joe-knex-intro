'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select
// knex
//   .select()
//   .from('restaurants')
//   .limit(2)
//   .debug(true)
//   .then(results => console.log(results));


  // knex
  //   .select()
  //   .from('restaurants')
  //   .where({'cuisine': 'Italian'})
  //   .debug(true)
  //   .then(results => console.log(results));

    // knex
    //   .select('id', 'name')
    //   .from('restaurants')
    //   .where({'cuisine': 'Italian'})
    //   .limit(10)
    //   .debug(true)
    //   .then(results => console.log(results));

    // knex
    //   .count()
    //   .from('restaurants')
    //   .where({'cuisine': 'Thai'})
    //   .debug(true)
    //   .then(results => console.log(results));

    // knex
    //   .count()
    //   .from('restaurants')
    //   .debug(true)
    //   .then(results => console.log(results));

    // knex
    //   .count()
    //   .from('restaurants')
    //   .where({'cuisine': 'Thai'})
    //   .where({'address_zipcode': '11372'})
    //   .debug(true)
    //   .then(results => console.log(results));

    // knex
    //   .count()
    //   .from('restaurants')
    //   .where({'cuisine': 'Italian', 'address_zipcode': '10012', 'address_zipcode': '10013', 'address_zipcode': '10014'})
    //   .debug(true)
    //   .then(results => console.log(results));


    
