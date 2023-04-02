import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    topic: String,
    username: String,
    handle: String,
    time: String,
    image: String,
    title: String,
    likes: Number,
    liked: Boolean,
    dislikes: Number,
    disliked: Boolean,
    replies: Number,
    retuits: Number,
}, { collection: 'tuits' });
export default schema;