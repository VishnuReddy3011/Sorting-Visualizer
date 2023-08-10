const heapify = async (arr,N,i)=>{
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;

    if(l < N && parseInt(arr[l].style.height) > parseInt(arr[largest].style.height)){
        largest = l;
    }
    if(r < N  && parseInt(arr[r].style.height) > parseInt(arr[largest].style.height)){
        largest = r;
    }
    if(largest != i){
        arr[i].style.background = "lightseagreen";
        arr[largest].style.background = "lightseagreen";
        swap(arr[i],arr[largest]);
        await wait(delay);

        arr[i].style.background = "lightsalmon";
        arr[largest].style.background = "lightsalmon";
        await wait(delay);

        arr[i].style.background = "cornsilk";
        arr[largest].style.background = "cornsilk";
        await heapify(arr, N, largest);
        await wait(delay);
    }
}

const heapSort = async (arr,N)=>{
    for(let i = parseInt(N/2)-1; i>=0; i--){
        await heapify(arr,N,i);
        arr[i].style.background = "lightblue";
        await wait(delay/2);
    }
    for(let i=N-1; i>=0; i--){
        arr[i].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
        await wait(delay/2);
        swap(arr[0], arr[i]);
        await heapify(arr,i,0);
        await wait(delay);
    }
}

let heapSortButton = document.querySelector("#heapSort");
heapSortButton.addEventListener("click" , async function(){
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length;
    ButtonsOff();
    startTimer();
    await heapSort(arr, len);
    stopTimer();
    ButtonsOn();
});