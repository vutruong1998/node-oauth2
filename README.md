- Example: localhost:3000/oauth/token
- Headers
{
    "Authorization": "Basic " + Buffer.from("clientId:clientSecret").toString("base64"),
    "Content-Type": "application/x-www-form-urlencoded"
}
- Body
{
    "username": "truong",
    "password": "p@ssword",
    "grant_type": "password",
    "scope": "read"
}
