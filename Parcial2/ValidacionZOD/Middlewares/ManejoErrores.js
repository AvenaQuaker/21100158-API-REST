// Manejo de errores 404 (recurso no encontrado)
export function manejarError404(req, res, next) {
    res.status(404).json({
        mensaje: "Recurso no encontrado",
    });
}

// Manejo de errores 500 (error interno del servidor)
export function manejarError500(err, req, res, next) {
    res.status(500).json({
        mensaje: "Ocurrió un error en el servidor",
        error: err.message,
    });
}

export function manejarError400(err, req, res, next) {
    res.status(400).json({
        mensaje: "Error en la petición",
        error: err,
    });
}
