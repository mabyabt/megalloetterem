
<script src="js/getter.js"></script>
<script>
getData()</script>
<?php

function getMassage() {
   return getuzenet();
}


function getemailadd() {
return getemail();
 }


function sendmail(string $cim = getemailadd(), string $uzenet = getMassage()){
 mail ( $cim , string "menu rendeles" ,  $uzenet [, mixed $additional_headers [, string $additional_parameters ]] ) : bool
echo "uzenet elkuldve";

}



?>
