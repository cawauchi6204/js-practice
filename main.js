
// fizzbuzz課題

const btn = document.getElementById('button');
btn.addEventListener('click',function() {
  const fizzNum = document.getElementById('fizzInput').value;
  const buzzNum = document.getElementById('buzzInput').value; 
  const fn = parseInt(fizzNum,10);
  const bn = parseInt(buzzNum,10);
  const li = document.createElement('li');
  const ul = document.querySelector('ul');
  if(!isNaN(fn) && !isNaN(bn)) {
    for(let i = 1; i <= 100; i++) {
      if ( i % fn === 0  && i % bn === 0 ) {
        li.innerHTML += ('fizzbuzz:'+ i + '<br>');
        ul.appendChild(li);
      }else if(i % fn === 0) {
        li.innerHTML += ('fizz:'+ i + '<br>');
        ul.appendChild(li);
      }else if ( i % bn === 0 ) {
        li.innerHTML += ('buzz:'+ i + '<br>' );
        ul.appendChild(li);
      }
      }
    } else {
        ul.innerHTML ='';
        li.innerHTML = "整数値ではありません";
        ul.appendChild(li);
      }
  })

