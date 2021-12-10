/*var admin = require("firebase-admin");

var serviceAccount = require("./firegram-1d78f-firebase-adminsdk-3k9j1-f548402b8a.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  //databaseURL: "https://firegram-1d78f-default-rtdb.firebaseio.com"
});
const uid ='wW1vX30MlbUKgX2pyDRSBVCVPpk1';
const additionalClaims = {
  premiumAccount: true
};
admin.auth().createCustomToken(uid, additionalClaims)
.then((customToken) => {
  console.log(customToken) ;
})
.catch((error) => {
  console.log('error creating custon token: ', error) 
});*/