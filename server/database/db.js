import mongoose from "mongoose";

// eupheus:2M2gztvyvVRtpZwT

const Connection = async (username, password) => {
  //    console.log(username,password);
  const URL = `mongodb+srv://${username}:${password}@whatsapp.aovlbxd.mongodb.net/?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database Connected Succesfully");
  } catch (err) {
    console.log(`error while connecting , ${err.message}`);
  }
};

export default Connection;
