document.addEventListener("DOMContentLoaded", function () {
    const voirplusTemoignage = document.getElementById("VoirplusTemoignage");
    const temoignageDetailler = document.getElementById("TemoignageDetailler");
    const btnVoirMoinsTemoignage = document.querySelector("#TemoignageDetailler .btnVoirMoins");

    const voirplusPrison = document.getElementById("VoirplusPrison");
    const prisonDetailler = document.getElementById("PrisonDetailler");
    const btnVoirMoinsPrison = document.querySelector("#PrisonDetailler .btnVoirMoins");
    
    const VoirplusJubilaire= document.getElementById("VoirplusJubilaire");
    const JubilaireDetailler = document.getElementById("JubilaireDetailler");
    const btnVoirMoinsJubilaire = document.querySelector("#JubilaireDetailler .btnVoirMoins");
    

    const body = document.body;

    // Gestion du témoignage
    if (voirplusTemoignage && temoignageDetailler && btnVoirMoinsTemoignage) {
        voirplusTemoignage.addEventListener("click", () => {
            temoignageDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsTemoignage.addEventListener("click", () => {
            temoignageDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

    // Gestion de la prison
    if (voirplusPrison && prisonDetailler && btnVoirMoinsPrison) {
        voirplusPrison.addEventListener("click", () => {
            prisonDetailler.style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsPrison.addEventListener("click", () => {
            prisonDetailler.style.display = "none";
            body.style.overflow = "auto";
        });
    }

     // Gestion du jubilaire
     if (VoirplusJubilaire && JubilaireDetailler&& btnVoirMoinsJubilaire) {
        VoirplusJubilaire .addEventListener("click", () => {
            JubilaireDetailler .style.display = "block";
            body.style.overflow = "hidden";
        });

        btnVoirMoinsJubilaire.addEventListener("click", () => {
            JubilaireDetailler  .style.display = "none";
            body.style.overflow = "auto";
        });
    }
});
