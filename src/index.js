const express = require('express');

const app = express();

const connect = require('./config/databse');

const TweetRepository = require('./repository/tweet-repository');

const Comment = require('./models/comment');

const Tweet = require('./models/tweeet');


app.listen(3000 , async () => {
    console.log("Server has been started");
    await connect();
    console.log("Database has been connected");

    //Update by repository:
    // const tweetRepo = new TweetRepository();
    // //update:
    // const tweet = await tweetRepo.update('64170a101ec633307c91e90d',
    //                       {userEmail : 'sangha@gmail.com'});
    // // Update by repository:
    // const tweetRepo = new TweetRepository();
    // //update:
    // const tweet = await tweetRepo.create({content : 'Content with comments'});
    // tweet.comments = 'This is a comment associated';
    // await tweet.save;

    // // Update by repository:
    // const tweetRepo = new TweetRepository();
    // update:
    // const tweet = await tweetRepo.create({content : 'Third Tweet'});
    // const comment = await Comment.create({content : 'Comment with third tweet'});
    // tweet.comments.push(comment);
    // await tweet.save();

    // const tweet = await tweetRepo.get('64172244681fcb4885fc3430');
    // const tweet = await tweetRepo.getByComments('64174211a50d00f10ce082ee');

    // const tweet = await Tweet.findById('64174266b0e15713742107e8').populate('comments');

    // const tweet = await tweetRepo.destroy('64172244681fcb4885fc3430');
    // const tweet = await tweetRepo.destroy('6417200d9281de4af40691d3');


    // const tweet = await Tweet.create({
    //     content : 'Third Tweets',
    // });


    //Print all tweets:
    // const tweets = await Tweet.find({userEmail : 'chetan@gmail.com'});


    //Update Tweet:
    // const tweet = await Tweet.findById('641709c679d7ccdec29ae6a9');
    // tweet.userEmail = 'pratap@gmail.com';
    // await tweet.save;
    // console.log(tweet); 
});