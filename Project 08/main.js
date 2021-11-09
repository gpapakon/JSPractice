const passEye = document.getElementById("passEye");
const loginPassword = document.getElementById("loginPassword");

passEye.addEventListener("click",showPassword)



// Show hide password
function showPassword(){

    if(loginPassword.type == "password"){
        loginPassword.type = "text";
        passEye.className = "far fa-eye-slash";
        passEye.style.color = "red";
    }else{
        loginPassword.type = "password";
        passEye.className = "far fa-eye";
        passEye.style.color = "green";
    }
}

//Simple Validation

const loginContainer = document.querySelector(".login-container");
const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");

loginForm.addEventListener("submit", submitValidation);

function submitValidation(event){
    event.preventDefault();

    if(loginUsername.value === "" || loginUsername.value.length < 3){
        showError(loginUsername, "User name can not be empty & must be > 3");
    }else{
        showSuccess(loginUsername);
    }

    if(loginPassword.value === "" || loginPassword.value.length < 6){
        showError(loginPassword, "Password can not be empty & must be > 6");
    }else{
        showSuccess(loginPassword);
    }
}

function showError(input, message){

    const formField = input.parentElement;
    formField.className = "form-field error";

    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "visible";
    alert_message.style.color = "red";
    alert_message.innerText = message;
}

function showSuccess(input){

    const formField = input.parentElement;
    formField.className = "form-field success";

    const alert_message = formField.querySelector(".alert-message");
    alert_message.style.visibility = "hidden";
    alert_message.innerText = "message";


}

//Request Form

const requestForm = document.querySelector(".form-request");

requestForm.style.display = "none";

const showRequestPassword = document.querySelector(".reset-password");
showRequestPassword.addEventListener("click", showRequestForm);

requestForm.addEventListener("submit", request);


function request (e){
    e.preventDefault();

    const requestEmail = document.getElementById("requestEmail");
    console.log(requestEmail);
    if (requestEmail.value === ""){
        showError(requestEmail,"Email can not be empty");
    }else{
        showSuccess(requestEmail);
    }
}





function showRequestForm(e){
    e.preventDefault();
    if (requestForm.style.display !== "block"){
        loginContainer.style.minHeight = "650px";
        requestForm.style.display = "block";
    }else{
        loginContainer.style.minHeight = "initial";
        requestForm.style.display = "none";
    }
}


