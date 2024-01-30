'use strict'
const mongoose = require('mongoose');
const Review = mongoose.model('Review');

exports.create = async (data) => {
    var review = new Review(data);
    await review.save();
}

exports.get = async () => {
    var res = await Review.find({})
        .populate('user')
        .populate('book');
    return res;
}

exports.getById = async (id) => {
    var res = await Review.find({
        id: id
    })
        .populate('user')
        .populate('book');
    return res;
}