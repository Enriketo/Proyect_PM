const { Router } = require('express');
const PatientsService = require('../services/patients');
const { idSchema, createPatientSchema, updatePatientSchema } = require('../utils/schemas/online');
const validationHandler = require('../utils/middleware/validationHandler');

function PatientsApi(app) {
    const router = Router();
    app.use("/api/patients", router);

    const patientsService = new PatientsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const patients = await patientsService.getPatients({ tags });
            //throw new Error('Error getting patients');
            res.status(200).json({
                data: patients,
                message: 'patients retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const patient = await patientsService.getPatient({ id });
            res.status(200).json({
                data: patient,
                message: 'patient retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createPatientSchema), async function (req, res, next) {
        const { body: patient } = req;
        try {
            ;
            const patientId = await patientsService.createPatient({ patient });
            res.status(200).json({
                data: patientId,
                message: 'patient created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updatePatientSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: patient } = req;
        try {
            const updatedPatientId = await patientsService.updateOnlineAppointment({ id, patient });
            res.status(200).json({
                data: updatedPatientId,
                message: 'patient updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedPatientId = await patientsService.deletePatient({ id });
            res.status(200).json({
                data: deletedPatientId,
                message: 'patient deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = PatientsApi;