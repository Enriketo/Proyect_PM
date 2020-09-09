const joi = require('@hapi/joi');

const idSchema = joi.string();
const patient_idSchema = joi.string();
const reason_idSchema = joi.string();
const slot_idSchema = joi.string();
const review_idSchema = joi.string();
const activeSchema = joi.string();

const createAppoinmentSchema = {
    id: idSchema.required(),
    patient_id: patient_idSchema.required(),
    reason_id: reason_idSchema.required(),
    slot_id: slot_idSchema.required(),
    review_id: review_idSchema.required(),
    active: activeSchema.required(),
};

const updateAppoinmentSchema = {
    patient_id: patient_idSchema.required(),
    reason_id: reason_idSchema.required(),
    slot_id: slot_idSchema.required(),
    review_id: review_idSchema.required(),
    active: activeSchema.required(),
};

module.exports = {
    idSchema,
    createAppoinmentSchema,
    updateAppoinmentSchema
}


// "id":"",
// "patient_id":"",
// "reason_id":"",
// "slot_id":"",
// "review_id":"",
// "active":""