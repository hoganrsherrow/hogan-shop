const router = require('express').Router();
const {
    createUser,
    getAllUsers,
    getUserById
} = require('../../controllers/userController');

// get all users
router.get('/', (req, res) => {
    getAllUsers(req, res);
});

// get user by id
router.get('/:id', (req, res) => {
    getUserById(req, res);
});

// create user
router.post('/', (req, res) => {
    createUser(req, res);
});


module.exports = router;