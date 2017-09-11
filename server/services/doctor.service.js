var config = require('config.json');
var _ = require('lodash');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var Q = require('q');
var mongo = require('mongoskin');
var db = mongo.db(config.connectionString, { native_parser: true });
db.bind('doctors');

var service = {};

service.getAll = getAll;
service.getById = getById;
service.create = create;
service.update = update;
service.delete = _delete;

module.exports = service;

function getAll() {
    var deferred = Q.defer();

    db.doctors.find().toArray(function (err, doctors) {
        if (err) deferred.reject(err.name + ': ' + err.message);
        deferred.resolve(doctors);
    });

    return deferred.promise;
}

function getById(_id) {
    var deferred = Q.defer();

    db.doctors.findById(_id, function (err, doctor) {
        if (err) deferred.reject(err.name + ': ' + err.message);

        if (doctor) {
            // return doctor (without hashed password)
            deferred.resolve(_.omit(doctor, 'hash'));
        } else {
            // doctor not found
            deferred.resolve();
        }
    });

    return deferred.promise;
}

function create(doctorParam) {
    var deferred = Q.defer();

    function createDoctor() {
        db.doctors.insert(
            doctorParam,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }

    createDoctor();

    return deferred.promise;
}
function update(_id, doctorParam) {
    var deferred = Q.defer();
    var updateDoc = doctorParam;
    delete updateDoc._id
    updateDoctor();
    function updateDoctor() {
        db.doctors.update(
            { _id: mongo.helper.toObjectID(_id) },
            updateDoc,
            function (err, doc) {
                if (err) deferred.reject(err.name + ': ' + err.message);

                deferred.resolve();
            });
    }
    return deferred.promise;
}

function _delete(_id) {
    var deferred = Q.defer();

    db.doctors.remove(
        { _id: mongo.helper.toObjectID(_id) },
        function (err) {
            if (err) deferred.reject(err.name + ': ' + err.message);

            deferred.resolve();
        });

    return deferred.promise;
}


