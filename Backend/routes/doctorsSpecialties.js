const { Router } = require ('express');
const DoctorsSpecialtiesService = require ('../services/doctorsSpecialties');
const { idSchema, createDoctorSpecialtySchema, updateDoctorSpecialtySchema } = require ('../utils/schemas/doctorsSpecialties');
const validationHandler = require ('../utils/middleware/validationHandler');

function doctorsSpecialtiesApi(app) {
    const router = Router();
    app.use("/api/doctorsSpecialties", router);

    const doctorsSpecialtiesService = new DoctorsSpecialtiesService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const doctorsSpecialties = await doctorsSpecialtiesService.getDoctorsSpecialties({ tags });
            //throw new Error('Error getting doctors specialties');
            res.status(200).json({
                data: doctorsSpecialties,
                message: 'doctor specialties retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const doctorsSpecialty = await doctorsSpecialtiesService.getDoctorsSpecialty({ id });
            res.status(200).json({
                data: doctorsSpecialty,
                message: 'doctor specialty retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createDoctorSpecialtySchema), async function (req, res, next) {
        const { body: doctorSpecialty } = req;
        try {
            ;
            const createdDoctorSpecialtyId = await doctorsSpecialtiesService.createDoctorSpecialty({ doctorSpecialty });
            res.status(200).json({
                data: createdDoctorSpecialtyId,
                message: 'doctor specialty created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateDoctorSpecialtySchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: doctorsSpecialty } = req;
        try {
            const updatedDoctorSpecialtyId = await doctorsSpecialtiesService.updateDoctorSpecialty({ id, doctorsSpecialty });
            res.status(200).json({
                data: updatedDoctorSpecialtyId,
                message: 'doctor specialty updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedDoctorSpecialtyId = await doctorsSpecialtiesService.deleteDoctorSpecialty({ id });
            res.status(200).json({
                data: deletedDoctorSpecialtyId,
                message: 'doctor specialty deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = doctorsSpecialtiesApi;