const voirplus=document.getElementById("Voirplus");
const body=document.querySelector("body");
const btnVoirMoins = document.querySelector(".btnVoirMoins")
const presentationDetailler=document.getElementById("presentationDetailler");
voirplus.addEventListener("click",()=>{
    console.log(presentationDetailler);
    presentationDetailler.style.display = "block"
    body.style.overflowY= "hidden";
    
})
btnVoirMoins.addEventListener('click', ()=>{
    body.style.overflowY= "Auto";
    presentationDetailler.style.display = "none"


})