const input = document.getElementById('wordInput');


function reverseString(str) {
    return str.split('').reverse().join('');
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert(`${value} is a palindrome!`);
    }
    else {
        alert(`${value} is not a palindrome!`);
    }

    input.value = "";
}