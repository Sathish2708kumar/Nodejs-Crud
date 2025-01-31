const userModel = require('./userModel');

// Fetch data from the database
module.exports.getDataFromDBService = async () => {
    try {
        const result = await userModel.find({});
        return result; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Propagate the error to the caller
    }
};

// Create a new user in the database
module.exports.createUserDBService = async (userDetails) => {
    try {
        const userModelData = new userModel({
            name: userDetails.name,
            address: userDetails.address,
            phone: userDetails.phone,
        });

        const result = await userModelData.save();
        return result; // Return the created user document
    } catch (error) {
        console.error('Error creating user:', error);
        throw error; // Propagate the error to the caller
    }
};

// Update user details in the database

module.exports.updateUserDBService = async (id, userDetails) => {
    try {
        const updatedUser = await userModel.findByIdAndUpdate(id, userDetails, { new: true });
        return updatedUser; // Return the updated user document
    } catch (error) {
        console.error('Error updating user:', error);
        throw error; // Propagate the error to the caller
    }
};

// Delete a user from the database
module.exports.removeUserDBService = async (id) => {
    try {
        const result = await userModel.findByIdAndDelete(id);
        return result; // Return the deleted user document
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error; // Propagate the error to the caller
    }
};
