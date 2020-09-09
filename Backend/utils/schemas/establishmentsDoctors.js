const joi = require('@hapi/joi');

const idSchema = joi.string();
const establishment_idSchema = joi.string();
const doctor_idSchema = joi.string();

const createEstablishmentDoctorSchema = {
    id: idSchema.required(),
    establishment_id: establishment_idSchema.required(),
    doctor_id: doctor_idSchema.required()
};

const updateEstablishmentDoctorSchema = {
    establishment_id: establishment_idSchema,
    doctor_id: doctor_idSchema,
};

module.exports = {
    idSchema,
    createEstablishmentDoctorSchema,
    updateEstablishmentDoctorSchema
}

// "id":"",
// "establishment_id":"",
// "doctor_id":""