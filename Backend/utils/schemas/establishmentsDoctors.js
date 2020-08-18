const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const establishmentsIdSchema = joi.string();
const doctorIdSchema = joi.string();

const createEstablishmentsDoctorsSchema = {
    id: idSchema.required(),
    establishmentId: establishmentsIdSchema.required(),
    doctorId: doctorIdSchema.required()
};

const updateEstablishmentsDoctorsSchema = {
    establishmentId: establishmentsIdSchema,
    doctorId: doctorIdSchema
};

module.exports = {
    idSchema,
    createEstablishmentsDoctorsSchema,
    updateEstablishmentsDoctorsSchema
}