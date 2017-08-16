
//var admin = require("firebase-admin");
/*var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DDOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID
  };
  */
  // Initialize Firebase
var config = {

};

firebase.initializeApp(config);

const auth = firebase.auth();
const email = 'j@gmail.com';
const pass = '987654';
//const promise0 = auth.createUserWithEmailAndPassword(email,pass);
//promise0.catch(e => console.log(e.message));
//auth.signOut();
const promise = auth.signInWithEmailAndPassword(email, pass);
promise.catch(e => console.log(e.message));

console.log("j Logged In")






  const dbObject = firebase.database().ref().child('object');
  const dbRefList = dbObject.child('Hobbies');

  dbObject.on("value",function (snapshot){
    var newAttr = snapshot.val();
    infoBox.html(JSON.stringify(newAttr, null, 5));

  });

  dbRefList.on("child_added",function (snapshot){
    var newAttr = snapshot.val();
    //infoList.html(newAttr);

  });

  //sync changes
/*  dbObject.on('value', function(snap){
    infoBox.html(snap.val());

  });*/
