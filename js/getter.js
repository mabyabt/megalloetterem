function getData(){
var rendeles = "A rendeles: ";
if(document.getElementById('menu-0').checked == true) {
          rendeles = rendeles + " A: " + document.getElementById('a-menyi').value;
}

if(document.getElementById('menu-1').checked == true) {
        rendeles =   rendeles + " B: " +  document.getElementById('b-menyi').value;
}

if(document.getElementById('menu-2').checked == true) {
      rendeles =    rendeles + " C: " + document.getElementById('c-menyi').value;
}


console.log(rendeles);

}
