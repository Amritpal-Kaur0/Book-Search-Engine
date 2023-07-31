const db = require('../config/connection');
const { User } = require('../models');
const userSeeds = require('./userSeeds.json');


db.once('open', async () => {
  try {
   
    await User.deleteMany({});

    await User.insertMany(userSeeds);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
     
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
       
    //   );
    // }
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log('all done!');
  process.exit(0);
});
