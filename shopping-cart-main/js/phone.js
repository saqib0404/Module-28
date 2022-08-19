/* function updateNumberOfPhones(isIncrease, fieldId) {
    const itemField = document.getElementById(fieldId);
    const itemStr = itemField.value;
    const previousNumberOfItems = parseInt(itemStr);

    let newNumberOfItems;
    if (isIncrease === true) {
        newNumberOfItems = previousNumberOfItems + 1;
    }
    else {
        newNumberOfItems = previousNumberOfItems - 1;
        if (newNumberOfItems < 0) {
            alert('ERROR!!!!!!');
            return 0;
        }
    }
    itemField.value = newNumberOfItems;
    return newNumberOfItems;
}

function updateItemPrice(PriceId, newNumberOfItems) {
    const previousItemPrice = document.getElementById(PriceId);
    const newItemPrice = newNumberOfItems * 1219;
    previousItemPrice.innerText = newItemPrice
} */

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    // const newNumberOfItems = updateNumberOfPhones(true, "phone-input");
    // updateItemPrise("phone-price", newNumberOfItems);
    const newNumberOFPhones = updateNumberOFItems("phone-input", true);
    updateItemPrice("phone-price", newNumberOFPhones, false);

    cartTotalCalcultaions();
})

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    // const newNumberOfItems = updateNumberOfPhones(false, "phone-input");
    // updateItemPrise("phone-price", newNumberOfItems);

    const newNumberOFPhones = updateNumberOFItems("phone-input", false);
    updateItemPrice("phone-price", newNumberOFPhones, false);

    cartTotalCalcultaions();
})

document.getElementById('item-remover').addEventListener('click', function(){
    document.getElementById('phone-item').style.display = 'none'
    console.log(10);
})