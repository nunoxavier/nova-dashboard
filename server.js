const express = require('express');
const path = require('path');
const http = require("http");
const socketIo = require("socket.io");
const { networkInterfaces } = require('os');

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

// Development info
const nets = networkInterfaces();
const ipAddresses = Object.create(null); // Or just '{}', an empty object

for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if (net.family === 'IPv4') {
            if (!ipAddresses[name]) {
                ipAddresses[name] = [];
            }
            ipAddresses[name].push(net.address);
        }
    }
}

// Actual app
const UPDATE_INTERVAL = 80; // should be ~50-100
let state = {
    lights: {
        leftTurn: false,
        rightTurn: false,
        hazard: false,
        lights: false,
        highBeam: false,
        lowBeam: false,
        oilPressure: false,
        battery: false,
        parking: false
    },
    rpm: 0,
    speed: 0,
    odometer: 73928.7,
    trip: 120.3,
    waterTemperature: 0, // ºC
    fuelLevel: 0, // %
    oilTemperature: 0, // ºC
    development: {
        ips: ipAddresses,
    }
};

// Testing only
let i = 0,
    toggle = false;
setInterval(function () {
    if (state.rpm + 100 > 8000) {
        state.rpm = 0;
    }
    let speed = Number(((Math.random() * 10) + Math.random()).toFixed(0));
    if (state.speed + speed > 200) {
        state.speed = 0;
    }
    if (state.fuelLevel + 1 > 100) {
        state.fuelLevel = 0;
    }
    if (state.waterTemperature + 5 > 120) {
        state.waterTemperature = 0;
    }
    if (state.fuelLevel + 5 > 100) {
        state.fuelLevel = 0;
    }
    state.rpm += 100;
    state.speed += speed;
    state.fuelLevel += 5;
    state.waterTemperature += 5;

    // if (state.fuelLevel % 5 === 0) {
    //     state.lights.leftTurn = !state.lights.leftTurn;
    // }
    // if (state.fuelLevel % 10 === 0) {
    //     state.lights.rightTurn = !state.lights.rightTurn;
    // }
    if (i % 15 === 0) {
        toggle = !toggle;
        state.lights = {
            hazard: toggle,
            lights: toggle,
            highBeam: toggle,
            lowBeam: toggle,
            oilPressure: toggle,
            battery: toggle,
            parking: toggle
        };
    }
    i++;

}, 300);

// Start socket server
let timer;
io.on('connection', function (socket) {
    console.log('New component connected!');
    if (timer) {
        clearInterval(timer);
    }

    //send data to client
    timer = setInterval(function () {
        // console.log("EMIT", state);
        socket.emit('data', state);
    }, UPDATE_INTERVAL);

    socket.on("disconnect", () => {
        console.log("Component disconnected");
        clearInterval(timer);
    });
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
