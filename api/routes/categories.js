const { createCategory, getCategory } = require("../controllers/categories");

const router = require("express").Router();

//CREATE CATEGORY
router.post("/", createCategory);

//GET CATEGORIES
router.get("/", getCategory);

module.exports = router;
