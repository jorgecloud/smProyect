
// let sendM = (body)=>{
// return `Hola ${body.name } recuerda que tienes cita con Mila Global Solution INC ${body.day} ${body.hours} Tel:(239)529-5262 Ubicacion:\nbit.ly/3dQShnH`
// }

let sendM = (body)=>{
    return `Hola Maria recuerda llamar a  ${body.name} hoy ${body.hours} Tel:(213)494-1391`
    }

let reviewClient = (body)=>{
return `Hola ${body.name} gracias por visitar Mila Global Solutions INC podria tomar un minuto para darnos su opinion acerca de los servicios recibidos?  click bit.ly/3AhyYvd`
}

let reviewNew = (name)=>{
    return `Hola ${name} gracias por visitar Mila Global Solutions INC podria tomar un minuto para darnos su opinion acerca de los servicios recibidos?  click bit.ly/3AhyYvd`
    }

module.exports = {
    sendM,
    reviewClient,
    reviewNew
}