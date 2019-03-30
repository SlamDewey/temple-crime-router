var admin   = require("firebase-admin");
const  fs   = require('fs');
import path = require('path')

var serviceAccount = require("./owlhacks-b1e41-firebase-adminsdk.json");

admin.initializeApp({
	credential : admin.credential.cert(serviceAccount),
	databaseURL: "https://owlhacks-b1e41.firebaseio.com"
});

var db = admin.database();

function pull_data() {
	var ref = db.ref("users/");
	// var dir = path.join('data/', version)
	// fs.mkdirSync(dir, {recursive: true}, (err) => {
	// 	if(err) throw err;
	// });
	// fs.writeFileSync("data/readme.txt", "run 'node pull_data' to populate this folder", function(err) {
	// 	if(err) throw err;
	// });
	ref.once("value", function(data) {
		data.forEach(function(data) {
			// fs.writeFile(path.join(dir,data.key + ".json"), JSON.stringify(data.val()), function(err) {
			// 	if(err) throw err
			// 	console.log("saved file!")
            // })
            console.log(data.val())
		});
		console.log("done!")
	});
}

function writeUserData(userId, name, email, imageUrl) {
    db.ref('users/' + userId).set({
        username       : name,
        email          : email,
        profile_picture: imageUrl
    });
}


// writeUserData(0, "muhsin", "muhsinfatih@temple.edu", null)
pull_data()