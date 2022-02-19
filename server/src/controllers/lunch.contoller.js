const User = require("../models/userModels");
const Lunch = require("../models/lunchModels");

const lunchOrder = async (req, res) => {
  console.log(req.body);
  if (!req.body) {
    res.status(400).send("Enter all field");
    throw new Error("Empty Body");
  }

  const lunch = await Lunch.create({
    text: req.body.menuOrdered,
    user: req.User.id,
  });
  if (lunch) res.send(lunch);
};

const getOrder = (req, res) => {
  res.send("ikiu");
};

module.exports = {
  lunchOrder,
  getOrder,
};
