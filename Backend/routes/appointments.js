const { Router } = require('express');
const AppointmentsService = require('../services/appointments');
const { idSchema, createAppoinmentSchema, updateAppoinmentSchema } = require('../utils/schemas/appoinments');
const validationHandler = require('../utils/middleware/validationHandler');

function appointmentsApi(app) {
    const router = Router();
    app.use("/api/appointments", router);

    const appointmentsService = new AppointmentsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const appointments = await appointmentsService.getAppointments({ tags });
            //throw new Error('Error getting appointments');
            res.status(200).json({
                data: appointments,
                message: 'appointments retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const appointment = await appointmentsService.getAppointment({ id });
            res.status(200).json({
                data: appointment,
                message: 'appointment retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createAppoinmentSchema), async function (req, res, next) {
        const { body: appointment } = req;
        try {
            ;
            const createdAppointmentId = await appointmentsService.createAppointment({ appointment });
            res.status(200).json({
                data: createdAppointmentId,
                message: 'appointment created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateAppoinmentSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: appointment } = req;
        try {
            const updatedAppointmentId = await appointmentsService.updateAppointment({ id, appointment });
            res.status(200).json({
                data: updatedAppointmentId,
                message: 'appointments updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedAppointmentId = await appointmentsService.deleteAppointment({ id });
            res.status(200).json({
                data: deletedAppointmentId,
                message: 'appointment deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = appointmentsApi;