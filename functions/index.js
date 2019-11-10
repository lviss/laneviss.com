const functions = require('firebase-functions');
const request = require('request');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.ip = functions.https.onRequest((req, res) => {
  if (req.headers['user-agent'].indexOf('curl') != -1 || (req.query.plain && req.query.plain.toLowerCase() == 'true'))
    res.status(200).send(req.headers['fastly-client-ip']);
  else
    request('https://laneviss-com.firebaseapp.com', function(err, res2, body) {
      res.status(200).send(body);
    });
});
