const express = require('express');
const UsersService = require('../services/users');

const {
    IdSchema,
    createUserSchema,
    updateUserSchema
} = require('../utils/schemas/users');

const validationHandler = require('../utils/middleware/validationHandler');

function usersApi(app) {
    const router = express.Router();
    app.use("/api/users", router);

    const usersService = new UsersService();

    router.get("/", async function (req, res, next) {
        const { tags } = req.query;
        try {
            const users = await usersService.getUsers({ tags });
            //throw new Error('Error getting users');
            res.status(200).json({
                data: users,
                message: 'user retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.get("/:userId", validationHandler({ userId: IdSchema }, 'params'), async function (req, res, next) {
        const { userId } = req.params;
        try {
            const users = await usersService.getUser({ userId });
            res.status(200).json({
                data: users,
                message: 'user retrieved'
            });
        } catch (err) {
            next(err);
        };
    });

    router.post("/", validationHandler(createUserSchema), async function (req, res, next) {
        const { body: user } = req;
        try {
            ;
            const createdUserId = await usersService.createUser({ user });
            res.status(201).json({
                data: createdUserId,
                message: 'user created'
            });
        } catch (err) {
            next(err);
        };
    });

    router.put("/:userId", validationHandler({ userId: idSchema }, 'params'), validationHandler(updateUserSchema), async function (req, res, next) {
        const { userId } = req.params;
        const { body: user } = req;
        try {
            const updatedUserId = await usersService.updateUser({ userId, user });
            res.status(200).json({
                data: updatedUserId,
                message: 'users updated'
            });
        } catch (err) {
            next(err);
        };
    });

    router.delete("/:userId", validationHandler({ userId: userIdSchema }, 'params'), async function (req, res, next) {
        const { userId } = req.params;
        try {
            const deletedUserId = await usersService.deleteUser({ userId });
            res.status(200).json({
                data: deletedUserId,
                message: 'user deleted'
            });
        } catch (err) {
            next(err);
        };
    });
}

module.exports = usersApi;