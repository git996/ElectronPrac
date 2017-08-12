
document.write('Current Version is ' + process.version);
var fs  =  require('fs');
content = fs.readFileSync('./package.json', 'utf-8');
alert(content);
