const { Router } = require('express');
const OnlineAppointmentsService = require('../services/online');
const { idSchema, createOnlineSchema, updateOnlineSchema } = require('../utils/schemas/online');
const validationHandler = require('../utils/middleware/validationHandler');

function onlineAppointmentsApi(app) {
    const router = Router();
    app.use("/api/onlineAppointments", router);

    const onlineAppointmentService = new OnlineAppointmentsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const onlineAppointments = await onlineAppointmentService.getOnlineAppointments({ tags });
            //throw new Error('Error getting online appointments');
            res.status(200).json({
                data: onlineAppointments,
                message: 'online appointments retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const onlineAppointment = await onlineAppointmentService.getOnlineAppointment({ id });
            res.status(200).json({
                data: onlineAppointment,
                message: 'online appointment retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createOnlineSchema), async function (req, res, next) {
        const { body: onlineAppointment } = req;
        try {
            ;
            const onlineAppointmentId = await onlineAppointmentService.createOnlineAppointment({ onlineAppointment });
            res.status(200).json({
                data: onlineAppointmentId,
                message: 'online appointment created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateOnlineSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: onlineAppointment } = req;
        try {
            const updatedOnlineAppointmentId = await onlineAppointmentService.updateOnlineAppointment({ id, onlineAppointment });
            res.status(200).json({
                data: updatedOnlineAppointmentId,
                message: 'online appointment updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedOnlineAppoinmentId = await onlineAppointmentService.deleteEstablishmentDoctor({ id });
            res.status(200).json({
                data: deletedOnlineAppoinmentId,
                message: 'online appoinment deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = onlineAppointmentsApi;