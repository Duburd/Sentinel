var faker = require('faker');

exports.seed = function (knex, Promise) {
  return knex('reports')
    .insert([{
        location: '2020 East Hastings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1,
        vehicle_id: 1,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: '2040 boundary',
        description: 'Bacon ipsum dolor amet short ribs frankfurter t-bone hamburger. Ground round prosciutto ball tip sirloin, flank shank turducken spare ribs fatback kevin short ribs pork salami. Turkey ribeye meatloaf, ham hock pork loin tail shank porchetta flank pig cupim ball tip beef ribs landjaeger. Ground round corned beef turkey rump pork chop kevin capicola fatback. Capicola ham hock short ribs ribeye kielbasa spare ribs. Pig jerky hamburger boudin shank pork chop. Brisket pork loin prosciutto, biltong kielbasa porchetta capicola drumstick bacon hamburger pork chop beef shank salami shoulder.',
        user_id: 2,
        vehicle_id: 2,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: '4020 willingdon',
        description: 'Alcatra kevin andouille turducken meatloaf ribeye capicola shoulder salami frankfurter chuck ground round buffalo swine. Bresaola turkey capicola, pork chop doner tri-tip t-bone chuck. Filet mignon tail porchetta, alcatra landjaeger shoulder meatball ham hock sausage t-bone pork loin. Beef tri-tip pig frankfurter corned beef tenderloin. Pork drumstick pastrami, meatloaf bresaola pork belly turducken cupim ribeye biltong brisket boudin.',
        user_id: 3,
        vehicle_id: 3,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 4,
        vehicle_id: 4,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 5,
        vehicle_id: 5,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 6,
        vehicle_id: 6,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 7,
        vehicle_id: 7,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 8,
        vehicle_id: 8,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 9,
        vehicle_id: 9,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 10,
        vehicle_id: 10,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 11,
        vehicle_id: 11,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 12,
        vehicle_id: 12,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 13,
        vehicle_id: 13,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 14,
        vehicle_id: 14,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 15,
        vehicle_id: 15,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 16,
        vehicle_id: 16,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 17,
        vehicle_id: 17,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 6,
        vehicle_id: 18,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 5,
        vehicle_id: 19,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 7,
        vehicle_id: 20,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 8,
        vehicle_id: 21,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 20,
        vehicle_id: 22,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 22,
        vehicle_id: 23,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 23,
        vehicle_id: 24,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 24,
        vehicle_id: 25,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 25,
        vehicle_id: 26,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 12,
        vehicle_id: 27,
        created_at: faker.date.past(),
        status: 'pending'
      },
      {
        location: faker.address.streetAddress(),
        description: faker.lorem.paragraph(),
        user_id: 9,
        vehicle_id: 28,
        created_at: faker.date.past(),
        status: 'pending'
      },
      
    ]);
};