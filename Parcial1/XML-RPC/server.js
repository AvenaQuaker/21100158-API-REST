// server.js
import express from "express";
import xmlrpc from "xmlrpc";
const port = 3000;

// Crear una aplicación Express
const app = express();

// Crear un servidor XML-RPC
const xmlRpcServer = xmlrpc.createServer({ host: "localhost", port: 9090 });

// Definir un método que recibirá la petición XML-RPC
xmlRpcServer.on("math.square", (err, params, callback) => {
    const number = params[0]; // Recibimos el parámetro (un número)
    const result = number * number; // Hacemos el cálculo
    callback(null, result); // Enviamos la respuesta
});

console.log("Servidor XML-RPC corriendo en puerto 9090");

app.listen(port, () => {
    console.log(`Servidor Express corriendo en el puerto ${port}`);
});

// xmlRpcServer.on('mostrarCalificacion', (err, params, callback) => {
//     const number = params[0] // Recibimos el parámetro (un número)
//     const result = number + 35 // Hacemos el cálculo
//     callback(null, result) // Enviamos la respuesta
// })
