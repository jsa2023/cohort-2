const fs = require('fs');

// new Promise(function(resolve) {
//     fs.readFile('friends.txt', 'utf-8', function(err, data) {
//         resolve(data)
//     })
// }).then((data) => console.log(data))

fs.readFile('friends.txt', 'utf-8', function(err, data) {
    console.log(data);
});

let sum = 0;
for (let i = 0; i < 100; i++) {
    sum = sum + 1
}