function generatePin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = generatePin();
    const pinStr = pin + '';
    if (pinStr.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('pin-btn').addEventListener('click', function () {
    const pin = getPin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

document.getElementById('calculatator').addEventListener('click', function (event) {
    const typedNumberField = document.getElementById('typed-numbers');
    const typedNumbers = event.target.innerText;
    const previousTypedNumbers = typedNumberField.value;
    if (isNaN(typedNumbers)) {
        if (typedNumbers === 'C') {
            typedNumberField.value = '';
        }
        else if (typedNumbers === '<') {
            const digits = previousTypedNumbers.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typedNumberField.value = remainingDigits;
        }
    }
    else {
        const newTypedNumbers = previousTypedNumbers + typedNumbers;
        typedNumberField.value = newTypedNumbers;
    }
})

document.getElementById('pin-matcher-btn').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    if (displayPin === typedNumbers) {
        document.getElementById('correct-msg').style.display = 'block';
        document.getElementById('inncorrect-msg').style.display = 'none';
    }
    else{
        document.getElementById('inncorrect-msg').style.display = 'block';
        document.getElementById('correct-msg').style.display = 'none';
    }
})