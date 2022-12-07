export default function handler(req, res){
    res.status(200).json({text:"Hello"});
    //para recibir datos desde un formulario ej:
    const email = req.body.email;
}