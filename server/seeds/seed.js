const connection = require("../config/connection");
const { Shoes } = require("../models/index");

const ShoeData = require("./ShoeData");

const seedDatabase = async () => {
  try {
    connection.once('open', async () => {
        console.log("Connected! Trying to seed Data!");

        await connection.dropCollection("Shoes");
    
        await Shoes.insertMany(ShoeData);
    
        console.info("Seeding complete! 🌱");
        process.exit(0);
    });
  } catch (error) {
    console.error('Error seeding database:', error)
    process.exit(1);
  }
};

seedDatabase();