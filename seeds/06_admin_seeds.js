var faker = require('faker');

exports.seed = function (knex, Promise) {
    return knex('admins')
        .insert([{
                username: 'ab218',
                password: 'abc123',
                phone_number: '9028611234',
                email: 'ab218@gmail.com'
            },
            {
                username: 'matti',
                password: 'abc123',
                phone_number: '9028614321',
                email: 'matti@gmail.com'
            },
        ]);
    }