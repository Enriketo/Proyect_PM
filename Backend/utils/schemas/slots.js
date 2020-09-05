const joi = require('@hapi/joi');

const idSchema = joi.string().regex(/^[0/9a-fA-F]{24}$/);
const scheduleIdSchema = joi.string();
const appointmentIdSchema = joi.string();
const startSchema = joi.number().min(1).max(12);
const endSchema = joi.string().email().max(256);
const availableSchema = joi.string();

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

module.exports = {
    idSchema,
    createSlotSchema,
    updateSlotSchema
}