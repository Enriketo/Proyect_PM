const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const patientIdSchema = joi.string();
const reasonIdSchema = joi.string();
const isOnlineSchema = joi.boolean();

const createAppoinmentsSchema = {
    id: idSchema.required(),
    patientId: patientIdSchema.required(),
    reasonId: reasonIdSchema.required(),
    isOnline: isOnlineSchema.required()
};

const updateAppoinmentsSchema = {
    patientId: patientIdSchema,
    reasonId: reasonIdSchema,
    isOnline: isOnlineSchema
};

module.exports = {
    idSchema,
    createAppoinmentsSchema,
    updateAppoinmentsSchema
}