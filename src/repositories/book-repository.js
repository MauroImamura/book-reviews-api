'use strict'
const mongoose = require('mongoose');
const Book = mongoose.model('Book');

exports.get = async () => {
    const res = await Book
        .find({
            active: true
        }, 'title slug date')
    return res;
};

exports.getBySlug = async (slug) => {
    const res = await Book
        .findOne({
            slug: slug,
            active: true
        }, 'title slug summary tags')
    return res;
}

exports.getById = async (id) => {
    const res = await Book
        .findById(id)
    return res;
}

exports.getByTag = async (tag) => {
    const res = await Book
        .find({
            tags: tag,
            active: true
        }, 'title summary tags')
    return res;
}

exports.create = async (data) => {
    var book = new Book(data);
    await book.save();
}

exports.update = async (id, data) => {
    await Book.findByIdAndUpdate(id, {
        $set: {
            title: data.title,
            summary: data.summary,
            analysis: data.analysis,
            rate: data.rate,
            date: data.date,
            tags: data.tags
        }
    })
}

exports.delete = async (id) => {
    await Book.findOneAndRemove(id)
}