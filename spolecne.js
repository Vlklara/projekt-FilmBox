/*V souboru spolecne.js najděte pomocí document.querySelector prvek s id menu-tlacitko.

Přidejte mu posluchač události kliknutí.

*/
/*Přidejte prvku s id menu-polozky třídu show ve chvíli, kdy událost nastane.

Rozšiřte kód tak, aby se třída show naopak odebrala, pokud ji prvek již měl.

*/
/*Změňte ikonku tlačítka na křížek, pokud je menu rozbalené a
 na hamburger, pokud je sbalené.
HTML ikonky křížku: <i class="fas fa-xmark"></i>
HTML ikonky hamburgeru: <i class="fas fa-bars"></i>

*/

const button = document.querySelector("#menu-tlacitko")
const menu = document.querySelector("#menu-polozky")
const ham = document.querySelector ('#menuIcon')
const items = document.querySelector (".nav-item")
const show = document.querySelector ("show")


/*const pri1Kliknuti = () => {
   
 if (menu.classList.contains('show'))  {
    
    menu.classList.remove('show') 
        
} else {
    menu.classList.add("show")
}  
       
        
if (ham.classList.contains("fa-bars")) {
    
    ham.classList.remove("fa-bars")
    ham.classList.add ("fa-xmark")
    
} else {
    ham.classList.add ("fa-bars")
    ham.classList.remove ("fa-xmark")
}

} 
  
button.addEventListener("click", pri1Kliknuti)
*/


const pri1Kliknuti = () => {
menu.classList.toggle ('show')
ham.classList.toggle ("fa-xmark")
}



button.addEventListener("click", pri1Kliknuti)
  
































