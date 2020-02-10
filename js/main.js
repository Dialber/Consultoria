const icon_ambur=document.getElementById("id-menu");
const menu=document.getElementById("id-nav");
const close=document.getElementById("id-close");

icon_ambur.addEventListener("click",()=>{
    menu.classList.add("show");
})
close.addEventListener("click",()=>{
    menu.classList.remove("show");
})