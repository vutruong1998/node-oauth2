const base64 = Buffer.from('clientId:clientSecret').toString('base64')
const clientCredential = Buffer.from('confidentialApplication:topSecret').toString('base64')
console.log(clientCredential)