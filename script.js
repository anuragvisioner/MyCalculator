function clearSrcr() {
    document.getElementById('result').value = '';
}

function deleteLastChar() {
    let result = document.getElementById('result').value;
    document.getElementById('result').value = result.substring(0, result.length - 1);
}

function display(value) {
    document.getElementById('result').value += value;
}

function sqrt() {
    let result = document.getElementById('result').value;
    if (result) {
        document.getElementById('result').value = Math.sqrt(parseFloat(result));
    } else {
        document.getElementById('result').value = 'Error';
    }
}

function calculate() {
    let result = document.getElementById('result').value;
    try {
        document.getElementById('result').value = eval(result);
    } catch (e) {
        document.getElementById('result').value = 'Error';
    }
}
