const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = joi.string().max(20);
const lastNameSchema = joi.string().max(20);
const phoneSchema = joi.number().min(1).max(12);
const emailSchema = joi.string().email().max(256);
const passwordSchema = joi.string();
const birthDateSchema = joi.date();
const genderSchema = joi.string().max(99);


const createUserSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    lastName: lastNameSchema.required(),
    phone: phoneSchema.required(),
    email: emailSchema.required(),
    password: passwordSchema.required(),
    birthDate: birthDateSchema.required(),
    gender: genderSchema.required()
};

const updateUserSchema = {
    name: nameSchema,
    lastName: lastNameSchema,
    phone: phoneSchema,
    password: passwordSchema,
    birthDate: birthDateSchema,
    gender: genderSchema
};

module.exports = {
    idSchema,
    createUserSchema,
    updateUserSchema
}