const jwt = require("jsonwebtoken");
const User = require("../models/userModels");
const bcrypt = require("bcryptjs");

//@desc Register New User
//@POST api/user
//@access Public

const registerUser = async (req, res) => {
  const { name, email, phone, password } = req.body;
  //Exits User
  const existUser = await User.findOne({ email });
  if (existUser) {
    res.status(401).json({ msg: "Exist User" });
    throw new Error("Exits User");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  try {
    const user = await User.create({
      name,
      email,
      phone,
      password: hash,
    });

    if (user) {
      res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(401).send(error);
  }
};

//@desc Login user
//@POST api/user
//@access Public

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      });
    } else {
      res.status(404).send("NO User");
      throw new Error("No User Found");
    }
  } catch (error) {}
};

//Generate Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

module.exports = {
  registerUser,
  loginUser,
};
