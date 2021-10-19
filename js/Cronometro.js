var Buttons = document.querySelectorAll(".buttons"),
    Display = document.querySelector(".timer"),
    CurrentButton = "",
    tempo = 1,
    StopWatch,
    milliseconds = 00,
    seconds = 00
    minutes = 00;

function TimeFormat(milliseconds){
    
    if(milliseconds < 10){
        milliseconds = "00" + milliseconds;
    }
    else if(milliseconds < 100){
        milliseconds = "0" + milliseconds
    }
    else {
        milliseconds = milliseconds
    }
    return milliseconds
}

function DisplayShow(){
    Display.innerHTML = ((minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds < 10 ? "0" + seconds : seconds) + ":" + (TimeFormat(milliseconds)));
}

function timer(){
    milliseconds++
    if(milliseconds>1000){
        milliseconds = 0;
        seconds++;
    }
    if(seconds>60){
        seconds = 0;
        minutes++;
    }
    DisplayShow()
    console.log(milliseconds)
}

function Start(){
    StopWatch = setInterval(() => {timer()}, tempo);
}


function Stop(){
    clearInterval(StopWatch)
    DisplayShow()
}

//Função para deletar as laps de cada div
function ClearLaps(LapsToClear){
    while(LapsToClear.firstChild){
        LapsToClear.removeChild(LapsToClear.firstChild);
    }
}

var LapTempoDisplay = document.querySelector(".tempo")
    LapCountDisplay = document.querySelector(".voltas")
    TotalLapDisplay = document.querySelector(".tempo-total")

//Função para limpar tudo
function Clear(){
    clearInterval(StopWatch)
    milliseconds= 0
    seconds= 0
    minutes= 0
    LapCount = "",
    TotalMilliseconds = ""
    TotalSeconds = ""
    TotalMinutes = ""
    
    ClearLaps(LapTempoDisplay)
    ClearLaps(LapCountDisplay)
    ClearLaps(TotalLapDisplay)

    DisplayShow()
}



var LapCount = "",
    TotalMilliseconds = ""
    TotalSeconds = ""
    TotalMinutes = "";

function Lap(){
    //Guardando os Valores da volta
    LapCount++,
    TotalMilliseconds = milliseconds - TotalMilliseconds,
    TotalSeconds = seconds - TotalSeconds,
    TotalMinutes = minutes - TotalMinutes;

    var laptime = document.createElement("div"),
        count = document.createElement("div"),
        total = document.createElement("div");

    laptime.textContent = (TotalMinutes < 10 ? "0" + TotalMinutes : TotalMinutes) + ':' + (TotalSeconds < 10 ? "0" + TotalSeconds : TotalSeconds) + ":" + (TotalMilliseconds < 10 ? "0" + TotalMilliseconds : TotalMilliseconds);
    total.textContent = (minutes < 10 ? "0" + minutes : minutes) + ':' + (seconds < 10 ? "0" + seconds : seconds) + ":" + (milliseconds < 10 ? "0" + milliseconds : milliseconds);
    count.textContent = LapCount;

    LapTempoDisplay.appendChild(laptime);
    LapCountDisplay.appendChild(count);
    TotalLapDisplay .appendChild(total);
}

Buttons.forEach(button => {
    button.addEventListener('click', () => {
       switch(button.innerHTML){
            case "Iniciar":
                Start()
            break
            case "Parar":
                Stop()
                break
            case "Volta":
                Lap()
                break
            case "Redefinir":
                Clear()
                break
        }
    })   
});
