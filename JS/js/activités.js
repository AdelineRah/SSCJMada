
document.addEventListener("DOMContentLoaded", function () {
    const voirPlusEducation = document.getElementById("VoirplusEducation");
    const educationDetailler = document.getElementById("EducationDetailler");
    const btnVoirMoinsEducation = document.querySelector("#EducationDetailler .btnVoirMoins");
    
    const voirPlusProfession = document.getElementById("VoirplusProfession");
    const professionDetailler = document.getElementById("ProfessionDetailler"); // CORRIGÉ : nom était mal écrit (2 "r")
    const btnVoirMoinsProfession = document.querySelector("#ProfessionDetailler .btnVoirMoins");
   
    const body = document.body;

    // Bloc Education
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

    // Bloc Profession
    if (voirPlusProfession && professionDetailler && btnVoirMoinsProfession) {
        voirPlusProfession.addEventListener("click", () => {
            professionDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsProfession.addEventListener("click", () => { // CORRIGÉ : ce n'était pas le bon bouton avant
            professionDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }
});



