const model = require('../../models/index');

const createApplication = async(req, res) => {
    try {
        const application = await model.applications.create(req.body);
        return res.status(201).json(application);
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const getApplicationById = async(req, res) => {
    try {
        const application = await model.applications.findByPk(req.params.id);
        return res.status(201).json(application)
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const getApplications = async(req, res) => {
    try {
        const applications = await model.applications.findAll();
        return res.status(201).json(applications)
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const updateApplication = async(req, res) => {
    try {
        await model.applications.update(req.body, { where: { id: req.params.id } });
        return res.status(201).json(await model.applications.findByPk(req.params.id))
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

const deleteApplication = async(req, res) => {
    try {
        await model.applications.destroy({ where: { id: req.params.id}});
        return res.status(201).json(await model.applications.findAll())
    } catch (error) {
        return res.status(500).json({
            error: error.message,
        })
    }
};

module.exports = {
    createApplication,
    getApplicationById,
    getApplications,
    updateApplication,
    deleteApplication
};
