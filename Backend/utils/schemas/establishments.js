const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string().max(50);
const addressSchema = joi.string().max(100);
const phoneSchema = joi.number().min(1).max(15);
const activeSchema = joi.number().max(1);

const createEstablishmentSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    address: addressSchema.required(),
    phone: phoneSchema.required(),
    active: activeSchema.required()
};

const updateEstablishmentSchema = {
    name: nameSchema,
    address: addressSchema,
    phone: phoneSchema,
    active: activeSchema
};

module.exports = {
    idSchema,
    createEstablishmentSchema,
    updateEstablishmentSchema
}