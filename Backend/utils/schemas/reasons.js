const joi = require('@hapi/joi');

const idSchema = joi.string();
const nameSchema =  joi.string();
const could_be_onlineSchema =  joi.string();
const activeSchema =  joi.string()

const createReasonSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    could_be_online: could_be_onlineSchema.required(),
    active: activeSchema.required(),
};

const updateReasonSchema = {
    name: nameSchema,
    could_be_online: could_be_onlineSchema,
    active: activeSchema,
};

module.exports = {
    idSchema,
    createReasonSchema,
    updateReasonSchema
}
// "id":"",
// "name":"",
// "could_be_online":"",
// "active":""