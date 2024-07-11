const mongoose = require("mongoose");

async function connectDB() {
try { 
    await mongoose.connect("mongodb+srv://tejasasawale2607:tejas@cluster0.vugxmfz.mongodb.net/");
    console.log('connected to mongoDB');
    } catch(error){
        console.log('error in connection',error);
    }
}
module.exports = {connectDB};