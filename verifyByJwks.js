const jwt = require('jsonwebtoken')
const jwksClient = require('jwks-rsa');
// node-jose lib for sign & verify jwks

const client = jwksClient({
  // jwksUri: 'http://127.0.0.1:4444/.well-known/jwks.json'
  jwksUri: 'http://127.0.0.1:3000/.well-known/jwks.json'
});

// const kid = 'public:6d21382c-b5e8-4bb5-b732-546687db52f2'
const kid = 'v82irmFXNDsBVUQFI7eInSBzpX2v6Mus4jMCmgPHtEQ'

// const getKey = (k, callback) => {
//   client.getSigningKey(k, function(err, key) {
//     const signingKey = key.publicKey || key.rsaPublicKey;
//     callback(signingKey)
//   });
// }
// getKey(kid, function (data) {
//   console.log(data)
// })

client.getSigningKey(kid, async (err, key) => {
  const signingKey = key.publicKey || key.rsaPublicKey;
  console.log(signingKey)

  // const token = 'eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6InY4MmlybUZYTkRzQlZVUUZJN2VJblNCenBYMnY2TXVzNGpNQ21nUEh0RVEifQ.eyJleHAiOjE2NDQzMTI2NzAsImlhdCI6MTY0NDMxMjMxMCwic3ViIjoidGVzdCJ9.WudQkRxnFjgxZj6nJxZmakM_jGN2LM8YcSPwZp0X3PgSVbZ94rLIxihRlG8U6NTs3qIEeBmiSXMQ7RRnmsaZEmWhIPLStpHokPmVTUJ5CctLj2I3AgF0ZSS_rZH3JBqgDXaZFA4hnON-_oNxVKVs9Qi5ezofx0YarhMmAFo2iU2UikWESEHzLwnHLGJkYIBzpq7HhMyLixPDaJon_xTqggvsv5eCjpgGca6_1cMTjANTwfCBYajmtPtzBKh-4IjIzBlURtx5CvrqyhgWOp6u0TBH-TTR6eILhDry4thqsKuC_20i8FXMuo7gVtC-sqGWKN8OHBW27AD-43MzVABljA'
  // const aaa = await jwt.verify(token, signingKey, {});
  // console.log(aaa)
});