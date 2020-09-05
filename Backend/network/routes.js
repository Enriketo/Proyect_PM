const express = require('express');
const doctorsApi = require('../routes/doctors');
const doctorsSpecialtiesApi = require('../routes/doctorsSpecialties');
const establishmentsApi = require('../routes/establishments');
const establishmentsDoctorsApi = require('../routes/establishmentsDoctors');
const onlineApi = require('../routes/online');
const patientsApi = require('../routes/patients');
const presentialApi = require('../routes/presential');
const reasonsApi = require('../routes/reasons');
const slotsApi = require('../routes/slots');
const specialtiesApi = require('../routes/specialties');
const usersApi = require('../routes/users');


const routes = function (server) {
    server.use('doctors', doctorsApi);
    server.use('doctorsSpecialties', doctorsSpecialtiesApi);
    server.use('establishments', establishmentsApi);
    server.use('establishmentsDoctors', establishmentsDoctorsApi);
    server.use('online', onlineApi);
    server.use('patients', patientsApi);
    server.use('presential', presentialApi);
    server.use('reasons', reasonsApi);
    server.use('slots', slotsApi);
    server.use('specialties', specialtiesApi);
    server.use('users', usersApi);
}

module.exports = routes;