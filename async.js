var csv = require('./lib/csv.js')

csv.parse( './test.csv', function(data){
	csv.print(data)
} );