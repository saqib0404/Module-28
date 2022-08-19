function updateNumberOFItems(fieldId, isIncrease) {
    const numberOfItemsField = document.getElementById(fieldId);
    const numberOfItemsStr = numberOfItemsField.value;
    const previousNumberOfItems = parseInt(numberOfItemsStr);

    let newNumberOfItems;
    if (isIncrease) {
        newNumberOfItems = previousNumberOfItems + 1;
    }
    else {
        newNumberOfItems = previousNumberOfItems - 1;
        if (newNumberOfItems < 0) {
            alert('ERROR!!!!!!!!!!!!');
            return 0;
        }
    }
    numberOfItemsField.value = newNumberOfItems;
    return newNumberOfItems;
}

function updateItemPrice (PriceId, newNumberOfItems, isCAse) {
    const price = document.getElementById(PriceId);
    let newPrice; 
    
    if(isCAse){
        newPrice = newNumberOfItems * 59;
    }
    else{
        newPrice = newNumberOfItems * 1219;
    }
    price.innerText = newPrice;
}

function getElementInnerTextById (elementId){
    const element = document.getElementById(elementId);
    const elementstr = element.innerText;
    const elementNum = parseInt(elementstr);
    return elementNum;
}

function cartTotalCalcultaions (){
    const casePrice = getElementInnerTextById('case-price');
    const phonePrice = getElementInnerTextById("phone-price");

    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = casePrice + phonePrice;

    const tax = document.getElementById('tax');
    tax.innerText = parseFloat((subTotal.innerText * 0.1).toFixed(2));

    const allTotal = document.getElementById('all-total');
    allTotal.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}