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

tweetSchema.pre('save' , function(next){
    console.log("Inside hook");
    this.content = this.content + " along with hook";
    next();
});

const Tweet = mongoose.model('Tweet',tweetSchema);
module.exports = Tweet;