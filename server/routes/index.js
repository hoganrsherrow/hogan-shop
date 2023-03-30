const router = require('express').Router();

router.use('/api', require('./api'));

router.get('/', (req, res) => {
    res.send(`Hello`);
})

module.exports = router;