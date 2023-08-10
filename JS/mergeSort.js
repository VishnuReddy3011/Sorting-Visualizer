const merge = async (arr,start,end,mid)=>{
    let n1 = mid-start+1;
    let n2 = end-mid;

    let leftArr = new Array(n1);
    let rightArr = new Array(n2);

    for(let i=0; i<n1; i++){
        arr[start+i].style.background = "lightsalmon";
        leftArr[i] = arr[start+i].style.height;
        await wait(delay);
    }
    for(let i=0; i<n2; i++){
        arr[mid+1+i].style.background = "lightseagreen";
        rightArr[i] = arr[mid+1+i].style.height;
        await wait(delay);
    }

    let i = 0 , j = 0 , k = start;
    while(i < n1 && j < n2){
        if(parseInt(leftArr[i]) <= parseInt(rightArr[j])){
            if(n1+n2 === arr.length){
                arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
            }
            else{
                arr[k].style.background = "rgba(238,174,202,1)";
            }
            arr[k].style.height = leftArr[i];
            i++;
        }
        else{
            if(n1+n2 === arr.length){
                arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
            }
            else{
                arr[k].style.background = "rgba(238,174,202,1)";
            }
            arr[k].style.height = rightArr[j];
            j++;
        }
        await wait(delay);
        k++;
    }

    while(i < n1){
        if(n1+n2 === arr.length){
            arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
        }
        else{
            arr[k].style.background = "rgba(238,174,202,1)";
        }
        arr[k].style.height = leftArr[i];
        i++;
        k++;
    }

    while(j < n2){
        if(n1+n2 === arr.length){
            arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
        }
        else{
            arr[k].style.background = "rgba(238,174,202,1)";
        }
        arr[k].style.height = rightArr[j];
        j++;
        k++;
    }
}

const mergeSort = async (arr,start,end)=>{
    if(start >= end) return;

    let mid = start + Math.floor((end-start)/2);
    await mergeSort(arr,start,mid);
    await mergeSort(arr,mid+1,end);
    await merge(arr,start,end,mid);
}

const mergeSortButton = document.querySelector("#mergeSort");
mergeSortButton.addEventListener("click" , async function(){
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length-1;
    ButtonsOff();
    startTimer();
    await mergeSort(arr , 0 , len);
    stopTimer();
    ButtonsOn();
});
