const userService = require('./userService');

// Get all employees
const getDataConntrollerfn = async (req, res) => {
    try {
        const employees = await userService.getDataFromDBService();
        res.status(200).send({ status: true, data: employees });
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ status: false, message: 'Error fetching data', error: error.message });
    }
};

// Create a new user
const createUserControllerFn = async (req, res) => {
    try {
        const status = await userService.createUserDBService(req.body);
        if (status) {
            res.status(201).send({ status: true, message: 'User created successfully' });
        } else {
            res.status(500).send({ status: false, message: 'Error creating user' });
        }
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ status: false, message: 'Error creating user', error: error.message });
    }
};

// Update a user
const updateUserController = async (req, res) => {
    try {
        console.log('User ID:', req.params.id);
        console.log('Update Data:', req.body);

        const result = await userService.updateUserDBService(req.params.id, req.body);
        if (result) {
            res.status(200).send({ status: true, message: 'User updated successfully' });
        } else {
            res.status(404).send({ status: false, message: 'User update failed. User not found.' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).send({ status: false, message: 'Error updating user', error: error.message });
    }
};

// Delete a user
const deleteUserController = async (req, res) => {
    try {
        console.log('User ID:', req.params.id);

        const result = await userService.removeUserDBService(req.params.id);
        if (result) {
            res.status(200).send({ status: true, message: 'User deleted successfully' });
        } else {
            res.status(404).send({ status: false, message: 'User deletion failed. User not found.' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).send({ status: false, message: 'Error deleting user', error: error.message });
    }
};

module.exports = { 
    getDataConntrollerfn, 
    createUserControllerFn, 
    updateUserController, 
    deleteUserController 
};
