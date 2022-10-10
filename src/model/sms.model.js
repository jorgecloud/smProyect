
let sendM = (body)=>{
return `Hola ${body.name } recuerda que tienes cita con Mila Global Solution INC ${body.day} ${body.hours} Tel:(239)529-5262 Ubicacion:\nbit.ly/3dQShnH`
} 

let sendMessagesIn = (body)=>{
    return `Hi ${body.name}, you have an appointment at Mila Global Solutions INC on ${body.day} ${body.date} at ${body.hours}. Location 2661 Airport RD Suite B-105 Naples FL 34112`
}

let responceSm = ()=>{
    return `Este e el servicio de notificacion de Mila Global Solutions INC, si tiene alguna duda o sugerencia por favor comuniquese con (239)529-5262 Gracias`
}

let loteriVisas = ()=>{
    return `Hola te recordamos que desde mañana esta disponible la loteria de visas USA en Mila Global Solutions te ayudamos con la aplicacion comunicate al (239)529-5262`
}

/* let sendM = (body)=>{
    return `Hola ${body.name} puedes llamar al (239)601-3769 Gavi, de parte de  Mila Global Solutions INC, por favor no responda a este mensaje gracias`
    }  */

    

let reviewClient = (body)=>{
return `Hola ${body.name} gracias por visitar Mila Global Solutions INC podria tomar un minuto para darnos su opinion acerca de los servicios recibidos?  click bit.ly/3AhyYvd`
}

let reviewNew = (name)=>{
    return `Hola ${name} gracias por visitar Mila Global Solutions INC podria tomar un minuto para darnos su opinion acerca de los servicios recibidos?  click bit.ly/3AhyYvd`
    }

module.exports = {
    sendM,
    reviewClient,
    reviewNew,
    sendMessagesIn,
    responceSm,
    loteriVisas
}