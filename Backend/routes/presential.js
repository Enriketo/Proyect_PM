const { Router } = require('express');
const PresentialAppointmentService = require('../services/presential');
const { idSchema, createPresentialSchema, updatePresentialSchema } = require('../utils/schemas/online');
const validationHandler = require('../utils/middleware/validationHandler');

function PresentialAppointmentsApi(app) {
    const router = Router();
    app.use("/api/presentials", router);

    const presentialAppointmentService = new PresentialAppointmentService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const presentialAppointments = await presentialAppointmentService.getPresentialAppointments({ tags });
            //throw new Error('Error getting presential Appointments');
            res.status(200).json({
                data: presentialAppointments,
                message: 'presential Appointments retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const presentialAppointment = await presentialAppointmentService.getPresentialAppointment({ id });
            res.status(200).json({
                data: presentialAppointment,
                message: 'presential Appointment retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createPresentialSchema), async function (req, res, next) {
        const { body: presentialAppointment } = req;
        try {
            ;
            const presentialAppointmentId = await presentialAppointmentService.createPresentiaAppointment({ presentialAppointment });
            res.status(200).json({
                data: presentialAppointmentId,
                message: 'presential Appointment created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updatePresentialSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: presentialAppointment } = req;
        try {
            const updatedPresentialAppointmentId = await presentialAppointmentService.updatePresentialAppointment({ id, presentialAppointment });
            res.status(200).json({
                data: updatedPresentialAppointmentId,
                message: 'presential Appointment updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedPresentialAppointmentId = await presentialAppointmentService.deletePresentialAppointment({ id });
            res.status(200).json({
                data: deletedPresentialAppointmentId,
                message: 'presential Appointment deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = PresentialAppointmentsApi;