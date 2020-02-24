
// fizzbuzz課題

const btn = document.getElementById('button');
btn.addEventListener('click',function() {
const fizzNum = document.getElementById('fizzInput').value;
const buzzNum = document.getElementById('buzzInput').value; 
const fn = parseInt(fizzNum,10);
const bn = parseInt(buzzNum,10);
const li = document.createElement('li')
const ul = document.querySelector('ul');
if(!isNaN(fn) && !isNaN(bn)) {
for(let i = 1; i <= 100; i++) {
if ( i % fn == 0  && i % bn == 0 ) {
li.textContent +=('fizzbuzz:'+ i +'\n');
ul.appendChild(li);
}else if(i % fn === 0) {
li.textContent +=('fizz:'+ i +'\n');
ul.appendChild(li);
}else if ( i % bn === 0 ) {
li.textContent +=('buzz:'+ i + '\n');
ul.appendChild(li);
}
}
} else {
if(ul) {
ul.textContent = null;
const nan = document.createElement('li');
nan.textContent ="整数値ではありません";
const ulNan = document.querySelector('ul');
ulNan.appendChild(nan);
}
}
})

