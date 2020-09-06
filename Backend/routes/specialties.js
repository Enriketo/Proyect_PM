const { Router } = require('express');
const SpecialtiesService = require('../services/specialties');
const { idSchema, createSpecialtySchema, updateSpecialtySchema } = require('../utils/schemas/reasons');
const validationHandler = require('../utils/middleware/validationHandler');

function SpecialtiesApi(app) {
    const router = Router();
    app.use("/api/specialties", router);

    const specialtiesService = new SpecialtiesService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const specialties = await specialtiesService.getSpecialties({ tags });
            //throw new Error('Error getting specialties);
            res.status(200).json({
                data: specialties,
                message: 'specialties retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const specialty = await specialtiesService.getSpecialty({ id });
            res.status(200).json({
                data: specialty,
                message: 'specialty retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createSpecialtySchema
), async function (req, res, next) {
        const { body: specialty } = req;
        try {
            ;
            const specialtyId = await specialtiesService.createSpecialty({ specialty });
            res.status(200).json({
                data: specialtyId,
                message: 'specialty created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateSpecialtySchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: specialty } = req;
        try {
            const updatedSpecialtyId = await specialtiesService.updateSpecialty({ id, specialty });
            res.status(200).json({
                data: updatedSpecialtyId,
                message: 'specialty updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedSpecialtyId = await specialtiesService.deleteSlot({ id });
            res.status(200).json({
                data: deletedSpecialtyId,
                message: 'specialty deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = SpecialtiesApi;