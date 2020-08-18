const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string();

const createSpecialtySchema = {
    id: idSchema.required(),
    name: nameSchema.required()
};

const updateSpecialtySchema = {
    name: nameSchema
};

module.exports = {
    idSchema,
    createSpecialtySchema,
    updateSpecialtySchema
}