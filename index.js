const express = require('express'),
	bodyParser = require('body-parser'),
	OAuth2Server = require('oauth2-server'),
	Request = OAuth2Server.Request,
	Response = OAuth2Server.Response

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
			res.json(token)
		}).catch((err) => {
			res.status(err.code || 500).json(err)
		})
}

const authenticateMid = (req, res, next) => {
	const request = new Request(req);
	const response = new Response(res);

	return oauth.authenticate(request, response)
		.then((token) => {
			if (token) next()
		}).catch((err) => {
			res.status(err.code || 500).json(err)
		})
}

app.post('/oauth/token', getToken)

app.get('/', authenticateMid, (req, res) => {
	res.send('Welcome!')
})

app.listen(3000)
