console.log('დავალება1')
function calculate(n = 1) {
    if (n > 10) {
        return;
    }
    console.log(3 * n);
    calculate(n + 1);
}

calculate();

console.log('დავალება2')
let i = 10;
while (i >= 1) {
    console.log(i);
    i--;
}

console.log('დავალება3')
let n = 1;
let answer = 0;
while (n <= 100) {
    answer+= n;
    n++;
}
console.log(answer);
 console.log('დავალება 4')
let num= 1;
while (num <= 16) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}

console.log("")
console.log("")
console.log("")
console.log("")
console.log("")
console.log("")

const tengo = document.getElementById("logo");
const tengo1 = document.querySelector('.hidelist'); 

tengo.addEventListener('click', function() {
    tengo1.classList.toggle('active'); 
});