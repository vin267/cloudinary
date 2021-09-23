const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect('mongodb://localhost:27017/multi-file-uploader', {
    useNewUrlParser: true,
    useUnifiedTopology: true        
  })
  .then(()=>console.log('connected to db test'))
  .catch((error)=>console.log('connection error',error));  
};

module.exports = connectDB;