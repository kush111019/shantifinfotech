const express = require("express")
const router=express.Router();
const userController = require("../controllers/categoryController");


router.get("/category",userController.getCategory);
router.post("/category",userController.addCategory);
router.put("/category",userController.updateCategory);

module.exports = router;
