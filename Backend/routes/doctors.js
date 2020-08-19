const express = require('express');
const DoctorsService = require('../services/doctors');

const {
    IdSchema,
    createDoctorSchema,
    updateDoctorSchema
} = require('../utils/schemas/doctors');

const validationHandler = require('../utils/middleware/validationHandler');

function doctorsApi(app) {
    const router = express.Router();
    app.use("/api/doctors", router);

    const doctorsService = new DoctorsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const doctors = await doctorsService.getDoctors({ tags });
            //throw new Error('Error getting doctors');
            res.status(200).json({
                data: doctors,
                message: 'doctor retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:doctorId", validationHandler({ doctorId: IdSchema }, 'params'), async function (req, res, next) {
        const { doctorId } = req.params;
        try {
            const doctors = await doctorsService.getDoctor({ doctorId });
            res.status(200).json({
                data: doctors,
                message: 'doctor retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createDoctorSchema), async function (req, res, next) {
        const { body: doctor } = req;
        try {
            ;
            const createdDoctorId = await doctorsService.createDoctor({ doctor });
            res.status(201).json({
                data: createdDoctorId,
                message: 'doctor created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:doctorId", validationHandler({ doctorId: IdSchema }, 'params'), validationHandler(updateDoctorSchema), async function (req, res, next) {
        const { doctorId } = req.params;
        const { body: doctor } = req;
        try {
            const updatedDoctorId = await doctorsService.updateDoctor({ doctorId, doctor });
            res.status(200).json({
                data: updatedDoctorId,
                message: 'doctors updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:doctorId", validationHandler({ doctorId: IdSchema }, 'params'), async function (req, res, next) {
        const { doctorId } = req.params;
        try {
            const deletedDoctorId = await doctorsService.deleteDoctor({ doctorId });
            res.status(200).json({
                data: deletedDoctorId,
                message: 'doctor deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = doctorsApi;