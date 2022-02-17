const jwt = require('jsonwebtoken')

// DUMMY DATA
const config = {
  	// for password, refresh_token grant
	clients: [{
		id: 'application',
		clientId: 'clientId',
		clientSecret: 'clientSecret',
		grants: [
			'password',
			'refresh_token'
		],
		redirectUris: []
	}],
	// for client_credentials, password grant
	confidentialClients: [{
		clientId: 'confidentialApplication',
		clientSecret: 'topSecret',
		grants: [
			'password',
			'client_credentials'
		],
		redirectUris: []
	}],
	tokens: [],
	users: [{
		username: 'truong',
		password: 'p@ssword'
	}]
}

/*
 * Methods used by all grant types.
 */

const getAccessToken = (token) => {
	const tokens = config.tokens.filter((savedToken) => {
		return savedToken.accessToken === token
	})
	return tokens[0]
}

const getClient = (clientId, clientSecret) => {
	const clients = config.clients.filter((client) => {
		return client.clientId === clientId && client.clientSecret === clientSecret
	})
	const confidentialClients = config.confidentialClients.filter((client) => {
		return client.clientId === clientId && client.clientSecret === clientSecret
	})
	return clients[0] || confidentialClients[0]
}

const saveToken = (token, client, user) => {
	token.client = {
		id: client.clientId
	}
	token.user = {
		username: user.username
	}
	config.tokens.push(token)
	return token
}

// override generate access token
const generateAccessToken = (client, user, scope) => {
	// console.log(scope)
	let accessToken
	accessToken = jwt.sign({ sub: 'sub', scope }, 'shhhhh')
	return accessToken
}

/*
 * Method used only by password grant type.
 */

const getUser = (username, password) => {
	const users = config.users.filter((user) => {
		return user.username === username && user.password === password
	})
	return users[0]
}

/*
 * Method used only by client_credentials grant type.
 */

const getUserFromClient = (client) => {
	const clients = config.confidentialClients.filter((savedClient) => {
		return savedClient.clientId === client.clientId && savedClient.clientSecret === client.clientSecret
	})
	return clients.length
}

/*
 * Methods used only by refresh_token grant type.
 */

const getRefreshToken = (refreshToken) => {
	const tokens = config.tokens.filter((savedToken) => {
		return savedToken.refreshToken === refreshToken
	})
  if (!tokens.length) return

	return tokens[0]
}

const revokeToken = (token) => {
	config.tokens = config.tokens.filter((savedToken) => {
		return savedToken.refreshToken !== token.refreshToken
	})
	const revokedTokensFound = config.tokens.filter((savedToken) => {
		return savedToken.refreshToken === token.refreshToken
	})
	return !revokedTokensFound.length
}

const validateScope = (user, client, scope) => {
	const VALID_SCOPES = ['read', 'write', 'speak']

	if (!scope.split(' ').every(s => VALID_SCOPES.indexOf(s) >= 0)) {
	  return false
	}
	return scope
}

module.exports = {
	generateAccessToken,
	getAccessToken,
	getClient,
	saveToken,
	getUser,
	getUserFromClient,
	getRefreshToken,
	revokeToken,
	validateScope
}
