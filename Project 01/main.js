const checkbox = document.getElementById("checkbox");
const submitBtn= document.getElementById("btn");

//disable checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");



//Color init to boxes and span
let i = Math.floor(Math.random() * 9);
let j = 0;
elements.forEach(function (element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    
    if(i == j){
        selectColor.innerHTML = color;
    }

    j++;
})


//generate random hex color
function getRandomColor (){
    const letter = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0 ; i < 6 ; i++){
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}

elements.forEach(function (element) {
    element.addEventListener('click',function(){
        if(element.innerHTML == selectColor.innerHTML){
            checkbox.disabled = false;
            submitBtn.disabled = false;
        }else{
            alert("Please verify that you are human!");
            location.reload();
        }
    })
})
