var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket)=>{
    console.log(socket)
})

http.listen(3000, () => {
    console.log(`Server is running on 3000`)
})
