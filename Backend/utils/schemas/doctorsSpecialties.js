const joi = require('@hapi/joi');

const idSchema = joi.string();
const doctor_idSchema = joi.string();
const specialty_idSchema = joi.string();
const activeSchema = joi.string();

const createDoctorSpecialtySchema = {
    id: idSchema.required(),
    doctor_id: doctor_idSchema.required(),
    specialty_id: specialty_idSchema.required(),
    active: activeSchema.required(),
};

const updateDoctorSpecialtySchema = {
    doctor_id: doctor_idSchema,
    specialty_id: specialty_idSchema,
    active: activeSchema,
};

module.exports = {
    idSchema,
    createDoctorSpecialtySchema,
    updateDoctorSpecialtySchema
}

// "id": "",
// "doctor_id": "",
// "specialty_id": "",
// "active": ""