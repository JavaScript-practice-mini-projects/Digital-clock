
// const months = [
//     "January", "February", "March", "April", "May", "June", 
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   const nowDate = new Date()
//   let nowMonth = months[nowDate.getMonth()]
//   let nowDay = days[nowDate.getDay()]
//   let year = nowDate.getFullYear()
//   console.log(nowDay, nowMonth, year)

function timeUpdate(){
    const clock = document.getElementById('clock');
    const time = new Date();
    let hours = time.getHours();
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    let session = 'AM';

    if(hours >= 12){
        session = 'PM'
        if(hours > 12){
            hours -= 12;
        }
    }
    if(hours === 0){
        hours = 12;
    }
    hours = String(hours).padStart(2, '0')
    clock.textContent = `${hours} : ${minutes} : ${seconds} ${session}`
}
// time function call after 1s for updating
timeUpdate();
setInterval(timeUpdate, 1000);
