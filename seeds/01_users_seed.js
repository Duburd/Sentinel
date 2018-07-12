var faker = require('faker');



exports.seed = function (knex, Promise) {
    return knex('users')
        .insert([{
                first_name: 'Aaron',
                last_name: 'Black',
                phone_number: '1-(902)-861-1234',
                password: 'Abcd1234',
                policy_number: '12345',
                license_number: faker.random.number()
            },
            {
                first_name: 'Matt',
                last_name: 'Greff',
                phone_number: '1-(902)-123-4567',
                password: 'Abcd1234',
                policy_number: '12345',
                email: 'matt@gmail.com',
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                password: faker.random.number(),
                policy_number: '12345',
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number(),
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                password: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },

        ]);
}