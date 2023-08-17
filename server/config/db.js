import mongoose from "mongoose";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Successfully Conneted To Mongodb Databse`);
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`);
  }
};

export default connectDB;
