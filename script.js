
var button_code_bar = document.getElementById('button_code_bar');
var text = document.getElementById('text');
var box = document.getElementById('box');
var pdf_box = document.getElementById('pdf_box');

// Ajouter un événement au bouton pour générer le code-barres
button_code_bar.onclick = function () {
    if (text.value.length > 0) {
        if (text.value.length < 50) {
            // Générer le code-barres
            box.innerHTML = "<svg id='barcode'></svg>";
            JsBarcode("#barcode", text.value);
            box.style.border = '1px solid #999';

            // Créer un bouton pour télécharger le code-barres en image
            pdf_box.innerHTML = "<button onclick='TelechargerCodeBar()'>Télécharger le code-barres</button>";
            pdf_box.style.marginTop = "10px";
            pdf_box.style.display = "flex";
        } else {
            box.style.border = "0";
            box.innerHTML = "<p class='error'>Le texte est trop long!</p>";
            pdf_box.style.display = "none";
        }
    } else {
        box.style.border = "0";
        box.innerHTML = "<p class='error'> Remplissez le champ !</p>";
        pdf_box.style.display = "none";
    }
}

// Fonction pour télécharger le code-barres en tant qu'image PNG
function TelechargerCodeBar() {
    const svgElement = document.getElementById('barcode'); // Récupérer l'élément SVG
    const svgData = new XMLSerializer().serializeToString(svgElement); // Convertir SVG en chaîne de caractères
    const canvas = document.createElement('canvas'); // Créer un canvas pour dessiner l'image
    const ctx = canvas.getContext('2d');
}
    // Créer une image à partir du SVG
    const img = new Image();
    img.onload = function (){
        
    }
        
