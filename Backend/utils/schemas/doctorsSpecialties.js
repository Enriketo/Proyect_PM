import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const doctorIdSchema = string();
const specialtyIdSchema = string();


const createDoctorSpecialtySchema = {
    id: idSchema.required(),
    doctorId: doctorIdSchema.required(),
    specialtyId: specialtyIdSchema.required()
};

const updateDoctorSpecialtySchema = {
    doctorId: doctorIdSchema,
    specialtyId: specialtyIdSchema
};

export default {
    idSchema,
    createDoctorSpecialtySchema,
    updateDoctorSpecialtySchema
}