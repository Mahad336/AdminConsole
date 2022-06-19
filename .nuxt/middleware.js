const middleware = {}

middleware['auth'] = require('..\\src\\middleware\\auth.ts')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['isAdmin'] = require('..\\src\\middleware\\isAdmin.ts')
middleware['isAdmin'] = middleware['isAdmin'].default || middleware['isAdmin']

middleware['nonAuth'] = require('..\\src\\middleware\\nonAuth.ts')
middleware['nonAuth'] = middleware['nonAuth'].default || middleware['nonAuth']

export default middleware
