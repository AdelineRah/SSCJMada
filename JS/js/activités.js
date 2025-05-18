
document.addEventListener("DOMContentLoaded", function () {
    const voirPlusEducation = document.getElementById("VoirplusEducation");
    const educationDetailler = document.getElementById("EducationDetailler");
    const btnVoirMoinsEducation = document.querySelector("#EducationDetailler .btnVoirMoins");
    
    const voirPlusProfession = document.getElementById("VoirplusProfession");
    const professionDetailler = document.getElementById("ProfessionDetailler"); 
    const btnVoirMoinsProfession = document.querySelector("#ProfessionDetailler .btnVoirMoins");
   
    const voirPlusSanté = document.getElementById("VoirplusSanté");
    const santéDetailler = document.getElementById("SantéDetailler"); 
    const btnVoirMoinsSanté = document.querySelector("#SantéDetailler .btnVoirMoins");

    const voirPlusPrison = document.getElementById("VoirplusPrison");
    const prisonDetailler = document.getElementById("PrisonDetailler"); 
    const btnVoirMoinsPrison = document.querySelector("#PrisonDetailler .btnVoirMoins");
   
    const voirPlusMouvement = document.getElementById("VoirplusMouvement");
    const mouvementDetailler = document.getElementById("MouvementDetailler"); 
    const btnVoirMoinsMouvement = document.querySelector("#MouvementDetailler .btnVoirMoins");
   
    const voirPlusOeuvres = document.getElementById("VoirplusOeuvres");
    const oeuvresDetailler = document.getElementById("OeuvresDetailler"); 
    const btnVoirMoinsOeuvres = document.querySelector("#OeuvresDetailler .btnVoirMoins");
   
    const body = document.body;

   
    if (voirPlusEducation && educationDetailler && btnVoirMoinsEducation) {
        voirPlusEducation.addEventListener("click", () => {
            educationDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsEducation.addEventListener("click", () => {
            educationDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    if (voirPlusProfession && professionDetailler && btnVoirMoinsProfession) {
        voirPlusProfession.addEventListener("click", () => {
            professionDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsProfession.addEventListener("click", () => { 
            professionDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    if ( voirPlusSanté && santéDetailler && btnVoirMoinsSanté) {
        voirPlusSanté.addEventListener("click", () => {
            santéDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsSanté.addEventListener("click", () => {
            santéDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    if (voirPlusPrison && prisonDetailler && btnVoirMoinsPrison) {
        voirPlusPrison.addEventListener("click", () => {
            prisonDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsPrison.addEventListener("click", () => {
            prisonDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    if (voirPlusMouvement && mouvementDetailler && btnVoirMoinsMouvement) {
        voirPlusMouvement.addEventListener("click", () => {
           mouvementDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsMouvement.addEventListener("click", () => {
            mouvementDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    
    if (voirPlusOeuvres && oeuvresDetailler && btnVoirMoinsOeuvres) {
        voirPlusOeuvres.addEventListener("click", () => {
            oeuvresDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsOeuvres.addEventListener("click", () => {
            oeuvresDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

});



