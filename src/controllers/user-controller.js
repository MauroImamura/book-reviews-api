'use strict'
const ValidationContract = require('../validators/data-validator');
const repository = require('../repositories/user-repository');
const md5 = require('md5');
const emailService = require('../services/email-service');

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
    let contract = new ValidationContract();
    contract.hasMinLen(req.body.username, 2, 'O username deve ter mais de 2 caracteres.');
    contract.hasMinLen(req.body.password, 2, 'A senha deve ter mais de 2 caracteres.');

    if (!contract.isValid()) {
        res.status(400).send(contract.errors()).end();
        return;
    }

    requestHandler(repository.create({
        username: req.body.username,
        displayname: req.body.displayname,
        password: md5(req.body.password + global.SALT_KEY)
    }), res);

    emailService.send(req.body.email,
        'Você está recebendo este email por ter se cadastrado no Book Reviews. Agora você já pode postar suas reviews de livros!',
        global.EMAIL_TMPL.replace('{0}', req.body.displayname))
};
