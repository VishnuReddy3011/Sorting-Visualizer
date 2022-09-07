async function quickSort(arr , l , r){

    if(l > r){
        return;
    }

    let pivot = r;
    console.log(l , r);
    console.log(pivot);
    let value = parseInt(arr[pivot].style.height);
    console.log(value);
    arr[pivot].style.background = "tomato";
    let j = l;

    for(let i = l; i <= r; i++){
        arr[i].style.background = "lightseagreen";
        arr[j].style.background = "cornflowerblue";
        await wait(delay);
        if(parseInt(arr[i].style.height) < value){
            swap(arr[j] , arr[i]);
            j++;
            arr[j-1].style.background = "lightseagreen";
        }
    }
    swap(arr[j] , arr[pivot]);
    arr[j].style.background = "-webkit-linear-gradient(rgba(238,174,202,1) 34%, rgba(148,187,233,1) 84%)";

    for(let k = j+1; k <= r; k++){
        arr[k].style.background = "cornsilk";
    }

    console.log(j);
    await quickSort(arr , l , j-1);
    await quickSort(arr , j+1, r);
}

let quickSortButton = document.querySelector("#quickSort");
quickSortButton.addEventListener("click" , async function(){
    let arr = document.querySelectorAll(".barItem");
    let len = arr.length-1;
    ButtonsOff();
    await quickSort(arr, 0 , len);
    ButtonsOn();
});