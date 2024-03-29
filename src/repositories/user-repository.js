'use strict'
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.create = async (data) => {
    var user = new User(data);
    await user.save();
}

exports.authenticate = async (data) => {
    const res = await User
        .findOne({
            username: data.username,
            password: data.password
        })
    return res;
};