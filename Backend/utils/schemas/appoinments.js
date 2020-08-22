import { string, boolean } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const patientIdSchema = string();
const reasonIdSchema = string();
const isOnlineSchema = boolean();

const createAppoinmentSchema = {
    id: idSchema.required(),
    patientId: patientIdSchema.required(),
    reasonId: reasonIdSchema.required(),
    isOnline: isOnlineSchema.required()
};

const updateAppoinmentSchema = {
    patientId: patientIdSchema,
    reasonId: reasonIdSchema,
    isOnline: isOnlineSchema
};

export default {
    idSchema,
    createAppoinmentSchema,
    updateAppoinmentSchema
}