import mongoose from 'mongoose';
const schema = mongoose.Schema({
    topic: String,
    userName: String,
    time: String,
    title: String,
    image: String,
    userIcon: String,
    handle: String,
    tuit: String,

    liked: Boolean,
    disliked: Boolean,

    replies: Number,
    retuits: Number,
    likes: Number,
    dislikes: Number,
}, {collection: 'tuits'});
export default schema;
