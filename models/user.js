const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: 'You need to provide a username!',
        trim: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });

UserSchema.virtual('friendCount').get(function () {
    return this.friends.reduce((total, friends) => total + friends.length + 1, 0);
    // return this.friends.reduce((total, friends) => total + user.friends.length + 1, 0);
});

const User = model('User', UserSchema);

// export the User model
module.exports = User;