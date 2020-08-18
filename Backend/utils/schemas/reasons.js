const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const specialtyIdSchema = joi.string();
const nameSchema = joi.string();

const createReasonSchema = {
    id: idSchema.required(),
    specialtyId: specialtyIdSchema.required(),
    name: nameSchema.required()
};

const updateReasonSchema = {
    specialtyId: specialtyIdSchema,
    name: nameSchema
};

module.exports = {
    idSchema,
    createReasonSchema,
    updateReasonSchema
}