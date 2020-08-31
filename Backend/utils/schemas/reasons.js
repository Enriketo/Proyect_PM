import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const specialtyIdSchema = string();
const nameSchema = string();

const createReasonSchema = {
    id: idSchema.required(),
    specialtyId: specialtyIdSchema.required(),
    name: nameSchema.required()
};

const updateReasonSchema = {
    specialtyId: specialtyIdSchema,
    name: nameSchema
};

export default {
    idSchema,
    createReasonSchema,
    updateReasonSchema
}