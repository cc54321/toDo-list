//import mongoose library
//const mongoose = require("mongoose");
//const { v4: uuidv4, stringify } = require("uuid");

// Import the mongoose module
const mongoose = require("mongoose");


// Set `strictQuery: false` to globally opt into filtering by properties that aren't in the schema
// Included because it removes preparatory warnings for Mongoose 7.
// See: https://mongoosejs.com/docs/migrating_to_6.html#strictquery-is-removed-and-replaced-by-strict
mongoose.set('strictQuery', false);

// Define the database URL to connect to.
const mongoDB = process.env.ATLAS_URI;

//connecting to mongoose
async function mongooseConnect() {
  try {
    await mongoose.connect(mongoDB, {dbName: process.env.MONGO_DATABASE}); 
  } catch (error) {
    throw error;
  }
}

module.exports = {
    mongooseConnect
};