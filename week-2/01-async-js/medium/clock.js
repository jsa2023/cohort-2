//************** 24-hours clock *******/

function showTime24() {
    const currentTime = new Date();

    const hours = String(currentTime.getHours()).padStart(2,'0');
    const minutes = String(currentTime.getMinutes()).padStart(2,'0');
    const seconds = String(currentTime.getSeconds()).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`)
    setTimeout(showTime24, 1000)
}

setTimeout(showTime24, 1000)

//************* 12-hour clock  ************/

function showTime12() {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    const minutes = String(currentTime.getMinutes()).padStart(2,'0');
    const seconds = String(currentTime.getSeconds()).padStart(2,'0');

    let aMPM = 'AM';

    if (hours >= 12) {
        aMPM = 'PM';
        if (hours > 12) {
            hours = hours - 12;
        }
    }

    console.log(`${hours}:${minutes}:${seconds} ${aMPM}`)
    setTimeout(showTime12, 1000)
}
setTimeout(showTime12, 1000)