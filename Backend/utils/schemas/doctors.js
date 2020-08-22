import { string, decimal } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const userIdSchema = string();
const pictureUrlSchema = string();
const bioSchema = string();
const ratingSchema = decimal();

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

export default {
    idSchema,
    createDoctorSchema,
    updateDoctorSchema
}