const sideBarButton = document.getElementById("side-bar-button");
const sideBar = document.getElementById("side-bar");

let toggle = 0;
function sideBarOperation(){
    if(toggle == 0){
        sideBar.style.right = 0;
        toggle = 1;
        console.log(toggle);
    } else{
        sideBar.style.right = "-250px";//
        toggle = 0;
        console.log(toggle);
    }
}
