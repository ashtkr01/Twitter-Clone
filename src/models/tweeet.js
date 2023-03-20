const mongoose = require('mongoose');

const tweetSchema = new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    userEmail : {
        type : String
    },
    comments : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Comment'
        }
    ]
} , {timestamps : true});

tweetSchema.virtual('Email_id_associated_with_content').get(function () {
                    return `${this.content} is created by the Email Id : ${this.userEmail}`;
                    });

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;