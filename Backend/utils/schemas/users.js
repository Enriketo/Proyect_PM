const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const userNameSchema = joi.string().max(20);
const userLastNameSchema = joi.string().max(20);
const userPhoneSchema = joi.number().min(1).max(12);
const userEmailSchema = joi.string().email().max(256);
const userPasswordSchema = joi.string();
const userBirthDateSchema = joi.date();
const userGenderSchema = joi.string().max(99);


const createUserSchema = {
    name: userNameSchema.required(),
    lastName: userLastNameSchema.required(),
    phone: userPhoneSchema.required(),
    email: userEmailSchema.required(),
    password: userPasswordSchema.required(),
    birthDate: userBirthDateSchema.required(),
    gender: userGenderSchema.required()
};

const updateUserSchema = {
    name: userNameSchema,
    lastName: userNameSchema,
    phone: userPhoneSchema,
    password: userPasswordSchema,
    birthDate: userBirthDateSchema,
    gender: userGenderSchema
};

module.exports = {
    userIdSchema,
    createUserSchema,
    updateUserSchema
};