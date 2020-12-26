const express = require('express');

const router = express.Router();

router.use('/shop',(req, res, next) => {
    res.status(200).send(`<h1>Hello shop!</h1>`);
})

module.exports = router;