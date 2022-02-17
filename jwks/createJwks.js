const fs = require("fs");
const jose = require("node-jose");

const keyStore = jose.JWK.createKeyStore();

keyStore.generate("RSA", 2048, { alg: "RS256", use: "sig" }).then((result) => {
  // Public key
  console.log(result.keystore.toJSON())

  // Using toJson(true) when you want to retrieve attributes of private key
  console.log(result.keystore.toJSON(true))
  fs.writeFileSync(
    "keys.json",
    JSON.stringify(result.keystore.toJSON(), null, "  ")
  )
})