/* const icon_ambur=document.getElementById("id-menu");
const menu=document.getElementById("id-nav");
const close=document.getElementById("id-close");

icon_ambur.addEventListener("click",()=>{
    menu.classList.add("show");
})
close.addEventListener("click",()=>{
    menu.classList.remove("show");
}) */
/* var links=document.getElementsByClassName("link");
function Line() {    
    for (let index = 0; index < links.length; index++) {
        let item=links[index];
            item.addEventListener('mouseover',()=>{
            item.classList.add('square-line');
            if (item.classList.contains('line')) {                
                item.classList.remove('line');
            }
            for (let i = 0; links[i] != item; i++) {
                links[i].classList.add('line');
            }
        }) 
        links[index].addEventListener('mouseout',()=>{
            links[index].classList.remove('square-line');
        }) 
    }
}
function ClearLines() {
    document.getElementById("id-menuNav").addEventListener('mouseout',()=>{
        for (let index = 0; index < links.length; index++) {
            if(links[index].classList.contains('line')){
                links[index].classList.remove('line');         
            }
            if(links[index].classList.contains('square-line')){
                links[index].classList.remove('square-line');         
            }
        }
    })
}

window.addEventListener('load',Line,false);
window.addEventListener('load',ClearLines,false); */
var menu=document.getElementById('id-menu');
var bars=document.getElementById('id-nav');
var hide=true;

document.getElementById('id-nav').addEventListener('click',()=>{
    menu.classList.add('show');
    this.bars.setAttribute("aria-expanded","true");
    this.hide=false;
    ChanceFocus(hide);
})
document.getElementById('id-close-menu').addEventListener('click',()=>{
    menu.classList.remove('show');
    this.hide=true;
    ChanceFocus(hide);
    this.bars.setAttribute("aria-expanded","false");
})

/*Metodo usado para remover el foco cuando traslade el menú fuera de la pantalla*/
function ChanceFocus(hide) {   
    var elements=document.querySelectorAll('.menu__all a, .menu__all button');
    for (let index = 0; index < elements.length; index++) {
        if(this.hide){        
            elements[index].setAttribute("tabindex","-1");        
        }
        else{
            elements[index].setAttribute("tabindex","0"); 
        }
    }
}
window.addEventListener('load',ChanceFocus,false);