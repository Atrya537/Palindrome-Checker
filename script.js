const button = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

const nonAlphaNumerics = [" ", ",", "<", ".", ">", "/", "?", ";", ":", "'", "\"", "[", "{", "]", "}", "\\", "|", "=", "+", "-", "_", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~"];

function checkWord() {
    const str = document.getElementById("text-input").value;
    let strArray = str.split('');
    for (let i = 0; i < strArray.length; i++) {
        if (nonAlphaNumerics.includes(strArray[i])) {
            strArray.splice(i, 1);
            i--;
        }
    }

    if (str.length < 1) {
        alert("Please input a value");
    } else if (strArray.join('').toLowerCase() === strArray.reverse().join('').toLowerCase()) {
        resultElement.textContent = `${str} is a palindrome`;
    } else { resultElement.textContent = `${str} is not a palindrome`; }
}