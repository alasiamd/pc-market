const { Router } = require("express");

const { getUsers } = require("../controllers/index");
const { postUsers } = require("../controllers/index");

const router = Router();

router.get("/users", getUsers);
router.post("/users", postUsers);

module.exports = router;
