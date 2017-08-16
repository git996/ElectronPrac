
var Twitter = require('twitter');
var key  = " ";
var playList1 = "https://open.spotify.com/embed?uri=spotify:user:12186483102:playlist:3isWRvt7dz3sE45kQy6BP7";
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var userID;
client.get('users/lookup', {screen_name:'iamnewdev'}, function(error, data ,response){
  if(!error){
    console.log('asdas')
    console.log(data[0].id_str);
    userID = data[0].id_str;
  }
  else{
    console.log('nahhhh')
  }

});
//default stream
var stream = "";
var tweetCount = 0;
//stream Tweets and notify

function streamTweets(){
  stream = client.stream('statuses/filter', {follow: userID});
  stream.on('data', function(event) {
    console.log(event)
    infoBox.html(event.user.id + ": " +  event.text);
    tweetCount = tweetCount+1;
    wake.html(tweetCount);
    //desktop notification
    /*let myNotifcation = new Notification(event.user.screen_name, {
     body: event&&event.text
      })

   myNotification.onclick = () => {
     console.log('Notification clicked')
   }*/

  });

  stream.on('error', function(error) {
    throw error;
  });

}

//initial stream
 streamTweets()

//create input
var trackKey =  maincontent.append("input").attr("class","ui text").attr("id","trackKey").attr("placeholder","Track tweets e.g. paris");

//create a button to get and track input word
var tweetKey = maincontent.append("button").on("click", newKey).attr("class", "ui blue button")
    .attr("id", "tweetKey").html("Track Tweets ")
    .append("a").append("i").attr("class","larg twitter icon").style("color","aquamarine");


function newKey(){

  stream.destroy() //destror previous open stream
  // redifine new tracking keyword and restart streaming.
  tweetCount = 0;
  wake.html(tweetCount);

  key = document.getElementById('trackKey').value;

  if (key == ""){


    document.getElementById('trackKey').placeholder = "this can't be blank!!"
    document.getElementById('spotf1').src = playList1;

    infoBox.html("No keyword to track!!");

  }
  else{
  sleepbtn.html(key);
  streamTweets()
  infoBox.html("Tracking Tweets with Keyrowod: "+ "<b>"+key);

   }
}
