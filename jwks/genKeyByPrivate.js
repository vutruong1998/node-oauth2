const jose = require("node-jose");
const fs = require('fs')

const private = fs.readFileSync('../private.pem')

jose.JWK.asKey(private, "pem").
    then(function(result) {
        console.log(result.keystore.toJSON())
    });