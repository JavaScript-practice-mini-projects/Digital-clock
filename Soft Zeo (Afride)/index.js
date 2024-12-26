



function timeUpdate(){
    const time = new Date();
    let hours = time.getHours();
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    let session = 'AM';
    if(hours >= 12){
        session = 'PM';
        if(hours > 12){
            hours -= 12;
        }
    }

    if(hours === 0){
        hours = 12;
    }
    hours = String(hours).padStart(2, '0');



    const  timeDisplay = document.getElementById('time')
    if(timeDisplay){
        timeDisplay.innerText = `${hours} : ${minutes} : ${seconds} ${session}`
    }
}
timeUpdate()
setInterval(timeUpdate, 1000)