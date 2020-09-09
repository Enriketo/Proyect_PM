const joi = require('@hapi/joi');

const idSchema = joi.string();
const user_idSchema = joi.string();
const picture_urlSchema = joi.string();
const bioSchema = joi.string();
const ratingSchema = joi.number();

const createDoctorSchema = {
    id: idSchema.required(),
    user_id: user_idSchema.required(),
    picture_url: picture_urlSchema.required(),
    bio: bioSchema.required(),
    rating: ratingSchema.required(),
};

const updateDoctorSchema = {
    user_id: user_idSchema,
    picture_url: picture_urlSchema,
    bio: bioSchema,
    rating: ratingSchema,
};

module.exports = {
    idSchema,
    createDoctorSchema,
    updateDoctorSchema
}

// "id": "",
// "user_id": "",
// "picture_url": "",
// "bio": "",
// "rating": ""