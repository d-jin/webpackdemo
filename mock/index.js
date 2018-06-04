const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use((req, res, next) => {
    next();
})

server.listen(9101, () => {
    console.log('接口服务启动成功。。。')
})

require('fs').readdirSync(require('path').join(__dirname + '/data'))
    .forEach((file) => {
        require('./data/' + file)(server);
    });


