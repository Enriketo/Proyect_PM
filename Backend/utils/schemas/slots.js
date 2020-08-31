import { string, number } from '@hapi/joi';

const idSchema = string().regex(/^[0/9a-fA-F]{24}$/);
const scheduleIdSchema = string();
const appointmentIdSchema = string();
const startSchema = number().min(1).max(12);
const endSchema = string().email().max(256);
const availableSchema = string();

const createSlotSchema = {
    id: idSchema.required(),
    scheduleId: scheduleIdSchema.required(),
    appointmentId: appointmentIdSchema.required(),
    start: startSchema.required(),
    end: endSchema.required(),
    available: availableSchema.required()
};

const updateSlotSchema = {
    scheduleId: scheduleIdSchema,
    appointmentId: appointmentIdSchema,
    start: startSchema,
    end: endSchema,
    available: availableSchema
};

export default {
    idSchema,
    createSlotSchema,
    updateSlotSchema
}