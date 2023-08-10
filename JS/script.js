var array = [];

const createNewArray = n =>{
    const bars = document.querySelector("#bars");
    bars.innerHTML = "";

    array = [];
    for(let i = 0; i < n; i++) array[i] = Math.floor(Math.random()*(370) + 20);
    
    array.forEach(val=>{
        const bar = document.createElement("div");
        bar.style.height = val.toString()+"px";
        bar.classList.add("barItem");
        bars.append(bar);
    })
}

createNewArray(60);

//Taking input from the range slider for size
let arraySize = document.querySelector("#size_input");
arraySize.addEventListener("input" , function(){
    resetTimer();
    document.querySelector("#show2").innerHTML = arraySize.value;
    createNewArray(arraySize.value)
});

//Adding click event to "Generate new Array" button
const generatingNewArray = document.querySelector("#newArray");
generatingNewArray.addEventListener("click" , function(){
    createNewArray(arraySize.value);
    resetTimer();
});