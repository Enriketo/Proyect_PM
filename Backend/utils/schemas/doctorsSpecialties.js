const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const doctorIdSchema = joi.string();
const specialtyIdSchema = joi.string();

const createDoctorSpecialtySchema = {
    id: idSchema.required(),
    doctorId: doctorIdSchema.required(),
    specialtyId: specialtyIdSchema.required()
};

const updateDoctorSpecialtySchema = {
    doctorId: doctorIdSchema,
    specialtyId: specialtyIdSchema
};

module.exports = {
    idSchema,
    createDoctorSpecialtySchema,
    updateDoctorSpecialtySchema
}