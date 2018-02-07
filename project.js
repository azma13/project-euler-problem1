var text = "";
var jum = 0
var i;
  for (i = 0; i < 1000; i=i+1) {
    if (i%3==0 || i%5==0){
    jum=jum+i
    }
  } 
text+=jum;
console.log(text);