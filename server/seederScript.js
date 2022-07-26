require("dotenv").config();

const menusData = require("./data/data");
const connectDB = require("./Database/db");
const Menu = require("./models/Menu");

connectDB();

const importData = async () => {
  try {
    await Menu.deleteMany({});
    await Menu.insertMany(menusData);
    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.log(error);

    console.error("Error with data import");
    process.exit(1);
  }
};

importData();
