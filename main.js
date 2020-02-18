// fizzbuzz課題

document.getElementById('button').addEventListener('click',function() {
  const fizzNum = document.getElementById('fizzInput').value;
  const buzzNum = document.getElementById('buzzInput').value; 
  const fn = parseInt(fizzNum,10);
  const bn = parseInt(buzzNum,10);
  if(!isNaN(fn) && !isNaN(bn)) {
    const fizz = document.createElement('li');
    fizz.textContent = fn;
    const buzz = document.createElement('li')
    buzz.textContent = bn;
    const ul1 = document.querySelector('ul');
    const ul2 = document.querySelector('ul');
    ul1.appendChild(fizz);
    ul2.appendChild(buzz);
    
}else {
  const nan = document.createElement('li');
  nan.textContent ="整数値ではありません";
  const ul3 = document.querySelector('ul');
  ul3.appendChild(nan);
}
})
