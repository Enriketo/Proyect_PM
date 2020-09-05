const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const establishmentsIdSchema = joi.string();
const doctorIdSchema = joi.string();

const createEstablishmentDoctorSchema = {
    id: idSchema.required(),
    establishmentId: establishmentsIdSchema.required(),
    doctorId: doctorIdSchema.required()
};

const updateEstablishmentDoctorSchema = {
    establishmentId: establishmentsIdSchema,
    doctorId: doctorIdSchema
};

module.exports = {
    idSchema,
    createEstablishmentDoctorSchema,
    updateEstablishmentDoctorSchema
}