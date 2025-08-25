const valPin = 1234;

// function to get input value //

//function getInputValueNumber(id) {
//const inputField = document.getElementById(id)
  //const inputFieldValue = inputField.value
  //const inputFieldValueNumber = parseInt(inputFieldValue)

  //return inputFieldValueNumber
//}

//function to get innerText //

//function getInnerText(id){
  //const element = document.getElementById(id)
  //const elementValue = element.innerText
  //const elementValueNumber = parseInt(elementValue)

  //console.log(elementValueNumber);
  
//}

//function set innertext //

//function setInnerText(value){
//  const availaBalanceEelement = document.getElementById("")
//}


/// add money section
document.getElementById("add-money-btn").addEventListener("click", function (e) {
  e.preventDefault()

  //console.log("add monry add");

  const bank = document.getElementById("bank-list").value
  const accountNumber = document.getElementById("add-account-number").value
  
  const amount =  parseInt(document.getElementById("money-withdraw").value)
 
  const pin =  parseInt(document.getElementById("add-pin").value)

  //console.log(bank, accountNumber, amount, pin);

  const avalBalance =  parseInt(document.getElementById("ab-balance").innerText)

  if (accountNumber.length < 11) {

    alert("please inter right account number");

    return;
  }

  if (pin !== valPin) {
    alert("please right pin number")

    return;
  }

  //console.log(avalBalance);
  const totalNewBalence = amount + avalBalance;

  // new balance add
  document.getElementById("ab-balance").innerText = totalNewBalence

});


/// withdraw-btn

document.getElementById("withdraw-btn").addEventListener("click", function (e) {
  e.preventDefault()
  //console.log("withdraw btn click");

  const amount = parseInt(document.getElementById("withdraw-amount").value)

  const avalaBalance = parseInt(document.getElementById("ab-balance").innerText)

  //console.log(amount, avalaBalance);

  const totaoNewAvalaBalance = avalaBalance - amount;

  //console.log(totaoNewAvalaBalance);

  document.getElementById("ab-balance").innerText = totaoNewAvalaBalance;

})



/// toggleintg section ///

//add money//

document.getElementById("add-button").addEventListener("click", function () {
  document.getElementById("cash-out-perent").style.display = "none";
  document.getElementById("transfer-money-perent").style.display= "none";
  document.getElementById("get-bonus-perent").style.display= "none";
  document.getElementById("add-money-perent").style.display = "block";

})
//cash out //
document.getElementById("cash-out-button").addEventListener("click", function () {
  document.getElementById("add-money-perent").style.display = "none";
  document.getElementById("transfer-money-perent").style.display= "none";
  document.getElementById("get-bonus-perent").style.display= "none";
  document.getElementById("cash-out-perent").style.display = "block";

})
// trasfer money
document.getElementById("transfer-button").addEventListener("click", function(){
    document.getElementById("add-money-perent").style.display = "none";
    document.getElementById("cash-out-perent").style.display = "none";
    document.getElementById("get-bonus-perent").style.display= "none";
  document.getElementById("transfer-money-perent").style.display= "block"

})
 //get bonus

document.getElementById("get-bonus-button").addEventListener("click", function(){
    document.getElementById("add-money-perent").style.display = "none";
    document.getElementById("cash-out-perent").style.display = "none";
    document.getElementById("transfer-money-perent").style.display= "none"
  document.getElementById("get-bonus-perent").style.display= "block";

})

