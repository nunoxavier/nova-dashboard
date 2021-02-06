const express = require('express');
const path = require('path');
const http = require("http");
const socketIo = require("socket.io");

const app = express();

// Expose index and assets
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    }
});

// Actual app
const UPDATE_INTERVAL = 100;
let state = {
    lights: {
        leftTurn: false,
        rightTurn: false,
        lights: false,
        highBeam: false,
        lowBeam: false,
        oilPressure: false,
        battery: false,
        parking: false
    },
    rpm: 0,
    kph: 0,
    waterTemperature: 0, // ºC
    fuelLevel: 0, // %
    oilTemperature: 0, // ºC
};

// Start socket server
let timer;
io.on('connection', function (socket) {
    console.log('New component connected!');
    if (timer) {
        clearInterval(timer);
    }

    //send data to client
    timer = setInterval(function () {
        socket.emit('data', state);
    }, UPDATE_INTERVAL);

    socket.on("disconnect", () => {
        console.log("Component disconnected");
        clearInterval(timer);
    });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
