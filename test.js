
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({  
        body: 'hola desde nodejs again', 
        from: '',   
         to: '' 
       }) 
      .then(data => console.log(data.sid)) 
      .done();