var MicroGear = require('microgear');

  const KEY = "pw83IGeC6JKbHjH";
  const SECRET = "pmkPMp4MTyBuJthc8uFv9b72i7QD4X";
  const APPID = "NSCTest";

var microgear = MicroGear.create({
    key : KEY,
    secret : SECRET
});

microgear.on('connected', function() {
    console.log('Connected...');
    microgear.setalias("computerNodejs");
    setInterval(function() {
        microgear.subscribe("/temp");
        
    },1000);
});

microgear.on('message', function(topic,body) {
    console.log('incoming : '+topic+' : '+body);
});

microgear.on('closed', function() {
    console.log('Closed...');
});

microgear.connect(APPID);