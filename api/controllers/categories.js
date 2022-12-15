const asyncHandler = require("../middleware/async");
const Category = require("../models/Category");

const createCategory = asyncHandler(async (req, res,next) => {
   const newCat = new Category(req.body);

   const savedCat = await newCat.save();
   res.status(200).json(savedCat);
});

const getCategory = asyncHandler(async (req, res,next) => {
   const cats = await Category.find();
   res.status(200).json(cats);
});

module.exports = {
   createCategory,
   getCategory,
};
