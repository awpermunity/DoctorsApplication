var config = require('config.json');
var express = require('express');
var router = express.Router();
var doctorService = require('services/doctor.service');

// routes
router.get('/', getAll);
router.get('/:_id', getById);
router.put('/:_id', update);
router.delete('/:_id', _delete);
router.post('/create', create);

module.exports = router;

function getAll(req, res) {
    doctorService.getAll()
        .then(function (users) {
            res.send(users);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function create(req, res) {
    doctorService.create(req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function update(req, res) {
    doctorService.update(req.params._id, req.body)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function _delete(req, res) {
    doctorService.delete(req.params._id)
        .then(function () {
            res.sendStatus(200);
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function getById(req, res) {
    doctorService.getById(req.params._id)
        .then(function (doctor) {
            if (doctor) {
                res.send(doctor);
            } else {
                res.sendStatus(404);
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}