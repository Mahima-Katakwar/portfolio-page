const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const UserData = require("../models/userData");
const { generateToken } = require("../utils/generateToken");
//const { notes } = require("../data/notes");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.body;

  const deletednote = await UserData.findByIdAndDelete(id);

  if (deletednote) {
    return res.json({ user: deletednote });
  }
});

const userDataAddition = asyncHandler(async (req, res) => {
  const notes = {
    title: "DevOps Engineer",
    content:
      "DevOps engineer with significant experience. Demonstrated experience working with AWS(Cloud) | Terraform | Jenkins | Docker | Kubernetes. Passionate to learn new technologies. MsAzure, Nosql sql",
    category: "Job",
  };
  const userList = await UserData.find();
  if (userList.length >= 4) {
    return "";
  } else {
    const user = await UserData.create(notes);
  }
});

const userDataList = asyncHandler(async (req, res) => {
  const mynotes = await UserData.find();
  console.log(mynotes);
  res.json({ notes: mynotes });
});

const authUser = asyncHandler(async (req, res) => {
  console.log(generateToken, "in the token");
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});

module.exports = {
  registerUser,
  authUser,
  userDataAddition,
  userDataList,
  deleteNote,
};
