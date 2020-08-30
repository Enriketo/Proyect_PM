import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = string().max(50);
const addressSchema = string().max(100);
const phoneSchema = number().min(1).max(15);
const activeSchema = number().max(1);

const createEstablishmentSchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    address: addressSchema.required(),
    phone: phoneSchema.required(),
    active: activeSchema.required()
};

const updateEstablishmentSchema = {
    name: nameSchema,
    address: addressSchema,
    phone: phoneSchema,
    active: activeSchema
};

export default {
    idSchema,
    createEstablishmentSchema,
    updateEstablishmentSchema
}