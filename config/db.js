const mongoose = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect("mongodb+srv://Badala343:Badala343@cluster-1-cqcuc.mongodb.net/storyBook?retryWrites=true&w=majority" , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (err) {
      console.error(err)
      process.exit(1)
    }
  }
  
  module.exports = connectDB