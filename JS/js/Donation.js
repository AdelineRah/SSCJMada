
  // Fermer la fenêtre du formulaire
  document.querySelector('.close-btn').addEventListener('click', () => {
    document.querySelector('.form-container').style.display = 'none';
  });

  // Gestion des onglets
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      // Ici, tu pourrais afficher le contenu de chaque section si nécessaire
      // par exemple afficher un champ d'adresse ou de facturation
      alert("L'onglet '" + tab.textContent + "' est sélectionné (fonctionnalité à implémenter)");
    });
  });

  // Récupération des données du formulaire
  document.querySelector('.btn-save').addEventListener('click', () => {
    const prenom = document.getElementById('prenom').value;
    const nom = document.getElementById('nom').value;
    const email = document.getElementById('email').value;
    const telephone = document.getElementById('telephone').value;

    console.log("Informations du client :");
    console.log("Prénom:", prenom);
    console.log("Nom:", nom);
    console.log("Email:", email);
    console.log("Téléphone:", telephone);

    alert("Formulaire enregistré dans la console !");
  });

  // Bouton Annuler (réinitialise les champs)
  document.querySelector('.btn-cancel').addEventListener('click', () => {
    document.getElementById('prenom').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telephone').value = '';
  });

