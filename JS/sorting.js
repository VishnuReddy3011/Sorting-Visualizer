function swap(ele1, ele2){
    let temp = ele1.style.height;
    ele1.style.height = ele2.style.height;
    ele2.style.height = temp;

}
//function to switch on and off buttons
function ButtonsOn(){
    document.querySelector("#newArray").disabled = false;
    document.querySelector("#size_input").disabled = false;
    document.querySelector("#bubbleSort").disabled = false;
    document.querySelector("#mergeSort").disabled = false;
    document.querySelector("#quickSort").disabled = false;       
    
}

function ButtonsOff(){
    console.log("inside Buttons off");
    document.querySelector("#newArray").disabled = true;
    document.querySelector("#size_input").disabled = true;
    document.querySelector("#bubbleSort").disabled = true;
    document.querySelector("#mergeSort").disabled = true;
    document.querySelector("#quickSort").disabled = true;
         
}


let array = [];

//Creating an array when the page loads
createNewArray();

//A function to generating an array of random elements
function createNewArray(noOfBars = 60){
    //Deleting previous array
    deleteBars();

    array = [];

    for(let i = 0; i < noOfBars; i++){
        array[i] = Math.floor(Math.random()*(450-20)+20);
        //console.log(array[i]);
    }
    //console.log("size " , noOfBars);
    //console.log("done");
    const bars = document.querySelector("#bars");
    for(let i = 0; i < noOfBars; i++){
        const bar = document.createElement("div");
        bar.style.height = array[i].toString()+"px";
        bar.classList.add("barItem");
        bars.appendChild(bar);
    }
}

function deleteBars(){
    const bars = document.querySelector("#bars");
    bars.innerHTML = "";
}

//Taking input from the range slider for size
let arraySize = document.querySelector("#size_input");
arraySize.addEventListener("input" , function(){
    //console.log(arraySize.value);
    createNewArray(arraySize.value);
});

//Adding click event to "Generate new Array" button
const generatingNewArray = document.querySelector("#newArray");
generatingNewArray.addEventListener("click" , function(){
    //console.log("inside generatingNewArray");
    createNewArray(arraySize.value);
});

let delay = 170;

let delayTime = document.querySelector("#speed_input");
delayTime.addEventListener("input" , function(){
    delay = 340-delayTime.value;
    //console.log("delay: " , delay);
});

// Used in async function
function wait(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}