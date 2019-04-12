
var rendeles = " ";
var cim;
var email;
var extra ;
var uzenet = "  "

function getData(){
 rendeles = "A rendeles: ";
if(document.getElementById('menu-0').checked == true) {
          rendeles = rendeles + " A: " + document.getElementById('a-menyi').value;
}

if(document.getElementById('menu-1').checked == true) {
        rendeles =   rendeles + " B: " +  document.getElementById('b-menyi').value;
}

if(document.getElementById('menu-2').checked == true) {
      rendeles =    rendeles + " C: " + document.getElementById('c-menyi').value;
}

getemail();
getName();


uzenet =  "cim: "+ cim +";"+rendeles +" ; "+"; egyeb: "+ extra  ;
console.log(uzenet);

}


function getemail(){

email = document.getElementById('email').value;

}

function getName(){

  cim = document.getElementById('cim').value;
nev = document.getElementById('nev').value;
extra = document.getElementById('cim-egyeb').value;

}
