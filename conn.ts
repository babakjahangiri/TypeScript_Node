import * as mongoose from 'mongoose';
//mongoose connection
const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI
    , {
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
  console.log(`MongoDB Connected: ${conn.connection.host}`);
  } 
  catch(err) {
    console.log(`An error occurred: ${err.message}`);
    process.exit(1)
  }
};

export default connection;