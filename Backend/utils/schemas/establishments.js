const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string();
const addressSchema = joi.string();

const createEstablihmentsSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    address: addressSchema.required()
};

const updateEstablishmentsSchema = {
    name: nameSchema,
    address: addressSchema
};

module.exports = {
    idSchema,
    createEstablihmentsSchema,
    updateEstablishmentsSchema
}