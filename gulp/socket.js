'use strict';

var gulp = require('gulp');

var paths = gulp.paths;

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){
  res.sendFile(__dirname+'/samuel.html');
});

io.on('connection',function(socket){
  console.log('someone has connected');
  socket.on('ts',function(){
  	console.log(socket.client.id,'sent ts to us');
  	socket.emit('x');
  });
});


gulp.task('socket', function () {
  http.listen(1707,function() {
    console.log('its working on 1707');
  });
});