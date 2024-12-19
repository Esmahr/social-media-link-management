const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://root:example@localhost:27017/your_database_name?authSource=admin', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
