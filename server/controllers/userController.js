const User = require('../Models/User');

// create new user
const createUser = async ({ body }, res) => {
    await User.create(body)
        .then(userData => res.json(userData))
        .catch(err => {
            res.status(400).send(err);
        })
};

// get all users
const getAllUsers = async (req, res) => {
    await User.find({})
        .select('-__v -password')
        .sort({ _id: -1 })
        .then(userData => res.json(userData))
        .catch(err => {
            res.status(500).send(err);
        });
}

// get user by id
const getUserById = async(req, res) => {
    await User.findById(req.params.id)
        .select('-__v -password')
        .catch(err => {
            res.status(500).send(err);
        });
}

// update user by id


// delete user by id

module.exports = {
    createUser,
    getAllUsers,
    getUserById
};