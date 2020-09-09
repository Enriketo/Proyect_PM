const joi = require('@hapi/joi');

const idSchema = joi.string();
const uidSchema = joi.string();
const nameSchema = joi.string().max(20);
const last_nameSchema = joi.string().max(20);
const emailSchema = joi.string().email().max(256);
const phoneSchema = joi.number().min(1).max(12);
const birth_dateSchema = joi.date();
const sexSchema = joi.string().max(99);
const activeSchema = joi.string();
const created_atSchema = joi.string();
const updated_atSchema = joi.string();

const createUserSchema = {
    id: idSchema.required(),
    uid: uidSchema.required(),
    name: nameSchema.required(),
    last_name: last_nameSchema.required(),
    email: emailSchema.required(),
    phone: phoneSchema.required(),
    birth_date: birth_dateSchema.required(),
    sex: sexSchema.required(),
    active: activeSchema.required(),
    created_at: created_atSchema.required(),
    updated_at: updated_atSchema.required()
};

const updateUserSchema = {
    name: nameSchema.required(),
    last_name: last_nameSchema.required(),
    phone: phoneSchema.required(),
    sex: sexSchema.required(),
    active: activeSchema.required(),
    updated_at: updated_atSchema.required()
};

module.exports = {
    idSchema,
    createUserSchema,
    updateUserSchema
};

// "id":
// "uid":
// "name":
// "last_name":
// "email":
// "phone":
// "birth_date":
// "sex":
// "active":
// "created_at":
// "updated_at":

// update
// "name":"",
// "last_name":"",
// "phone":"",
// "sex":"",
// "active":"",
// "updated_at":""