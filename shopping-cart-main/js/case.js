/* 
function updateCAseNumber(isIncrease) {
    const caseNumberField = document.getElementById('case-input');
    const caseNumberStr = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberStr);

    let newCaseNumber;
    if (isIncrease) {
        newCaseNumber = previousCaseNumber + 1;
    }
    else {
        newCaseNumber = previousCaseNumber - 1;
        if (newCaseNumber < 0) {
            alert("ERROR!!!");
            return 0;
        }
    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;
}

function findAndSetTotalPrice(TotalPriceId, newCaseNumber){
    const previousCasePrice = document.getElementById(TotalPriceId);
    const newCasePrice = newCaseNumber * 59;
    previousCasePrice.innerText = newCasePrice;
}
 */
// For Plus btn:
document.getElementById("btn-case-plus").addEventListener('click', function () {
    // const newCaseNumber = updateCAseNumber(true);
    // findAndSetTotalPrice('case-price', newCaseNumber);

    const newCaseNumber = updateNumberOFItems("case-input", true);
    updateItemPrice('case-price', newCaseNumber, true);
    
    cartTotalCalcultaions();
    
})

// For Minus btn:
document.getElementById('btn-case-minus').addEventListener('click', function () {
    // const newCaseNumber = updateCAseNumber(false);
    // findAndSetTotalPrice('case-price', newCaseNumber);
    const newCaseNumber = updateNumberOFItems("case-input", false);
    updateItemPrice('case-price', newCaseNumber, true);

    cartTotalCalcultaions();
})