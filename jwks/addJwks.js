const fs = require("fs");
const jose = require("node-jose");

const main = async () => {
    const ks = fs.readFileSync('keys.json')
    const keyStore = await jose.JWK.asKeyStore(ks.toString())
    await keyStore.generate('RSA', 2048, { alg: 'RS256', use: 'sig' })
    // true -> tra private key
    const json = keyStore.toJSON()
    json.keys = json.keys.reverse()
    fs.writeFileSync('keys.json', JSON.stringify(json, null, '  '))
}
main()