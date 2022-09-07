async function merge(arr , l , r , m){
    let n1 = m-l+1;
    let n2 = r-m;

    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        arr[l+i].style.background = "lightsalmon";
        left[i] = arr[l+i].style.height;
        await wait(delay);
    }

    for(let i = 0; i < n2; i++){
        arr[m+1+i].style.background = "lightseagreen";
        right[i] = arr[m+1+i].style.height;
        await wait(delay);
    }

    let i = 0 , j = 0 , k = l;

    while(i < n1 && j < n2){
        if(parseInt(left[i]) <= parseInt(right[j])){

            if(n1+n2 === arr.length){
                arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
            }
            else{
                arr[k].style.background = "rgba(238,174,202,1)";
            }
            arr[k].style.height = left[i];
            i++;
        }
        else{

            if(n1+n2 === arr.length){
                arr[k].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";
            }
            else{
                arr[k].style.background = "rgba(238,174,202,1)";
            }
            arr[k].style.height = right[j];
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
        arr[k].style.height = left[i];
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
        arr[k].style.height = right[j];
        j++;
        k++;
    }

}


async function mergeSort(arr , l , r){
    if(l >= r){
        return;
    }
    let mid = l + Math.floor((r-l)/2);
    await mergeSort(arr , l , mid);
    await mergeSort(arr , mid+1, r);
    await merge(arr , l , r , mid);
}


const mergeSortButton = document.querySelector("#mergeSort");
mergeSortButton.addEventListener("click" , async function(){
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length-1;
    ButtonsOff();
    await mergeSort(arr , 0 , len);
    ButtonsOn();
});