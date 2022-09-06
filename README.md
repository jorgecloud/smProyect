proyecto envio de notificaciones back 

El proyecto usa el api de twlio para envío de notificaciones a números validos de 10 dígitos 


Rutas
- /readcsv:
dicha ruta recibe un archivo .csv, solamente recibe esta extensión para que no devuelva la solicitud
el archivo debe contener en la primera línea dos columnas una con nobre del contacto y otra con el numero  = 'Name,Phone 1  Value' para que pueda procesar el archivo.

-  /sendsms
dicha ruta recibe un .json con los datos del appointment para enviar la noficacion 
el name es el nombre del receptor de la notificacion
el day es el  dia de la semana en que esta programado el appointment
el hours es la hora del appointment
el to es el numero donde llegara la notificacion del receptor via sms
{
    "name":"Daimar Herrera",
    "day":"Martes",
    "hours":"11:00 a.m.",
    "to":["7864316969"]
}
si falta algun dato no se procesara la solicitud y no enviara la notifacacion 


