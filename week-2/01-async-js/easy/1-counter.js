let counter = 0;
function count() {
    return counter++;
}

setInterval(() => {
    console.log(count());
}, 1000);