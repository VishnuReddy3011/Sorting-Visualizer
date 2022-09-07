async function bubbleSort(){
    let arr = document.querySelectorAll(".barItem");
    
    let len = arr.length;

    for(let i = 0; i < len; i++){
        for(let j = 0; j < len-i-1; j++){
            arr[j].style.background = "lightseagreen";
            arr[j+1].style.background = "lightseagreen";
            console.log("inside");  

            if(parseInt(arr[j].style.height) > parseInt(arr[j+1].style.height)){
                await wait(delay/4);
                arr[j].style.background = "lightsalmon";
                arr[j+1].style.background = "lightsalmon";
                swap(arr[j] , arr[j+1]);
                await wait(delay/4);
            }
            await wait(delay/2);
            arr[j].style.background = "cornsilk";
            arr[j+1].style.background = "cornsilk";
        }
        arr[len-i-1].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
    }
}

const bubbleSortButton = document.querySelector("#bubbleSort");
bubbleSortButton.addEventListener("click" , async function(){
    console.log("inside bubblesort button");
    ButtonsOff();
    await bubbleSort();
    ButtonsOn();
});