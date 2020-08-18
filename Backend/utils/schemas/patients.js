const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const userIdSchema = joi.string();

const createPatientSchema = {
    id: idSchema.required(),
    userId: userIdSchema.required()
};

const updatePatientSchema = {
    userId: userIdSchema
};

module.exports = {
    idSchema,
    createPatientSchema,
    updatePatientSchema
}