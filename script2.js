
var fs  =  require('fs');
document.write('Current Version is ' + process.version);
content = fs.readFileSync('./package.json', 'utf-8');
content = JSON.parse(content);
document.write(', '+content.author);
//writing files
var sleepData =  new Object();
var wakedata = new Object();


sleepData.hours = 8;
sleepData.turns = 33;
wakedata.time = 09000000;
wakedata.hours = 12;

//document.write(', '+sleepData.hours + ', '+wakedata.hours);
sleepData.wakeTimes = wakedata;





var sleepDataSF = JSON.stringify(sleepData);
fs.writeFile('sleep.json', sleepDataSF);
