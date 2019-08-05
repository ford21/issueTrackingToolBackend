const express = require('express');
const http = require('http');
const appConfig = require('./config/appConfig');
const mongoose = require('mongoose');
const fs = require('fs')
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const globalErrorMiddleware = require('./middleware/appErrorHandler')
const routeLoggerMiddleware = require('./middleware/routeLogger')
var helmet = require('helmet');
const app = express();

//middlewares
app.use(bodyParser.json())
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(globalErrorMiddleware.globalErrorHandler)
app.use(routeLoggerMiddleware.logIp)
app.use(helmet())

// Bootstrap models
let modelsPath = './models'
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log(file)
        require(modelsPath + '/' + file)
    }
})
// end Bootstrap models



// Bootstrap route
let routesPath = './routes'
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file");
        console.log(routesPath + '/' + file)
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route

// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler)

// end global 404 handler

/**
 * Create HTTP server.
 */

const server = http.createServer(app)
// start listening to http server
console.log(appConfig)
server.listen(appConfig.port)
server.on('error', onError)
server.on('listening', onListening)

// end server listening code
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            process.exit(1)
            break
        case 'EADDRINUSE':
            process.exit(1)
            break
        default:
            throw error
    }
}

function onListening() {
    var addr = server.address()
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    ('Listening on ' + bind)
    let db = mongoose.connect(appConfig.db.uri, { useNewUrlParser: true })
}

// handling mongoose connection error
mongoose.connection.on('error', function (error) {
    console.log('database connection error');
    console.log(error)

}); // end mongoose connection error

// handling mongoose success event
mongoose.connection.on('open', function (error) {
    if (error) {
        console.log("database error");
        console.log(error);

    } else {
        console.log("database connection open success");
    }

}); // end mongoose connection open handler