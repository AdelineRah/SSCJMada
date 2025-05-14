
  document.addEventListener("DOMContentLoaded", function () {
    const voirplus = document.getElementById("voirPlusProfesse");
    const presentationDetailler = document.getElementById("ProfesseTemporaireDetailler");
    const btnVoirMoins = presentationDetailler.querySelector(".btnVoirMoins");
    const body = document.body;

    // Afficher la section modale
    voirplus.addEventListener("click", () => {
      presentationDetailler.style.display = "block";
      body.style.overflow = "hidden";
    });

    // Fermer la section modale
    btnVoirMoins.addEventListener("click", () => {
      presentationDetailler.style.display = "none";
      body.style.overflow = "auto";
    });
  });

