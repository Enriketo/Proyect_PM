const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const doctorIdSchema = joi.string();

const createSpecialtySchema = {
    id: idSchema.required(),
    doctorId: doctorIdSchema.required()
};

const updateSpecialtySchema = {
    doctorId: doctorIdSchema
};

module.exports = {
    idSchema,
    createSpecialtySchema,
    updateSpecialtySchema
}