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
    server.use('/api/doctors', doctorsApi);
    server.use('/api/doctorsSpecialties', doctorsSpecialtiesApi);
    server.use('/api/establishments', establishmentsApi);
    server.use('/api/establishmentsDoctors', establishmentsDoctorsApi);
    server.use('/api/online', onlineApi);
    server.use('/api/patients', patientsApi);
    server.use('/api/presential', presentialApi);
    server.use('/api/reasons', reasonsApi);
    server.use('/api/slots', slotsApi);
    server.use('/api/specialties', specialtiesApi);
    server.use('/api/users', usersApi);
}

module.exports = routes;