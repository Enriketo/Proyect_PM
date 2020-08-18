const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const userIdSchema = joi.string();

const createPatientsSchema = {
    id: idSchema.required(),
    userId: userIdSchema.required()
};

const updatePatientsSchema = {
    userId: userIdSchema
};

module.exports = {
    idSchema,
    createPatientsSchema,
    updatePatientsSchema
}