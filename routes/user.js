const express = require('express');
const router = express.Router();
const userService = require('../services/user');

router.get("/:page/", async (req, res) => {
    const data = await userService.getAll(req.params.page);
    res.json(data)
});

module.exports = router;
