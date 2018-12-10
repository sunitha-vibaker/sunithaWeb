var server = require('ws').Server;
var s = new server({port: process.env.PORT || 2001 });

s.on('connection', function(ws) {

    ws.on('message', function(message) {
        message = JSON.parse(message);
        console.log(message);
        if(message.type == 'name'){
            ws.personName = message.data;
            return;
        }
        console.log('Recieved:' +message); 
        
        s.clients.forEach(function e(client){
            if(client != ws)
            client.send(JSON.stringify({
                name:ws.personName,
                data:message.data
            }));
        })
        
        //ws.send('From Server: '+message);touc
        

    });
    ws.on('close', function() {
        console.log("I lost a Client");

    });
    console.log("One more client connected");
});
