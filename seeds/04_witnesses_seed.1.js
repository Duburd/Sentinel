var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('witnesses')
    .insert([{
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 4
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 5
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 6
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 7
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 8
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 9
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 10
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 11
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 12
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 13
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 14
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 15
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 16
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 17
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 18
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 19
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 20
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 21
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 22
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 23
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 24
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 25
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 26
    },
    {
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
    },
   
  ]);
};