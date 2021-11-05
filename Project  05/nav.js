const menuToggle = document.querySelector("#menu-toggle");
const activeElements = document.querySelectorAll(".active-element");

menuToggle.addEventListener('click', function(){
    for(let active = 0; active < activeElements.length; active++){
        activeElements[active].classList.toggle("active");
    }

    const navBtn = menuToggle.childNodes[1];
    navBtn.classList.toggle('fa-times');

    const pageBd = document.querySelector(".main-container");

    if(navBtn.classList.contains("fa-times")){
        pageBd.style.filter = "blur(3px)"
    }else{
        setTimeout(function(){
            pageBd.style.filter = "blur(0px)"
        },500);
    }

    const listIems = document.querySelectorAll(".main-nav-list a");

    listIems.forEach(function(item,index){
        item.style.transition = `all .5s linear ${index * 0.3}s`;
    })
})