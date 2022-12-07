

const accountSid = 'AC916cfb1d6565dcc29f4ad4ad0c76d367'; 
const authToken = "d8934f5ad49b6bc7680b235eb0eeae08"; 
const client = require('twilio')(accountSid, authToken); 
 
client.messages 
      .create({  
        body: 'hola desde nodejs again', 
        from: '+13257701298',
        // messagingServiceSid: 'MGaa7ca78cbdbab6d4be0846cabe4cb073',      
         to: '+17864316969' 
       }) 
      .then(data => console.log(data.sid)) 
      .done();