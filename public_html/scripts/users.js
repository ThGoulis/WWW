const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        token: { type: String },
    }
    , { collection: 'users' }
)

const model = mongoose.model('UserSchema', UserSchema);

module.exports = model 