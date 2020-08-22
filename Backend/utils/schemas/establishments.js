import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = string();
const addressSchema = string();

const createEstablishmentSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    address: addressSchema.required()
};

const updateEstablishmentSchema = {
    name: nameSchema,
    address: addressSchema
};

export default {
    idSchema,
    createEstablishmentSchema,
    updateEstablishmentSchema
}