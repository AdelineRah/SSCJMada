document.getElementById('commandeForm').addEventListener('submit', async function (e) {
    e.preventDefault();
  
    // Récupération des données du formulaire
    const formData = new FormData(this);
    const data = {};
  
    formData.forEach((value, key) => {
      if (data[key]) {
        // Pour gérer les checkbox multiples (ex: pays)
        if (!Array.isArray(data[key])) data[key] = [data[key]];
        data[key].push(value);
      } else {
        data[key] = value;
      }
    });
  
    // Envoi vers un serveur fictif (remplace l'URL par la tienne)
    try {
      const response = await fetch('https://votre-api.com/commande', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        const result = await response.json();
        alert("Commande envoyée avec succès !");
        console.log("Réponse du serveur :", result);
      } else {
        alert("Erreur lors de l'envoi de la commande.");
        console.error("Erreur HTTP :", response.status);
      }
    } catch (error) {
      alert("Une erreur s'est produite lors de l'envoi.");
      console.error("Erreur réseau :", errors);
    }
  });
  
  function modifierDemande() {
    alert("Redirection vers le panier (fonction à implémenter).");
  }
  