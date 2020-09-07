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


const routes = function(app) {
    doctorsApi(app);
    doctorsSpecialtiesApi(app);
    establishmentsApi(app);
    establishmentsDoctorsApi(app);
    onlineApi(app);
    patientsApi(app);
    presentialApi(app);
    reasonsApi(app);
    slotsApi(app);
    specialtiesApi(app);
    usersApi(app);
}

module.exports = routes;