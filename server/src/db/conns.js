const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_LOCAL_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`DB connected successFully`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = dbConnect;
