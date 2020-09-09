const joi = require('@hapi/joi');

const idSchema = joi.string();
const user_idSchema = joi.string();
const passwordSchema = joi.string();

const createPatientSchema = {
    id: idSchema.required(),
    user_id: user_idSchema.required(),
    password: passwordSchema.required(),
};

const updatePatientSchema = {
    user_id: user_idSchema,
    password: passwordSchema,
};

module.exports = {
    idSchema,
    createPatientSchema,
    updatePatientSchema
}


// "id":"",
// "user_id":"",
// "password":""
