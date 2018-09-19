const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body')

  body.addEventListener('keydown', function(e) {
    const key = e.key;
    
    let index = 0;
   
     if (key === codes[index]) {
        index++;
    
      if (index === codes.length - 1) {
        alert('Congratulations!');
      
        index = 0;
    }
  } 
  else {
   index = 0;
  }
  })
}

init();