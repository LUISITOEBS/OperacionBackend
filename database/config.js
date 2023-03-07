const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const dbConnection = async() =>{
   try {
      await mongoose.connect( 
          process.env.DB_CNN,
      );
      console.log('DB ONLINE');
   } catch (error) {
      console.log(error);
      throw new Error('fail to init database');
   }
}

module.exports = {
   dbConnection
} 