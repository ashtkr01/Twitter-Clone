const Tweet = require('../models/tweeet');

class TweetRepository{
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getByComments(id){
        try {
            //Use lean() in order to return a javascript object:
            const tweet = await Tweet.findById(id).populate({path : 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update(id , data){
        try {
            const tweet = await Tweet.findByIdAndUpdate(id , data , {new : 'true'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async destroy(id){
        try {
            const response = await Tweet.findByIdAndRemove(id);
            return response;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset , limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository;