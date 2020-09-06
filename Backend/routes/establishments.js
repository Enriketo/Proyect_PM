const { Router }  = require('express');
const EstablishmentsService  = require('../services/establishments');
const { idSchema, createEstablishmentSchema, updateEstablishmentSchema }  = require('../utils/schemas/establishments');
const validationHandler  = require('../utils/middleware/validationHandler');

function establishmentsApi(app) {
    const router = Router();
    app.use("/api/establishments", router);

    const establishmentService = new EstablishmentsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const establishments = await establishmentService.getEstablishments({ tags });
            //throw new Error('Error getting establishments');
            res.status(200).json({
                data: establishments,
                message: 'establishments retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const establishment = await establishmentService.getEstablishment({ id });
            res.status(200).json({
                data: establishment,
                message: 'establishment retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createEstablishmentSchema), async function (req, res, next) {
        const { body: establishment } = req;
        try {
            ;
            const establishmentId = await establishmentService.createEstablishment({ establishment });
            res.status(200).json({
                data: establishmentId,
                message: 'establishment created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateEstablishmentSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: establishment } = req;
        try {
            const updateEstablishmentId = await establishmentService.updateEstablishment({ id, establishment });
            res.status(200).json({
                data: updateEstablishmentId,
                message: 'establishment updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deleteEstablishmentId = await establishmentService.deleteEstablishment({ id });
            res.status(200).json({
                data: deleteEstablishmentId,
                message: 'establishment deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = establishmentsApi;