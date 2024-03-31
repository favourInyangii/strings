function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, char => char.toUpperCase());
}
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}
function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}
function filterArray(arr, condition) {
    return arr.filter(condition);
}
function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function fibonacci(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}