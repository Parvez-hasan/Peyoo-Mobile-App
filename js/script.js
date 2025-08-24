
/// login button functionality

document.getElementById("loginButton").addEventListener("click", function(e){
    e.preventDefault()


    // mobile number 
const mobileNumber = 1948017882;
const pinNumber = 2244;

const mobileNumberValue = document.getElementById("mobile-number").value

//console.log(mobileNumberValue).value
const mobileNumberValueConvert = parseInt(mobileNumberValue)

// pin number

const pinNumberValue = document.getElementById("pin-number").value
const pinNumberValueConvert = parseInt (pinNumberValue)

console.log(mobileNumberValueConvert, pinNumberValueConvert);

if(mobileNumberValueConvert === mobileNumber && pinNumberValueConvert === pinNumber){

    //console.log("all value mess");
    window.location.href = "./home.html"
    
}
else{
    
    alert("Please Inter Right Number")
    
}


})
