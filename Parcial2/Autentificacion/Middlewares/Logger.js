export const Logger = (req, res, next) => {
    console.error("Entro el MiddleWare");
    next();
};
