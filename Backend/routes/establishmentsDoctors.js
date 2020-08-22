import { Router } from 'express';
import EstablishmentsDoctorsService from '../services/establishmentsDoctors';

import { idSchema, createEstablishmentDoctorSchema, updateEstablishmentDoctorSchema } from '../utils/schemas/establishmentsDoctors';

import validationHandler from '../utils/middleware/validationHandler';

function establishmentsDoctorsApi(app) {
    const router = Router();
    app.use("/api/establishmentsDoctors", router);

    const establishmentDoctorService = new EstablishmentsDoctorsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const establishmentsDoctors = await establishmentDoctorService.getEstablishmentsDoctors({ tags });
            //throw new Error('Error getting establishments and doctors');
            res.status(200).json({
                data: establishmentsDoctors,
                message: 'establishments and doctors retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const establishmentDoctor = await establishmentDoctorService.getEstablishmentDoctor({ id });
            res.status(200).json({
                data: establishmentDoctor,
                message: 'establishment and doctor retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createEstablishmentDoctorSchema), async function (req, res, next) {
        const { body: establishmentDoctor } = req;
        try {
            ;
            const establishmentDoctorId = await establishmentDoctorService.createEstablishment({ establishmentDoctor });
            res.status(200).json({
                data: establishmentDoctorId,
                message: 'establishment and doctor created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateEstablishmentDoctorSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: establishmentDoctor } = req;
        try {
            const updateEstablishmentDoctorId = await establishmentDoctorService.updateEstablishmentDoctor({ id, establishmentDoctor });
            res.status(200).json({
                data: updateEstablishmentDoctorId,
                message: 'establishment and doctor updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deleteEstablishmentDoctorId = await establishmentDoctorService.deleteEstablishmentDoctor({ id });
            res.status(200).json({
                data: deleteEstablishmentDoctorId,
                message: 'establishment - doctor deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

export default establishmentsDoctorsApi;