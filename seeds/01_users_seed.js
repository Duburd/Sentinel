var faker = require('faker');



exports.seed = function (knex, Promise) {
    return knex('users')
        .insert([{
                first_name: 'Aaron',
                last_name: 'Black',
                phone_number: '19028612345',
                policy_number: '12345',
                license_number: '333333'
            },
            {
                first_name: 'Matt',
                last_name: 'Greff',
                phone_number: '19022563456',
                policy_number: '12345',
                license_number: '444444'
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: '12345',
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },
            {
                first_name: faker.name.firstName(),
                last_name: faker.name.lastName(),
                phone_number: faker.phone.phoneNumber(),
                policy_number: faker.random.number(),
                uri: faker.image.cats(),
                license_number: faker.random.number()
            },

        ]);
}