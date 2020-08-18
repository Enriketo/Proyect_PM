const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const appoinmentIdSchema = joi.string();
const establishmentIdSchema = joi.string();

const createPresentialSchema = {
    id: idSchema.required(),
    appoinmentId: appoinmentIdSchema.required(),
    establishmentId: establishmentIdSchema.required()
};

const updatePresentialSchema = {
    doctorId: doctorIdSchema,
    establishmentId: establishmentIdSchema
};

module.exports = {
    idSchema,
    createPresentialSchema,
    updatePresentialSchema
}