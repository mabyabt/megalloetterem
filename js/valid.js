
function init(){

document.getElementById('menu-0').checked =false;
document.getElementById('menu-1').checked =false;
document.getElementById('menu-2').checked =false;

valid();

}




function valid() {

///vaid A
        if(document.getElementById('menu-0').checked == true) {
                    document.getElementById('a-menyi').disabled = false;
        }
        else {
          document.getElementById('a-menyi').disabled = true;

        }
///vaid B
        if(document.getElementById('menu-1').checked == true) {
                    document.getElementById('b-menyi').disabled = false;
        }
        else {
          document.getElementById('b-menyi').disabled = true;

        }

        ///vaid C
         if(document.getElementById('menu-2').checked == true) {
                      document.getElementById('c-menyi').disabled = false;
          }
          else {
            document.getElementById('c-menyi').disabled = true;

          }




}
