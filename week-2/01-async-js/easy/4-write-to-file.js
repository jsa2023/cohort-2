const fs = require('fs');

data = 'Sylvester Stallone\nJason Stathan\nHarrison Ford';
fs.writeFile('actors.txt', data, function(err, data) {
    console.log(data)
})