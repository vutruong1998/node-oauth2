const OAuth2Server = require('oauth2-server'),
	Request = OAuth2Server.Request,
	Response = OAuth2Server.Response

module.exports = async (req, res, next) => {
	const request = new Request(req);
	const response = new Response(res);

	return oauth.authenticate(request, response)
		.then((token) => {
			if (token) next()
		}).catch((err) => {
			res.status(err.code || 500).json(err)
		})
}
