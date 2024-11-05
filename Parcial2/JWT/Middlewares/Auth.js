import jwt from "jsonwebtoken";

const SECRET_KEY = "tu_clave_secreta";

export const generarToken = (datos) => {
    return jwt.sign(datos, SECRET_KEY, { expiresIn: "1h" });
};

export const verificarToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "Token no proporcionado" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado" });
    }
};
