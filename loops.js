function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am " + i + " strange loop.")
    } else {
      array.push("I am " + i + " strange loops.")
    }
   
  }
  
  return array
  
}

function whileLoop(n) {
  var countdown = n
  while (countdown > 0) {
    console.log(countdown--)
  }
  return 'done'
}

function doWhileLoop(array) {
  var i = 0;
 
  function incrementVariable() {
    i = i + 1;
 }
 
 do {
  var sliced =  array.slice(0, array.length -1)
   incrementVariable()
   return sliced
 } while (array.length > 0 && incrementVariable() )
 
 
}