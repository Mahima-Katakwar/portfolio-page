const express = require("express");
const {
  registerUser,
  authUser,
  userDataList,
  deleteNote,
} = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/list").get(userDataList);
router.route("/delete").post(deleteNote);
module.exports = router;
