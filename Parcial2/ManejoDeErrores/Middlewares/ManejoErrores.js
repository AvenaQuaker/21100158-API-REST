// Manejo de errores 404 (recurso no encontrado)
export function manejarError404(req, res, next) {
    res.status(404).json({
        mensaje: "Recurso no encontrado",
    });
}

// Manejo de errores 500 (error interno del servidor)
export function manejarError500(err, req, res, next) {
    console.error(err.stack); // Mostrar el error en la consola
    res.status(500).json({
        mensaje: "Ocurrió un error en el servidor",
        error: err.message,
    });
}
