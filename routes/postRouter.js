const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("/posts works");
});

router.post("/create", (req, res) => {
    res.send(req.body);
});

module.exports = router;