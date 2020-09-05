const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string().max(50);
const activeSchema = joi.number().max(1);

const createSpecialtySchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    active: activeSchema.required()
};

const updateSpecialtySchema = {
    name: nameSchema,
    acti: activeSchema
};

module.exports = {
    idSchema,
    createSpecialtySchema,
    updateSpecialtySchema
}