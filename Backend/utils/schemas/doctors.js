const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const userIdSchema = joi.string();
const pictureUrlSchema = joi.string();
const bioSchema = joi.string();
const ratingSchema = joi.number();

const createDoctorSchema = {
    id: idSchema.required(),
    userId: userIdSchema.required(),
    pictureUrl: pictureUrlSchema.required(),
    bio: bioSchema.required(),
    rating: ratingSchema.required()
};

const updateDoctorSchema = {
    userId: userIdSchema,
    pictureUrl: pictureUrlSchema,
    bio: bioSchema,
    rating: ratingSchema
};

module.exports = {
    idSchema,
    createDoctorSchema,
    updateDoctorSchema
}