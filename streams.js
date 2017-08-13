
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var stream = client.stream('statuses/filter', {track: 'Quadratic Equation'});
stream.on('data', function(event) {
  //document.write(event && event.text);
  //info.html(event && event.text);
  //desktop notification
  let myNotification = new Notification('New Tweet', {
   body: event&&event.text
    })

 myNotification.onclick = () => {
   console.log('Notification clicked')
 }

});

stream.on('error', function(error) {
  throw error;
});
