'use strict'
const repository = require('../repositories/review-repository');
const authService = require('../services/auth-service');

const requestHandler = async (promise, res) => {
    try {
        const token = req.body.toker || req.query.token || req.headers['x-access-token'];
        const decoded = await authService.decodeToken(token);
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
