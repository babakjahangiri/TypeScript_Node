import * as mongoose from 'mongoose';
//mongoose connection
const connection = async () => {
  try {
    const URI : string = process.env.MONGO_URI;
    const mongo = await mongoose.connect(URI
    , {
      useNewUrlParser : true,
      useUnifiedTopology : true
    });
  console.log(`MongoDB Connected: ${mongo.connection.host}`);
  } 
  catch(err) {
    console.log(`An error occurred: ${err.message}`);
    process.exit(1)
  }
};

export default connection;