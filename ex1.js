
var net = require('net');
var StreamFrame = require('./');

var server = net.createServer(function (socket) {
    var B = new StreamFrame();
    B.wrap(socket);
    B.set('lengthSize', 1); // uint8
    //B.set('lengthSize', 2); // uint16
    //B.set('lengthSize', 4); // uint32

    //B.set('offset', 2);    // size starts at 3rd byte.
    //B.set('ignore', true); // will emit data immedietely without framing.

    //B.set('bigEndian', true);  // uses bigEndian order
    B.set('bigEndian', false); // uses default little endian order


  B.on('data', function(data) {
    console.log(data);
  });
  B.on('error', function(err) {
    console.log(err);
  });
});

server.listen(5000);