const { string, number, date, required } = require('@hapi/joi');

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = string().max(20);
const lastNameSchema = string().max(20);
const phoneSchema = number().min(1).max(12);
const emailSchema = string().email().max(256);
const passwordSchema = string();
const birthDateSchema = date();
const genderSchema = string().max(99);


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
 };