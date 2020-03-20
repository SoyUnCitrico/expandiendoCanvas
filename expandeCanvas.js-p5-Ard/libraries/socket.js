var socket = io.connect('http://localhost:8080');


socket.on('mensaje', function (data) {
    console.log('Mensaje Recibido: ');
    console.log(data);
});

socket.on('boton', function(data) {
    console.log('Boton Recibido: ')
    console.log(data);    
//     socket.emit('mensaje', "datos de Boton recibidos");
    
});