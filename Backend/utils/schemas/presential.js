import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const appoinmentIdSchema = string();
const establishmentIdSchema = string();

const createPresentialSchema = {
    id: idSchema.required(),
    appoinmentId: appoinmentIdSchema.required(),
    establishmentId: establishmentIdSchema.required()
};

const updatePresentialSchema = {
    doctorId: doctorIdSchema,
    establishmentId: establishmentIdSchema
};

export default {
    idSchema,
    createPresentialSchema,
    updatePresentialSchema
}