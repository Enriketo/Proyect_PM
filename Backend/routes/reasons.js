const { Router } = require('express');
const ReasonsService = require('../services/reasons');
const { idSchema, createReasonSchema, updateReasonSchema } = require('../utils/schemas/reasons');
const validationHandler = require('../utils/middleware/validationHandler');

function ReasonsApi(app) {
    const router = Router();
    app.use("/api/reasons", router);

    const reasonsService = new ReasonsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const reasons = await reasonsService.getReasons({ tags });
            //throw new Error('Error getting Appointments reasons);
            res.status(200).json({
                data: reasons,
                message: 'reasons retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const reason = await reasonsService.getReason({ id });
            res.status(200).json({
                data: reason,
                message: 'reason retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createReasonSchema,
), async function (req, res, next) {
        const { body: reason } = req;
        try {
            ;
            const reasonId = await reasonsService.createReason({ reason });
            res.status(200).json({
                data: reasonId,
                message: 'reason created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateReasonSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: reason } = req;
        try {
            const updatedReasonId = await reasonsService.updateReason({ id, reason });
            res.status(200).json({
                data: updatedReasonId,
                message: 'reason updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedReasonId = await reasonsService.deleteReason({ id });
            res.status(200).json({
                data: deletedReasonId,
                message: 'reason deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = ReasonsApi;