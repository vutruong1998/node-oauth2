const express = require('express'),
	bodyParser = require('body-parser'),
	OAuth2Server = require('oauth2-server'),
	Request = OAuth2Server.Request,
	Response = OAuth2Server.Response

const { scopeRead } = require('./check_scope.js')
const authenticateMid = require('./middleware.js')
const fs = require("fs");
const jose = require("node-jose");

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

oauth = new OAuth2Server({
	model: require('./model.js'),
	accessTokenLifetime: 60 * 60,
	allowBearerTokensInQueryString: true
})

const getToken = (req, res) => {
	const request = new Request(req);
	const response = new Response(res);

	return oauth.token(request, response)
		.then((token) => {
			return res.json(token)
		}).catch((err) => {
			return res.status(err.code || 500).json(err)
		})
}

app.post('/oauth2/token', getToken)

app.get('/', authenticateMid, (req, res) => {
	return res.send('Welcome!')
})

// Oauth2 scope dùng để giới hạn 1 ứng dụng truy cập vào resource server hoặc Api
// 1 ứng dụng có thể yêu cầu 1 hoặc nhiều scope (ex: read, write) -> authorization server -> access token kem scope tuong ung
// 
app.get('/api/read', authenticateMid, async (req, res) => {
	const { authorization } = req.headers
	const accessToken = authorization.split(' ')[1] 
	const scope = await scopeRead(accessToken)
	if (!scope) {
		return res.status(403).send('Not permission!')
	}
	return res.send('Read')
})

app.get('/.well-known/jwks.json', async (req, res) => {
	const ks = fs.readFileSync("jwks/keys.json");

	const keyStore = await jose.JWK.asKeyStore(ks.toString());

	res.send(keyStore.toJSON());
})


app.listen(3000)
