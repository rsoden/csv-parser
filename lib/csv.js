var csv = module.exports
var fs = require('fs');
var through2 = require('through2');


csv.parse = function(path, callback) {
	var data = fs.readFileSync(path);
	var string = data.toString()
	callback && callback (string.split(','));
}

csv.print = function(data) {
	console.log(data);
}

csv.stream = function(path,output) {
	var all = []

	fs.createReadStream(path)
	.pipe(through2.obj(function(chunk, enc, callback){
		chunk  = chunk.toString()
		this.push(chunk)
		callback()
	}))
  	.on('data', function (data) {
  	  all.push(data.split(','))
  	})
	.on('end', function () {
		fs.writeFile(output,all)
	})
}

csv.Parser = function() {

	this.read = function(source) {
		raw = fs.readFileSync(source)
		this.data = raw.toString()
	}

	this.parse = function() {
		this.split = this.data.split(',')
	}

	this.write = function(data) {
		console.log(this.split)
	}

	this.run = function(source) {
		this.read(source)
		this.parse()
		this.write()
	}
}

