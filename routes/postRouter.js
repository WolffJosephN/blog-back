const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("/posts works");
});

router.post("/create", async (req, res) => {
    const { title, createdOn, tags, content } = req.body;
    console.log(req.body);


    res.send(req.body);
});

module.exports = router;