const joi = require('@hapi/joi');


const idSchema = joi.string();
const doctor_idSchema = joi.string();
const establishment_idSchema = joi.string();
const datetimeSchema = joi.date();
const durationSchema = joi.string();
const availableSchema = joi.string();
const activeSchema = joi.string();



const createSlotSchema = {
    id: idSchema.required(),
    doctor_id: doctor_idSchema.required(),
    establishment_id: establishment_idSchema.required(),
    datetime: datetimeSchema.required(),
    duration: durationSchema.required(),
    available: availableSchema.required(),
    active: activeSchema.required(),
};

const updateSlotSchema = {
    doctor_id: doctor_idSchema,
    establishment_id: establishment_idSchema,
    datetime: datetimeSchema,
    duration: durationSchema,
    available: availableSchema,
    active: activeSchema,
};

module.exports = {
    idSchema,
    createSlotSchema,
    updateSlotSchema
}

// "id": "",
// "doctor_id": "",
// "establishment_id": "",
// "datetime": "",
// "duration": "",
// "available": "",
// "active": "",