
let sendMessagesEs = (body, fechaAppointment, hours)=>{
return 'Hola'+' '+body.name+' '+'recuerda que tienes cita con Mila Global Solution INC'+' '+fechaAppointment+' '+hours+' '+'Tel:(239)529-5262 Ubicacion:bit.ly/3dQShnH'
} 

let sendMessagesIn = (body, hours)=>{
    return `Hi ${body.name}, you have an appointment at Mila Global Solutions INC on ${body.day} at ${hours}. Location 2661 Airport RD Suite B-105 Naples FL 34112`
}

let responceSm = ()=>{
    return `Este es el servicio de notificacion de Mila Global Solutions INC, si tiene alguna duda o sugerencia por favor comuniquese al (239)529-5262 o visitanos en www.mariamila.com estamos ubicados 2661 Airport Rd S Suite B-105 B-106 Gracias`
}

 let loteriVisas = (name)=>{
    return `1 Hola ${name} te recordamos que desde mañana esta disponible la loteria de visas USA en Mila Global Solutions te ayudamos con la aplicacion comunicate al (239)529-5262`
} 

/* let sendM = (body)=>{
    return `Hola ${body.name} puedes llamar al (239)601-3769 Gavi, de parte de  Mila Global Solutions INC, por favor no responda a este mensaje gracias`
    }  */

    

let reviewClient = (body)=>{
return `Hola ${body.name} gracias por visitar Mila Global Solutions INC podria tomar un minuto para darnos su opinion acerca de los servicios recibidos?  click bit.ly/3AhyYvd`
}


module.exports = {
    sendMessagesEs,
    reviewClient,
    sendMessagesIn,
    responceSm,
    loteriVisas
}