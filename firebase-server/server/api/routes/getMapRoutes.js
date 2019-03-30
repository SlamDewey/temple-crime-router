const express = require('express');
const router = express.Router();
const fs     = require('fs');

router.post('/', getMapRoutes);
module.exports = router;

// set up firebase connection
// -------------------------
const admin = require("firebase-admin");
const path  = require('path')

var serviceAccount = require("./owlhacks-b1e41-firebase-adminsdk.json");
admin.initializeApp({
	credential : admin.credential.cert(serviceAccount),
	databaseURL: "https://owlhacks-b1e41.firebaseio.com"
});

var db = admin.database();
// -------------------------

async function get_map() {
	var ref = db.ref("map/");
	var map = {}
    return Promise.resolve(ref.once("value"))
}

function getMapRoutes(req, res, next) {
    if(!req.body) {res.status(400).json({message:'payload is empty!'});}
    
    console.log("responding!")
    
    var map = {}
    get_map().then(v => {
        map = v
        res.status(200).json({
            message: JSON.stringify(map)
        })
    })

    
}