let clic = 0;
let currentStatus = document.querySelector("h5");
let btn = document.querySelector("#btn");

btn.addEventListener("click",function(){
    if(clic == 0){
        currentStatus.innerHTML = "Friends"
        currentStatus.style.color = "green"
        btn.innerHTML = "Remove"
        clic = 1;
    }else{
        currentStatus.innerHTML = "Friend Removed"
        currentStatus.style.color = "red"
        btn.innerHTML = "Add again"
        clic = 0;
    }
})