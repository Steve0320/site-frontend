/*
 * Proxy /api endpoint to rails server running on port 3001
 */

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(proxy('/api', {target: 'http://localhost:3001/'}));
};