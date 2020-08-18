const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string();
const addressSchema = joi.string();

const createEstablishmentSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    address: addressSchema.required()
};

const updateEstablishmentSchema = {
    name: nameSchema,
    address: addressSchema
};

module.exports = {
    idSchema,
    createEstablishmentSchema,
    updateEstablishmentSchema
}