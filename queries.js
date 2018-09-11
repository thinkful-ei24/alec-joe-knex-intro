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
    //   .select('id', 'name')
    //   .from('restaurants')
    //   .where({'cuisine': 'Italian', 'address_zipcode': '10012', 'address_zipcode': '10013', 'address_zipcode': '10014'})
    //    .limit(5)
    //   .debug(true)
    //   .then(results => console.log(results));

    // knex
    //   .insert({name: 'Byte Cafe',
    //   borough: 'Brooklyn',
    //   cuisine: 'coffee',
    //   address_building_number: '123',
    //   address_street: 'Atlantic Avenue',
    //   address_zipcode: '11231'})
    //   .into('restaurants')
    //   .then(console.log);

    //   knex
    //   .insert([{
    //     name: 'Pizza World',
    //     borough: 'Bronx',
    //     cuisine: 'Italian',
    //     address_building_number: '119',
    //     address_street: 'Meatball Avenue',
    //     address_zipcode: '12363'
    //   },{
    //     name: 'Taco Planet',
    //     borough: 'Brooklyn',
    //     cuisine: 'Mexican',
    //     address_building_number: '11289',
    //     address_street: 'Third Avenue',
    //     address_zipcode: '12324'
    //   }, {
    //     name: 'Panda World',
    //     borough: 'Bronx',
    //     cuisine: 'Chinese',
    //     address_building_number: '12343',
    //     address_street: 'Second Avenue',
    //     address_zipcode: '12321'
    //   }])
    //   .into('restaurants')
    //   .returning(['id', 'name'])
    //   .then(console.log);

 // knex
 //  .from('restaurants')
 //  .update({ name: 'DJ Reynolds Pub and Restaurant' })
 //  .where({ nyc_restaurant_id: '30191841' })
 //   .then(result => console.log(result));

 // knex
//   .from('grades')
//   .del()
//   .where({id: 9})
//   .then(console.log);


knex
  .from('restaurants')
  .del()
  .where({ id: 22 })
  .then(console.log);
