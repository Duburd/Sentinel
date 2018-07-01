exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reports', 'users', 'vehicles')
    .del()
    .then(function () {
      return knex('users')
        .insert([{
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
        ])
        .then(function () {
          // Inserts seed entries
              return knex('vehicles')
              .insert([{
                  user_id: 1,
                  plate:   'AAA000',
                  make:    'BMW',
                  model:   'M3',
                  year:    2015,
                  color:   'white',
                  damage:  'passenger-side door'
                },
                {
                  user_id: 2,
                  plate:   'BBB000',
                  make:    'Porsche',
                  model:   '911',
                  year:    2018,
                  color:   'yellow',
                  damage:  'front-bumper'
                },
                {
                  user_id: 2,
                  plate:   'CCC000',
                  make:    'Nissan',
                  model:   'Skyline',
                  year:    1990,
                  color:   'orange',
                  damage:  'totalled'
                },
            ]).then(()=> {
                return knex('reports')
                .insert([{
                    location: '2020 East Hastings',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    user_id: 1,
                    vehicle_id: 1
                  },
                  {
                    location: '2040 boundary',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    user_id: 2,
                    vehicle_id: 2
                  },
                  {
                    location: '4020 willingdon',
                    description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
                    user_id: 3,
                    vehicle_id: 3
                  }
                ]);
            })
        });
    });
};