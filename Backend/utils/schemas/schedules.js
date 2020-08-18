const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const doctorIdSchema = joi.string();

const createSpecialtiesSchema = {
    id: idSchema.required(),
    doctorId: doctorIdSchema.required()
};

const updateSpecialtiesSchema = {
    doctorId: doctorIdSchema
};

module.exports = {
    idSchema,
    createSpecialtiesSchema,
    updateSpecialtiesSchema
}