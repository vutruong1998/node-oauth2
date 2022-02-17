const jwt = require('jsonwebtoken')

module.exports = {
    async scopeRead (accToken) {
        const decoded = jwt.verify(accToken, 'shhhhh')

        // console.log(decoded, decoded.scope.split(' '))

        if (decoded.scope.split(' ').includes('read')) {
            return decoded
        }
        // const SCOPES = ['read']
        // if (decoded.scope.split(' ').some(s => SCOPES.includes(s))) {
        //     return decoded
        // }
        return false
    }
}