const User = require('../Models/User');

const resolvers = {
    Query: {
        // get all users
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('favorites');
        },

        // get user by username
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('favorites');
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            return user;
        }
    }
}