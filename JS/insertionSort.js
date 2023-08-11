const insertionSort = async ()=>{
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length;

    let minVal;
    
    for(let i=1; i<len; i++){
        arr[i].style.background = "green";
        await wait(delay/2);

        minVal = arr[i].style.height;
        let j = i-1;
        while(j>=0 && parseInt(arr[j].style.height) > parseInt(minVal)){
            arr[j].style.background = "tomato";
            await wait(delay/2);
            arr[j].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
            arr[j+1].style.height = arr[j].style.height;
            j--;
        }
        if(j !== i-1){
            arr[j+1].style.height = minVal;
        }
        arr[i].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
    }
    arr[len-1].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
}



const insertionSortButton = document.querySelector("#insertionSort");
insertionSortButton.addEventListener("click" , async function(){
    ButtonsOff();
    startTimer();
    await insertionSort();
    stopTimer();
    ButtonsOn();
});