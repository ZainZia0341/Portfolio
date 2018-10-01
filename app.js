window.onscroll = function(){
    var ypos = window.pageYOffset;
    console.log(ypos);
    if(ypos > 565){
        document.getElementsByClassName("nav-bar")[0].setAttribute("id","nav-bar");
    }
    if(ypos < 565){
        document.getElementsByClassName("nav-bar")[0].removeAttribute("id");
    }
    if(ypos > 270){
        console.log("hello");
        var listANi = document.getElementsByClassName("projects-image-container");
        for(var i = 0; i<listANi.length; i++){
            listANi[i].style.transform = 'translateY(0px)';
            listANi[i].style.opacity = '1';
            console.log("hello");
        }
    }
    if(ypos < 200){
        console.log("hello");
        var listANi = document.getElementsByClassName("projects-image-container");
        for(var i = 0; i<listANi.length; i++){
            listANi[i].style.transform = 'translateY(17em)';
            listANi[i].style.opacity = '0';
            console.log("hello");
        }
    }
}
function verticalNavBarBotton(){
    document.getElementsByClassName("nav-bar")[0].style.width = "50%";
    document.getElementsByClassName("body-transparent")[0].style.width = "100%";
}
function verticalNavBarBottonClose(){
    document.getElementsByClassName("nav-bar")[0].style.width = "0%";
    document.getElementsByClassName("body-transparent")[0].style.width = "0%";
}