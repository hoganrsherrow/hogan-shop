const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now },
    favorites: [{ body: String, date: Date }],
    prevPurchases: [{ body: String, date: Date }]
});


module.exports = mongoose.model('User', userSchema);