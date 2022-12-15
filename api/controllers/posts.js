const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");
const User = require("../models/User");
const Post = require("../models/Post");

//CREATE POST
const createPost = asyncHandler(async (req, res,next) => {
   const newPost = new Post(req.body);

   const savedPost = await newPost.save();
   res.status(200).json(savedPost);
});

//UPDATE POST
const updatePost = asyncHandler(async (req, res,next) => {
   const post = await Post.findById(req.params.id);

   if (post) {
      if (post.username === req.body.username) {
         const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            {
               $set: req.body,
            },
            { new: true }
         );
         res.status(200).json(updatedPost);
      } else {
         next(new ErrorResponse("You can only update your post!", 401));
         //  res.status(401).json("You can only update your post!");
      }
   }
});

//DELETE POST
const deletePost = asyncHandler(async (req, res,next) => {
   const post = await Post.findById(req.params.id);
   if (post.username === req.body.username) {
      await post.delete();
      res.status(200).json("Post has been deleted...");
   } else {
      next(new ErrorResponse("You can only delete your post!", 401));
   }
});

//GET POST
const getPost = asyncHandler(async (req, res,next) => {
   const post = await Post.findById(req.params.id);
   res.status(200).json(post);
});

//GET ALL POSTS
const getAll = asyncHandler(async (req, res,next) => {
   const username = req.query.user;
   const catName = req.query.cat;
   try {
      let posts;
      if (username) {
         posts = await Post.find({ username });
      } else if (catName) {
         posts = await Post.find({
            categories: {
               $in: [catName],
            },
         });
      } else {
         posts = await Post.find();
      }
      res.status(200).json(posts);
   } catch (err) {
      res.status(500).json(err);
   }
});

module.exports = {
   createPost,
   updatePost,
   deletePost,
   getPost,
   getAll,
};
