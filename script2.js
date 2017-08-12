console.log('Current Version is ' + process.version);
var fs  =  require('fs');
content = fs.readFileSync('./package.json', 'utf-8');
content = JSON.parse(content)
console.log(content.dependencies);
