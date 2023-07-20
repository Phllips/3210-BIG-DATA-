show dbs

use test
db.createCollection('Tweets') //created collection

show collections

db.Tweets.find() //imported the json file with the tweets manually q3

db.Tweets.find({"user.name":"user 01"}) //finds 1st user with name "user 01" q4

db.Tweets.update({"user.name": "user 34"},{$set:{"tags": "My number 1 Tweet"}}) //my fav tweet q5
 
db.Tweets.find({"tags": 'My number 1 Tweet'}) //checking the fav tweet

// db.Tweets.save({_id : "5e634ac7cfee1307d884f14c", "tags": "My number 2 Tweet"})
      
//db.Tweets.find({"tags": 'My number 2 Tweet'}) //not working atm


db.Tweets.find({"tags":{$exists:true}}) //q6

db.Tweets.find({"user.location": "Internet"}).limit(5) //q7

db.Tweets.find({"user.id":{$gt: 200000000000, $lt: 300000000000}}) //q8
//the question says between 2 and 3 billion but the id's are 100's of billions so i changed it

db.Tweets.find({"created_at": /^Thu/ },{_id: 0, id_str: 1, "user.name": 1, "user.location": 1}) //q9

db.Tweets.find({"text": /health/}) //q10
