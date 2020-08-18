const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const doctorIdSchema = joi.string();
const specialtyIdSchema = joi.string();


const createDoctorsSpecialtiesSchema = {
    id: idSchema.required(),
    doctorId: doctorIdSchema.required(),
    specialtyId: specialtyIdSchema.required()
};

const updateDoctorsSpecialtiesSchema = {
    doctorId: doctorIdSchema,
    specialtyId: specialtyIdSchema
};

module.exports = {
    idSchema,
    createDoctorsSpecialtiesSchema,
    updateDoctorsSpecialtiesSchema
}