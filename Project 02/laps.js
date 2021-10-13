window.onload = function()  {
    const minutes  = document.getElementById('minutes');
    const seconds  = document.getElementById('seconds');
    const tens  = document.getElementById('tens');
    
    const startBtn =  document.getElementById("start-btn");
    const stopBtn =  document.getElementById("stop-btn");
    const resetBtn =  document.getElementById("reset-btn");

    console.log(startBtn,stopBtn,resetBtn);
    console.log(minutes,tens,seconds);

    let minutesSet = 00;
    let secondsSet = 00;
    let tensSet = 00;
    let Interval;

    startBtn.onclick = function() {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    const lap = document.getElementById("laps");

    stopBtn.onclick = function () {
        clearInterval(Interval);
        const li = document.createElement("li");
        li.innerHTML = `${minutes.innerHTML}:${seconds.innerHTML}.${tens.innerHTML}`;
        lap.appendChild(li);

    }
 


    function startTimer () {
        tensSet++;

        if(tensSet < 9){
            tens.innerHTML = "0" + tensSet;
        }

        if(tensSet > 9){
            tens.innerHTML =  tensSet;
        }

        if(tensSet > 99) {
            secondsSet++;
            seconds.innerHTML = "0" + secondsSet;
            tensSet  = 0;
            tens.innerHTML = "0" + 0;
        }

        if(secondsSet > 9){
            seconds.innerHTML = secondsSet;
        }

        if(secondsSet == 60){
            minutesSet++;
            minutes.innerHTML = "0" + minutesSet;
            secondsSet = 0;
        }

        if(minutesSet > 9) {
            minutes.innerHTML = minutesSet;
        }

    }
}