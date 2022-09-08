proyecto envio de notificaciones back 

El proyecto usa el api de twlio para envío de notificaciones a números validos de 10 dígitos 


Rutas
- /readcsv:
dicha ruta recibe un archivo .csv, solamente recibe esta extensión para que no devuelva la solicitud
el archivo debe contener en la primera línea dos columnas una con nombre del contacto y otra con el numero  = 'Name,Phone 1  Value' para que pueda procesar el archivo.

-  /sendsms
dicha ruta recibe un .json con los datos del appointment para enviar la notificación 
el name: es el nombre del receptor de la notificación
el day: es el dia de la semana en que está programado el appointment
el hours: es la hora del appointment
el to: es el numero donde llegara la notificación del receptor vía SMS
{
    "name":"Daimar Herrera",
    "day":"Martes",
    "hours":"11:00 a.m.",
    "to":["7864316969"]
}
sí falta algún dato no se procesará la solicitud y no enviara la notificación
 


