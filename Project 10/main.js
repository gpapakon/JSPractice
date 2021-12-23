const pea = document.querySelector(".pea");

pea.style.opacity = "1";

const shells = document.querySelectorAll(".shell");


pea.addEventListener("dragstart", dragStart);
pea.addEventListener("dragend", dragEnd);

function dragStart(){
    this.className += " hold";
    console.log(this.className);
    setTimeout(()=> (this.className = "invisible"), 0);

}

function dragEnd(){
    this.className = "pea";
    this.classList.toggle("pea-hidden");
    this.style.opacity = "0";

    document.querySelector("body").style.background = 'red';
    title.innerText = "Find the pea";
    title.style.color = "#fff";
}