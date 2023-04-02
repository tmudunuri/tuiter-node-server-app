import mongoose from 'mongoose';

const date = new Date();
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const schema = mongoose.Schema({
    tuit: { type: String, default: 'Dummy Tuit' },
    topic: { type: String, default: 'Space' },
    username: { type: String, default: 'NASA' },
    handle: { type: String, default: '@nasa' },
    time: { type: String, default: date.getDate().toString() + " " + monthNames[date.getMonth()] + " " + date.getFullYear().toString() },
    image: { type: String, default: 'nasa.jpeg' },
    title: { type: String, default: 'This is a dummy Title' },
    likes: { type: Number, default: 0 },
    liked: { type: Boolean, default: false },
    dislikes: { type: Number, default: 0 },
    disliked: { type: Boolean, default: false },
    replies: { type: Number, default: 0 },
    retuits: { type: Number, default: 0 },
}, { collection: 'tuits' });
export default schema;