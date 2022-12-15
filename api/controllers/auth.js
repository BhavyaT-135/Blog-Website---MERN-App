const asyncHandler = require("../middleware/async");

const User = require("../models/User");
const bcrypt = require("bcrypt");

const register = asyncHandler(async (req, res,next) => {
   const salt = await bcrypt.genSalt(10);
   const hashedPass = await bcrypt.hash(req.body.password, salt);
   const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
   });
   const user = await newUser.save();
   res.status(200).json(user);
});

const login = asyncHandler(async (req, res,next) => {
   const user = await User.findOne({
      username: req.body.username,
   });
   if (!user) {
      return res.status(400).json("Wrong credentials!");
   }

   const validated = await bcrypt.compare(req.body.password, user.password);
   if (!validated) {
      return res.status(400).json("Wrong credentials!");
   }

   const { password, ...others } = user._doc;
   return res.status(200).json(others);
});

module.exports = {
   register,
   login,
};
