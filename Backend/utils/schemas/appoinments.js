const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const patientIdSchema = joi.string();
const reasonIdSchema = joi.string();
const isOnlineSchema = joi.boolean();

const createAppoinmentSchema = {
    patientId: patientIdSchema.required(),
    reasonId: reasonIdSchema.required(),
    isOnline: isOnlineSchema.required()
};

const updateAppoinmentSchema = {
    patientId: patientIdSchema,
    reasonId: reasonIdSchema,
    isOnline: isOnlineSchema
};

module.exports = {
    idSchema,
    createAppoinmentSchema,
    updateAppoinmentSchema
}