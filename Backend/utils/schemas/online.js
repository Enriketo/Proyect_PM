import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const appoinmentIdSchema = string();

const createOnlineSchema = {
    id: idSchema.required(),
    appoinmentId: appoinmentIdSchema.required()
};

const updateOnlineSchema = {
    appoinmentId: appoinmentIdSchema
};

export default {
    idSchema,
    createOnlineSchema,
    updateOnlineSchema
}