
var menu=document.getElementById('id-menu');
var bars=document.getElementById('id-nav');

/*Adiciono la clase que muestra el menu cuando se cliclea el botón de amburgueza*/
document.getElementById('id-nav').addEventListener('click',()=>{
    menu.classList.add('show');
    this.bars.setAttribute("aria-expanded","true");   
})

/*Remuevo la clase que muestra el menu cuando se cliclea al botón cerrar*/

    document.querySelector('#id-close-menu').addEventListener('click',()=>{
        menu.classList.remove('show');
        this.bars.setAttribute("aria-expanded","false");
    })
/*Solo hago responsive las fuentes de los datos principales porque en pantallas demaciado grandes los textos se superponen*/
function ResponsiveGraficFont(){
    var array=document.querySelectorAll('.morris-hover.morris-default-style');    
    array[0].style.fontSize=0.8+"rem";
}
window.addEventListener('load',ResponsiveGraficFont,false);