//  query --> ?name=name&raza=raza
const getUsersHandler = (req,res)=>{
    // Recibe la request, Unifica datos, Devuelve la respuesta, Invoca al controller
    // El handler nunca interactua con fuentes externas de informacion, El controller es otra funcion
    const {name, race} = req.query;
    if (name) {
        res.status(200).send("Aqui esta el usuario " + name);
    }

    res.status(200).send("Todos los usuarios");
};

//  :id --> params
const getDetailHandler = (req,res)=>{
    const {id} = req.params;

    res.status(200).send("Detalle del usuario " + id);
};

//  body --> info
const createUserHandler = (req,res)=>{
    const {name, email, phone} = req.body;
    res.status(200).send("Usuario " + name + " creado con el email " + email + " y con el numero " + phone);
};

module.exports = {
    getUsersHandler,
    getDetailHandler,
    createUserHandler
}