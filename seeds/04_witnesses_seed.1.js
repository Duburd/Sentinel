var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('witnesses')
    .insert([{
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      email: faker.internet.email(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 4
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 5
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 6
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 7
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 8
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 9
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 10
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 11
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 12
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 13
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 14
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 15
    },
    {
      email: faker.internet.email(),
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
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 18
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 19
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 20
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 21
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 22
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 23
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 24
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 25
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 26
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 1
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 2
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 3
    },
    {
      email: faker.internet.email(),
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      phone_number: faker.phone.phoneNumber(),
      testimony: faker.lorem.paragraph(),
      report_id: 4
    },
  ]);
};