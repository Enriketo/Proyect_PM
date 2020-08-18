const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const appoinmentIdSchema = joi.string();

const createOnlineSchema = {
    id: idSchema.required(),
    appoinmentId: appoinmentIdSchema.required()
};

const updateOnlineSchema = {
    appoinmentId: appoinmentIdSchema
};

module.exports = {
    idSchema,
    createOnlineSchema,
    updateOnlineSchema
}