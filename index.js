var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket){
    console.log("a user connected");
    //Message from react-redux
    socket.on("message", function(msg){
        console.log(msg);
        //Send Message that dispatch action setName
        socket.emit("message", "Pepito Perez");
    });
});

http.listen(3000, function(){
    console.log("listen on *:3000");
})