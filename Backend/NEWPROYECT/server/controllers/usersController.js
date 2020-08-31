const model = require('../../models/index');

const createUser = async(req, res) => {
    try {
        const User = await model.Users.create(req.body);
        return res.status(201).json(User);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const getUserById = async(req, res) => {
    try {
        const User = await model.Users.findByPk(req.params.id);
        return res.status(201).json(User)
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const getUsers = async(req, res) => {
    try {
        const Users = await model.Users.findAll();
        return res.status(201).json(Users)
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const updateUser = async(req, res) => {
    try {
        await model.Users.update(req.body, { where: { id: req.params.id } });
        return res.status(201).json(await model.Users.findByPk(req.params.id))
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const deleteUser = async(req, res) => {
    try {
        await model.Users.destroy({ where: { id: req.params.id}});
        return res.status(201).json(await model.Users.findAll())
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

module.exports = {
    createUser,
    getUserById,
    getUsers,
    updateUser,
    deleteUser
};
