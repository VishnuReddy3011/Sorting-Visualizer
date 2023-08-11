const selectionSort = async ()=>{
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length;

    let minIdx;

    for(let i=0; i<len-1; i++){
        minIdx = i;
        arr[i].style.background = "tomato";
        await wait(delay/4);
        for(let j=i+1; j<len; j++){
            arr[j].style.background = "lightseagreen";
            if(parseInt(arr[j].style.height) < parseInt(arr[minIdx].style.height)){
                if(minIdx !== i) {
                    arr[minIdx].style.background = "cornsilk";
                }
                minIdx = j;
                await wait(delay/2);
                arr[minIdx].style.background = "lightseablue";

            }
            else{
                await wait(delay/2);
                arr[j].style.background = "cornsilk";
            }
        }

        if(minIdx !== i){
            await wait(delay/4);
            swap(arr[minIdx],arr[i]);
            arr[minIdx].style.background = "cornsilk";
        }
        arr[i].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
    }
    arr[len-1].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
}




const selectionSortButton = document.querySelector("#selectionSort");
selectionSortButton.addEventListener("click" , async function(){
    ButtonsOff();
    startTimer();
    await selectionSort();
    stopTimer();
    ButtonsOn();
});