
<?php
$serveur = "localhost";       
$utilisateur = "root";         
$mot_de_passe = "";            
$base_de_donnees = "projet_sscjmada";  
$conn = new mysqli($serveur, $utilisateur, $mot_de_passe, $base_de_donnees);
if ($conn->connect_error) {
    die("Échec de la connexion : " . $conn->connect_error);
}
$conn->set_charset("utf8mb4");
echo "Connexion réussie à la base de données.";
mysqli_set_charset($conn, "utf8mb4");
?>



