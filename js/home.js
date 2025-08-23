const valPin = 1234;

document.getElementById("add-money-btn").addEventListener("click", function(e){
   e.preventDefault()
   //console.log("add monry add");

   const bank = document.getElementById("bank-list").value
   const accountNumber = document.getElementById("add-account-number").value
   const amount = parseInt (document.getElementById("money-withdraw").value)

   const pin = parseInt(document.getElementById("add-pin").value)

   //console.log(bank, accountNumber, amount, pin);

   const avalBalance = parseInt(document.getElementById("ab-balance").innerText)

   if(accountNumber.length < 11){

    alert("please inter right account number");

    return;
   }

   if( pin !== valPin){
    alert("please right pin number")

    return;

   }

   //console.log(avalBalance);
   const totalNewBalence = amount + avalBalance;

   // new balance add
    document.getElementById("ab-balance").innerText = totalNewBalence

});

/// toggleintg section

document.getElementById("add-button").addEventListener("click", function(){
 document.getElementById("cash-out-perent").style.display = "none";
    document.getElementById("add-money-perent").style.display = "block";

})

document.getElementById("cash-out-button").addEventListener("click", function(){
 document.getElementById("add-money-perent").style.display = "none";
    document.getElementById("cash-out-perent").style.display = "block";

})
