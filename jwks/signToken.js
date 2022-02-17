const fs = require("fs");

const jose = require("node-jose");

const main = async () => {

    const JWKeys = fs.readFileSync("keys.json");

    const keyStore = await jose.JWK.asKeyStore(JWKeys.toString());
    
    // const [key] = keyStore.all({ use: "sig" });
    const key = keyStore.get({ kid: 'v82irmFXNDsBVUQFI7eInSBzpX2v6Mus4jMCmgPHtEQ', kty: 'RSA', use: 'sig' });

    
    const opt = { compact: true, jwk: key, fields: { typ: "jwt" } };
    
    const payload = JSON.stringify({
        exp: Math.floor((Date.now() + 360000) / 1000),
        iat: Math.floor(Date.now() / 1000),
        sub: "test",
    });
    
    const token = await jose.JWS.createSign(opt, key).update(payload).final();
    console.log(token)
}
main()