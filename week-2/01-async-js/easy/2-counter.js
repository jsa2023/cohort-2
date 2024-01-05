let counter = 0;

function count() {
    function incrementCounter() {
        return counter++;
    }

    function logTheCounter() {
        console.log(incrementCounter());
        setTimeout(logTheCounter, 1000);
    }

    logTheCounter();
}

count();