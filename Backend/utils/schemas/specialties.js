const joi = require('@hapi/joi');

const idSchema = joi.string();
const nameSchema = joi.string().max(50);
const activeSchema = joi.number().max(1);

const createSpecialtySchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    active: activeSchema.required()
};

const updateSpecialtySchema = {
    name: nameSchema,
    active: activeSchema,
};

module.exports = {
    idSchema,
    createSpecialtySchema,
    updateSpecialtySchema,
}

// "id":"",
// "name":"",
// "active":""

// update
// "name":"",
// "active":""
