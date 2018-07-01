exports.seed = function (knex, Promise) {
return knex('users')
  .insert([
    {
        first_name: 'Aaron',
        last_name: 'b',
        phone_number: '1111111',
        policy_number: '12345',
        license_number: '333333'
    },
    {
        first_name: 'Matt',
        last_name: 'g',
        phone_number: '2222222',
        policy_number: '23456',
        license_number: '444444'
    },
    {
        first_name: 'Bob',
        last_name: 'b',
        phone_number: '3333333',
        policy_number: '34567',
        license_number: '555555'
    },
  ]);
}