// const voirplus=document.getElementById("Voirplus");
// const body=document.querySelector("body");
// const btnVoirMoins = document.querySelector(".btnVoirMoins")
// const NoviciatDetailler=document.getElementById("NoviciatDetailler");
// voirplus.addEventListener("click",()=>{
//     console.log(NoviciatDetailler);
//     NoviciatDetailler.style.display = "block"
//     body.style.overflowY= "hidden";
    
// })
// btnVoirMoins.addEventListener('click', ()=>{
//     body.style.overflowY= "Auto";
//     NoviciatDetailler.style.display = "none"

// })



document.addEventListener("DOMContentLoaded", function () {
    const voirplus = document.getElementById("Voirplus");
    const body = document.querySelector("body");
    const presentationDetailler = document.getElementById("NoviciatDetailler");
    const btnVoirMoins = document.querySelector(".btnVoirMoins");

    // Affiche la section détaillée et désactive le scroll
    voirplus.addEventListener("click", () => {
      presentationDetailler.style.display = "block";
      body.style.overflowY = "hidden";
    });

    // Cache la section détaillée et réactive le scroll
    btnVoirMoins.addEventListener("click", () => {
      presentationDetailler.style.display = "none";
      body.style.overflowY = "auto";
    });
  });