const dateFormat = require('../utils/dateFormat');
const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema(
    {
        // set custom id to avoid confusion with parent comment _id
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280,
        },
        username: {
            type: String,
            required: 'You need to provide a username!',
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength:1,
        maxlength: 280,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'You need to provide a username!',
        trim: true
    },
    reactions: [ReactionSchema],
},
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    });

ThoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.reduce((total, reactions) => total + reactions.length + 1, 0);
});

const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;