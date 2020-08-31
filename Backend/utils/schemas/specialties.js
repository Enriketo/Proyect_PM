import {  number, string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const nameSchema = string().max(50);
const activeSchema = number().max(1);

const createSpecialtySchema = {
    id: idSchema.required(),
    name: nameSchema.required(),
    active: activeSchema.required()
};

const updateSpecialtySchema = {
    name: nameSchema,
    acti: activeSchema
};

export default {
    idSchema,
    createSpecialtySchema,
    updateSpecialtySchema
}