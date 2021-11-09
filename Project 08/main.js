const passEye = document.getElementById("passEye");
const password = document.getElementById("loginPassword");

passEye.addEventListener("click",showPassword)


function showPassword(){

    if(password.type == "password"){
        password.type = "text";
        passEye.className = "far fa-eye-slash";
        passEye.style.color = "red";
    }else{
        password.type = "password";
        passEye.className = "far fa-eye";
        passEye.style.color = "green";
    }
}
