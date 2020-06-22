var http = require('http')
var config = require('./config')
var router = require('./router')
var render = require('./common/render')

var server = http.createServer()

server.on('request', function(req, res) {

  render(res)


})

server.listen(config.port, config.host, function() {
  console.log('server is listening at port ' + config.port)
  console.log('pleast visit http://' + config.host + ':' + config.port)
})
