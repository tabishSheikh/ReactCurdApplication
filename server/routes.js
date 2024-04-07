const express = require("express");
const CategoryController = require("./controllers/CategoryController");
const ItemController = require("./controllers/ItemController");

const router = express.Router();

router.get("/items", ItemController.index);
router.post("/items", ItemController.store);
router.patch("/items/:item_id", ItemController.update);
router.delete("/items/:item_id", ItemController.destroy);
router.get("/categories", CategoryController.index);
router.post("/categories", CategoryController.store);
router.patch("/categories/:category_id", CategoryController.update);
router.delete("/categories/:category_id", CategoryController.destroy);

module.exports = router;