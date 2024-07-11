const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

// create new schema for the user
const userSchema = mongoose.Schema({
    username: {type: String, required: true},
    email: {type:String, required:true, unique:true},
    password: {type: String, required: true},
    name: {type: String, required:true}
});

// Hash password before saving the user
userSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        try{
            user.password = await bcrypt.hash(user.password, 8);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};


// Create new collection
// module.exports = mongoose.model("User", userSchema);

const User = mongoose.model('User',userSchema);
module.exports = User;



// {
    // "username":"user1",
    // "email":"user1@gmail.com",
    // "password":"user1"
// }