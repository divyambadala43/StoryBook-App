const express = require("express");
const router = express.Router();

//login route
router.get("/", (req, res) => {
    res.render("login")
})

//Dashboard route
router.get("/dashboard", (req, res) => {
    res.render("dashboard")
})


module.exports = router;