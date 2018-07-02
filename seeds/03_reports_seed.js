exports.seed = function (knex, Promise) {
  return knex('reports')
    .insert([{
        location: '2020 East Hastings',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        user_id: 1,
        vehicle_id: 1
      },
      {
        location: '2040 boundary',
        description: 'Bacon ipsum dolor amet short ribs frankfurter t-bone hamburger. Ground round prosciutto ball tip sirloin, flank shank turducken spare ribs fatback kevin short ribs pork salami. Turkey ribeye meatloaf, ham hock pork loin tail shank porchetta flank pig cupim ball tip beef ribs landjaeger. Ground round corned beef turkey rump pork chop kevin capicola fatback. Capicola ham hock short ribs ribeye kielbasa spare ribs. Pig jerky hamburger boudin shank pork chop. Brisket pork loin prosciutto, biltong kielbasa porchetta capicola drumstick bacon hamburger pork chop beef shank salami shoulder.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '4020 willingdon',
        description: 'Alcatra kevin andouille turducken meatloaf ribeye capicola shoulder salami frankfurter chuck ground round buffalo swine. Bresaola turkey capicola, pork chop doner tri-tip t-bone chuck. Filet mignon tail porchetta, alcatra landjaeger shoulder meatball ham hock sausage t-bone pork loin. Beef tri-tip pig frankfurter corned beef tenderloin. Pork drumstick pastrami, meatloaf bresaola pork belly turducken cupim ribeye biltong brisket boudin.',
        user_id: 3,
        vehicle_id: 3
      },
      {
        location: '3420 Burrard',
        description: 'Shankle fatback jowl, buffalo rump pork frankfurter pastrami short ribs t-bone brisket. Jerky pancetta pork belly ball tip alcatra, kielbasa swine. Rump picanha tenderloin, pancetta capicola burgdoggen kielbasa. Boudin flank hamburger tail buffalo chuck sausage venison biltong pancetta cupim meatball shankle. Meatball salami drumstick, beef porchetta t-bone kevin shankle strip steak.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '123 Ontario',
        description: 'Pork loin leberkas landjaeger, pork belly strip steak turducken rump picanha ball tip fatback ham pork chop tongue brisket chuck. Kevin porchetta pork turkey chuck short loin bresaola boudin beef ribs. Spare ribs sirloin venison, brisket turkey shankle burgdoggen chuck salami porchetta fatback shoulder rump pork loin. Tail hamburger short ribs tenderloin doner ground round burgdoggen flank capicola filet mignon cupim. Meatloaf ground round ham hock sausage, meatball ribeye boudin burgdoggen leberkas landjaeger t-bone buffalo alcatra. Tenderloin beef ribs capicola tri-tip kielbasa meatball salami pancetta.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '3948 Cambie',
        description: 'Salami buffalo corned beef shoulder beef ribs porchetta. Rump boudin ham, swine short loin biltong ground round pork chop strip steak brisket cow tenderloin pork. Biltong ham landjaeger, sausage pork loin boudin pig alcatra bacon swine turkey tail meatloaf. Meatball cow venison ground round tongue corned beef pork. Corned beef swine venison leberkas, sausage rump meatloaf short loin short ribs kielbasa flank tail brisket fatback. Rump chuck boudin chicken venison strip steak pork salami pork chop kielbasa beef ribs. Jowl beef salami leberkas.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '200 Robson',
        description: 'Sirloin sausage chuck tenderloin rump capicola, salami drumstick tongue chicken. Leberkas jerky chuck, andouille sirloin flank tail bacon. Tail jowl pig rump, pork loin picanha prosciutto pork chop meatloaf strip steak. Biltong short ribs strip steak, tri-tip bacon t-bone prosciutto tail swine landjaeger tongue pancetta salami.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '2934 Waverley',
        description: 'Chicken brisket pastrami swine tri-tip sausage beef ribeye short ribs. Andouille shankle shoulder bresaola. Doner strip steak pork belly pork loin tail swine fatback. Venison pork chop strip steak, pancetta meatloaf drumstick ribeye chuck. Beef burgdoggen cow, kielbasa drumstick t-bone meatloaf brisket salami pork belly jerky. Andouille jowl buffalo, hamburger prosciutto tenderloin brisket picanha salami rump strip steak ham fatback sausage ball tip.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '2035 Dartmouth',
        description: 'Leberkas chuck buffalo picanha turducken bresaola capicola turkey pork porchetta ball tip salami bacon ham hock tenderloin. Tri-tip pork bacon shoulder turducken corned beef chuck turkey. Swine sirloin kielbasa tongue brisket ribeye. Meatball bresaola ground round sausage meatloaf turkey. Turducken boudin pork chop rump ham strip steak beef ribs chicken.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '9559 Bedford',
        description: 'Jowl bresaola leberkas, kevin pastrami alcatra boudin jerky doner turducken turkey chicken beef ribs salami cow. Capicola ground round shank, alcatra shoulder tenderloin beef bacon short loin strip steak burgdoggen corned beef frankfurter landjaeger beef ribs. Strip steak tri-tip porchetta, andouille rump ham kielbasa shankle brisket biltong beef ribs kevin frankfurter sirloin buffalo. Sausage ground round tongue ribeye.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '2903 Manitoba',
        description: 'Ham short ribs turkey turducken frankfurter meatball flank cow sirloin t-bone jerky tenderloin. Hamburger rump chuck turducken alcatra sirloin pork beef pig kevin shank. Ham hock venison boudin bacon tongue, rump turducken porchetta jerky buffalo cow burgdoggen pastrami. Doner tongue sausage kevin fatback meatball shoulder, biltong jowl ham meatloaf alcatra.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '200 Main',
        description: 'Spicy jalapeno bacon ipsum dolor amet venison nulla doner tri-tip labore filet mignon pork bresaola beef ribs aliqua. Shoulder aliquip biltong beef turducken shank burgdoggen ex anim non dolore dolore velit. Ut spare ribs reprehenderit chuck. Alcatra drumstick sed boudin occaecat irure flank burgdoggen ea t-bone sausage biltong buffalo. In ut pig qui elit dolore mollit meatloaf swine biltong boudin laboris sed. Boudin picanha shoulder, laboris shank deserunt sirloin filet mignon sed in capicola chuck minim bacon do. Officia anim bresaola, meatball in ham hock beef ribs aliqua ham sunt shankle tenderloin veniam sirloin prosciutto.',
        user_id: 2,
        vehicle_id: 2
      },
      {
        location: '500 Canada',
        description: 'Corned beef turkey elit do, prosciutto sirloin ea consequat short ribs in. Pastrami deserunt capicola, enim est ad esse kielbasa kevin t-bone leberkas. Commodo do pariatur picanha drumstick pancetta. Ut rump drumstick jerky deserunt, nulla picanha veniam in officia doner beef occaecat velit bacon.',
        user_id: 2,
        vehicle_id: 2
      },
    ]);
};