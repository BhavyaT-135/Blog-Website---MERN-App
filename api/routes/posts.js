const {
   createPost,
   updatePost,
   deletePost,
   getPost,
   getAll,
} = require("../controllers/posts");

const router = require("express").Router();

//CREATE POST
router.post("/", createPost);

//UPDATE POST
router.put("/:id", updatePost);

//DELETE POST
router.delete("/:id", deletePost);

//GET POST
router.get("/:id", getPost);

//GET ALL POSTS
router.get("/", getAll);

module.exports = router;
