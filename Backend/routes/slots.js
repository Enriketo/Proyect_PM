const { Router } = require('express');
const SlotsService = require('../services/slots');
const { idSchema, createSlotSchema, updateSlotSchema } = require('../utils/schemas/reasons');
const validationHandler = require('../utils/middleware/validationHandler');

function SlotsApi(app) {
    const router = Router();
    app.use("/api/slots", router);

    const slotsService = new SlotsService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const slots = await slotsService.getSlots({ tags });
            //throw new Error('Error getting slots);
            res.status(200).json({
                data: slots,
                message: 'slots retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const slot = await slotsService.getSlot({ id });
            res.status(200).json({
                data: slot,
                message: 'slot retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createSlotSchema
), async function (req, res, next) {
        const { body: slot } = req;
        try {
            ;
            const slotId = await slotsService.createSlot({ slot });
            res.status(200).json({
                data: slotId,
                message: 'slot created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:id", validationHandler({ id: idSchema }, 'params'), validationHandler(updateSlotSchema), async function (req, res, next) {
        const { id } = req.params;
        const { body: slot } = req;
        try {
            const updatedSlotId = await slotsService.updateSlot({ id, slot });
            res.status(200).json({
                data: updatedSlotId,
                message: 'slot updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:id", validationHandler({ id: idSchema }, 'params'), async function (req, res, next) {
        const { id } = req.params;
        try {
            const deletedSlotId = await slotsService.deleteSlot({ id });
            res.status(200).json({
                data: deletedSlotId,
                message: 'slot deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = SlotsApi;