'use strict'
const repository = require('../repositories/review-repository');

const requestHandler = async (promise, res) => {
    try {
        const data = await promise();
        res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message: 'Falha ao processar a requisição.'
        });
    }
};

exports.post = (req, res, next) => {
    requestHandler(repository.create(req.body), res);
};

exports.get = (req, res, next) => {
    requestHandler(repository.get(), res);
};

exports.getById = (req, res, next) => {
    requestHandler(repository.getById(req.params.id), res);
}
