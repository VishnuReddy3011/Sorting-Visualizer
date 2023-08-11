const swap = (a,b) => [a.style.height, b.style.height] = [b.style.height, a.style.height];

const buttonIds = ["#newArray","#size_input","#bubbleSort","#mergeSort","#quickSort","#heapSort"];

const ButtonsOn = () =>{
    const boxes = document.querySelectorAll('.btns');

    for (const box of boxes) {
      box.classList.remove('bg-yellow');
      box.classList.add('button');
    }
    buttonIds.forEach((btn)=>{document.querySelector(btn).disabled = false;})
}

const ButtonsOff = ()=>{
    const boxes = document.querySelectorAll('.btns');

    for (const box of boxes) {
      box.classList.add('bg-yellow');
      box.classList.remove('button');

    }
    buttonIds.forEach((btn)=>{document.querySelector(btn).disabled = true;})
}

let delay = 170;

let delayTime = document.querySelector("#speed_input");
delayTime.addEventListener("input" , function(){
    document.querySelector("#show1").innerHTML = delayTime.value;
    delay = 340-delayTime.value;
});

// Used in async function
function wait(milisec) {
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}


// functon for timer
var id;
function startTimer(){
    id =  setInterval(start, 10);
    var msv = 0;
    var sv = 0;
    var mv = 0;
    function start() {
        if(sv === 60){
            sv = 0;
            mv++;
        }
        if(msv === 100){
            msv = 0;
            sv++;
        }
        document.getElementById("min").innerHTML = mv < 10 ? "0" + mv : mv;
        document.getElementById("ms").innerHTML = msv < 10 ? "0" + msv : msv;
        document.getElementById("sec").innerHTML = sv < 10 ? "0" + sv : sv;
        msv++;
    }
}

function resetTimer(){
    document.getElementById("ms").innerHTML = "0" + 0;
    document.getElementById("sec").innerHTML = "0" + 0;
}

function stopTimer(){
    clearInterval(id);
}
