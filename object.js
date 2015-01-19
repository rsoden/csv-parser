var csv = require('./lib/csv.js')

var p = new csv.Parser()
p.run('./test.csv')