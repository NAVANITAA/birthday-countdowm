const endDate = "23 FEBRUARY 2025"      //this format wasnt correct earlier 11:00

document.getElementById("end-Date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")


// const clock = () => {

// }

function clock() {
    // convert into mili sec

    const end = new Date(endDate)   
    const now = new Date()
    // console.log(end);
    // console.log(now);
    const diff = (end-now) /1000;
    // console.log(diff);

    if(diff<0) return;

    inputs[0].value = Math.floor(diff/3600/24);   //quotient -> days
    inputs[1].value = (Math.floor(diff/3600) % 24);     //reminder  -> hours
    inputs[2].value = (Math.floor(diff/60) % 60);
    inputs[3].value = (Math.floor(diff) % 60);

    // //convert into days
    // console.log(Math.floor(diff/3600/24));

}

// initial call
clock()


// 1day=24hours
// 1hr=60min
// 60min=3600sec

setInterval(
    () => {
        clock()
    },
    1000
)