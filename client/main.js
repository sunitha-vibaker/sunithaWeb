var HOST = location.origin.replace('ws', 'ws')
var sock = new WebSocket(HOST);

//var sock = new WebSocket("ws://localhost:2001");

sock.onopen = function(){
sock.send(JSON.stringify({
   type:'name',
   data:name
}))
}


/*sock.onopen = function(event){
alert("Socket connected successfully");
setTimeout(function(){
  sock.send("hey there")
}, 1000);
};*/

var log = document.getElementById('log');

sock.onmessage = function(event){
console.log(event);
var json = JSON.parse(event.data);

var completeMsg = document.createElement('div');
completeMsg.setAttribute('class','direct-chat-messages');

var dateDiv = document.createElement('div');
dateDiv.setAttribute('class','chat-box-single-line');

var dateMsg = document.createElement('abbr');
dateMsg.setAttribute('class','timestamp');
dateMsg.textContent = new Date().toJSON().slice(0,10);

dateDiv.appendChild(dateMsg);
completeMsg.appendChild(dateDiv);

var mainDataDiv = document.createElement('div');
mainDataDiv.setAttribute('class','direct-chat-msg doted-border');



var nameDiv = document.createElement('div');
nameDiv.setAttribute('class','direct-chat-info clearfix');
// nameDiv.innerHTML += json.name;
nameDiv.textContent = json.name;

mainDataDiv.appendChild(nameDiv);

var msgDiv = document.createElement('div');
msgDiv.setAttribute('class','direct-chat-text');
//messageDiv.innerHTML += json.data;
msgDiv.textContent = json.data;
mainDataDiv.appendChild(msgDiv);

var timeDiv = document.createElement('div');
timeDiv.setAttribute('class','direct-chat-timestamp pull-right');

mainDataDiv.appendChild(timeDiv);

 completeMsg.appendChild(mainDataDiv);
 log.appendChild(completeMsg);
                        

}


document.getElementById('msgSend').onclick = function(){
var text = document.getElementById('status_message').value;   
//sock.send(text);
sock.send(JSON.stringify({
type:'message',
data:text
}));


var completeMsg1 = document.createElement('div');
completeMsg1.setAttribute('class','direct-chat-messages');

var dateDiv1 = document.createElement('div');
dateDiv1.setAttribute('class','chat-box-single-line');

var dateMsg1 = document.createElement('abbr');
dateMsg1.setAttribute('class','timestamp');

dateDiv1.appendChild(dateMsg1);
completeMsg1.appendChild(dateDiv1);

var mainDataDiv1 = document.createElement('div');
mainDataDiv1.setAttribute('class','direct-chat-msg doted-border');



var nameDiv1 = document.createElement('div');
nameDiv1.setAttribute('class','direct-chat-info clearfix');
// nameDiv.innerHTML += json.name;
nameDiv1.textContent = 'you: ';

mainDataDiv1.appendChild(nameDiv1);

var msgDiv1 = document.createElement('div');
msgDiv1.setAttribute('class','direct-chat-text');
//messageDiv.innerHTML += json.data;
msgDiv1.textContent = text;
mainDataDiv1.appendChild(msgDiv1);

var timeDiv1 = document.createElement('div');
timeDiv1.setAttribute('class','direct-chat-timestamp pull-right');

mainDataDiv1.appendChild(timeDiv1);

 completeMsg1.appendChild(mainDataDiv1);
 log.appendChild(completeMsg1);

// nameDiv.innerHTML += 'you: ';
//messageDiv.innerHTML += text;

};
