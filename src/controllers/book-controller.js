'use strict'
const ValidationContract = require('../validators/data-validator');
const repository = require('../repositories/book-repository');

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

exports.get = async (req, res, next) => {
    requestHandler(repository.get(), res);
};

exports.getBySlug = (req, res, next) => {
    requestHandler(repository.getBySlug(req.params.slug), res);
};

exports.getById = (req, res, next) => {
    requestHandler(repository.getById(req.params.id), res);
};

exports.getByTag = (req, res, next) => {
    requestHandler(repository.getByTag(req.params.tag), res);
};

exports.post = (req, res, next) => {
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.title, 2, 'O título deve ter mais de 2 caracteres.');
    contract.hasMinLen(req.body.slug, 2, 'O slug deve ter mais de 2 caracteres.');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    requestHandler(repository.create(req.body), res);
};

exports.put = (req, res, next) => {
    requestHandler(repository.update(req.params.id, req.body), res);
};

exports.delete = (req, res, next) => {
    requestHandler(repository.delete(req.params.id), res);
};