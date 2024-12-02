//protocolo de intercambio
var http = require('http');
//crear servidor
var server = http.createServer();
//servicio web
function mensaje(req,resp){
    //estado satisfactorio 200, mensaje tipo texto plano configurado por json 
    resp.writeHead(200,{'contentType':'text/plain'});
    //escribo el mensaje
    resp.write('HOLA MUNDO MATEO MENDEZ');
    //finalizar la comunicacion entre cliente y servidor
    resp.end();
}

server.on('request',mensaje);
server.listen(3000,function(){
    console.log("La aplicación esta corriendo mediante el puerto 3000");
});