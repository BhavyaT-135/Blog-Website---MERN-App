const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const { default: mongoose } = require("mongoose");

//UPDATE
const updateUser = asyncHandler(async (req, res,next) => {
   if (req.body.userId === req.params.id) {
      if (req.body.password) {
         const salt = await bcrypt.genSalt(10);
         req.body.password = await bcrypt.hash(req.body.password, salt);
      }

      const updatedUser = await User.findByIdAndUpdate(
         req.params.id,
         {
            $set: req.body,
         },
         { new: true }
      );
      res.status(200).json(updatedUser);
   } else {
      next(new ErrorResponse("You can only update your account!", 401));
      //   res.status(401).json("You can only update your account!");
   }
});

// //DELETE
const deleteUser = asyncHandler(async (req, res,next) => {
   if (req.body.userId === req.params.id) {
      const user = await User.findById(req.params.id);
      if (user) {
         try {
            await Post.deleteMany({ username: user.username });
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json("User has been deleted...");
         } catch (err) {
            res.status(500).json(err);
         }
      } else {
         next(new ErrorResponse("User not found!", 404));
      }
   } else {
      next(new ErrorResponse("You can only delete your account!", 401));
      //   res.status(401).json("You can only delete your account!");
   }
});

//GET

const getUser = asyncHandler(async (req, res,next) => {
   const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
   if (isValid) {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
   } else {
      next(new ErrorResponse("Invalid User Id", 404));
   }
});

module.exports = {
   updateUser,
   deleteUser,
   getUser,
};
