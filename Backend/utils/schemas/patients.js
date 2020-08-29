import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const userIdSchema = string();

const createPatientSchema = {
    id: idSchema.required(),
    userId: userIdSchema.required()
};

const updatePatientSchema = {
    userId: userIdSchema
};

export default {
    idSchema,
    createPatientSchema,
    updatePatientSchema
}