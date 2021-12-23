const bill = document.getElementById("Bill");
const numOfPeople = document.getElementById("Peopleamount");
const result = document.getElementById("Result");
const button = document.getElementById("btn");

let tipPersent = document.getElementById("ServiceQual");

result.style.display = "none";


button.addEventListener("click", calculateTip);

function calculateTip(){
    if(bill.value === '' || tipPersent.value === 0){
        alert("Please enter value")
        return;
    }
    if(numOfPeople.value === "" || numOfPeople.value <= 1){
        numOfPeople.value =1;
        result.style.display = "none";
    }else{
        result.style.display = "block";
    }

    let totalTip = bill.value * tipPersent.value;

    let divTip = totalTip / numOfPeople.value ;

    let totalBill = totalTip + parseInt(bill.value);

    let divBillTip = totalBill / numOfPeople.value;

    document.getElementById("Result").style.display = "block";
    document.getElementById("Tip").innerText = "$" + totalTip;
    document.getElementById("Total_Bill_Tip").innerHTML= "$" + totalBill.toFixed(2);

    document.getElementById("Div_Tip").innerHTML="$" + divTip.toFixed(2);
    document.getElementById("Div_Tip-Person").innerHTML = "$" + divBillTip.toFixed(2);
}

