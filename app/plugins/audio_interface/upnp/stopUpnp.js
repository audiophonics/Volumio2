
var io=require('socket.io-client');

var socket= io.connect('http://localhost:3000');

var data={
    "endpoint":"audio_interface/upnp",
    "method":"startUpnpPlayback",
    "data": {}
};

socket.emit('callMethod',data);