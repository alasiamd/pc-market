const { Router } = require("express");

const { getUsers } = require("../controllers/index");
const { postUsers } = require("../controllers/index");
const { getProducts } = require("../controllers/index");
const { postProducts } = require("../controllers/index");

const router = Router();

router.get("/users", getUsers);
router.post("/users", postUsers);

router.get("/products", getProducts);
router.post("/products", postProducts);

module.exports = router;
