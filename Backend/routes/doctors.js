const { Router } = require('express');
const DoctorsService = require('../services/doctors');
const { idSchema, createDoctorSchema, updateDoctorSchema } = require('../utils/schemas/doctors');
const validationHandler = require('../utils/middleware/validationHandler');

function doctorsApi(app) {
    const router = Router();
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

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const doctors= await doctorsService.getDoctor({ id });
            res.status(200).json({
                data: doctor,
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
            res.status(200).json({
                data: createdDoctorId,
                message: 'doctor created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateDoctorSchema), async function (req, res, next) {
        const { id } = req.params;
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

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedDoctorId = await doctorsService.deleteDoctor({ id });
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