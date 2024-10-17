export class HomeController {
    constructor() {}

    Home = (req, res) => {
        return res.json({ mensaje: "Pagina Inicial" });
    };
}
