var fs = require('fs');

fs.readFile('unidecode.requirejs.js', 'utf8', function(err, data){
	fs.writeFile('unidecode.complete.js', data.replace(/require\('\.\/(.*)'\)/g, function(full, path){
		return fs.readFileSync(path+'.js', 'utf8').match(/ = (\[.*\]);/)[1];
	}), 'utf8');
});
