// client.js
import xmlrpc from "xmlrpc";

// Crear un cliente XML-RPC que se conectará a nuestro servidor en localhost:9090
const client = xmlrpc.createClient({
    host: "localhost",
    port: 9090,
    path: "/",
});

// Realizar una llamada al método 'math.square' enviando el número 5
client.methodCall("math.square", [5], (error, value) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("El cuadrado de 5 es:", value);
    }
});

// client.methodCall('mostrarCalificacion', [65], (error, value) => {
//     if (error) {
//         console.error('Error:', error)
//     } else {
//         console.log('Creo que 65 sube a:', value)
//     }
// })
