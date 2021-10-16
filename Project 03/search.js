const searchBtn = document.getElementById("search-btn");
const searchInput = document.querySelector(".search-input")

console.log(searchInput)

searchBtn.addEventListener('click',function(){
    //searchInput.classList.add("active-search");
    searchInput.classList.toggle("active-search");
});

document.querySelector('main').addEventListener('click',()=>{
    searchInput.classList.remove('active-search')

})