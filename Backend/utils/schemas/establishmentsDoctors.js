import { string } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const establishmentsIdSchema = string();
const doctorIdSchema = string();

const createEstablishmentDoctorSchema = {
    id: idSchema.required(),
    establishmentId: establishmentsIdSchema.required(),
    doctorId: doctorIdSchema.required()
};

const updateEstablishmentDoctorSchema = {
    establishmentId: establishmentsIdSchema,
    doctorId: doctorIdSchema
};

export default {
    idSchema,
    createEstablishmentDoctorSchema,
    updateEstablishmentDoctorSchema
}