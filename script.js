let donneesGlobales; // Variable pour stocker les données

// Charger les données depuis le fichier JSON et remplir la liste déroulante
fetch("data.json")
    .then(reponse => {
        if (!reponse.ok) {
            throw new Error("Erreur lors du chargement des données JSON.");
        }
        return reponse.json();
    })
    .then(donnees => {
        donneesGlobales = donnees; // Assigner les données à la variable globale

        // Remplir toutes les listes déroulantes du tableau
        const listesDeroulantes = document.querySelectorAll("select");
        listesDeroulantes.forEach(liste => {
            for (const option in donneesGlobales) {
                const opt = document.createElement("option");
                opt.value = option;
                opt.textContent = option;
                liste.appendChild(opt);
            }
        });
    })
    .catch(erreur => console.error("Erreur lors du chargement des données :", erreur));

    
// Fonction pour mettre à jour la ligne en fonction de la sélection
window.mettreAJourLigne = function(select) {
    const ligne = select.closest("tr");
    const optionSelectionnee = select.value;
    const details = donneesGlobales[optionSelectionnee] || ["", "", "", ""];

    ligne.querySelector(".detail1").textContent = details[0]; 
    ligne.querySelector(".detail2").textContent = details[1];
    ligne.querySelector(".detail3").textContent = details[2];
    ligne.querySelector(".detail4").textContent = details[3];
    ligne.querySelector(".detail5").textContent = details[4]; 
    ligne.querySelector(".detail6").textContent = details[5];
    ligne.querySelector(".detail7").textContent = details[6];
    ligne.querySelector(".detail8").textContent = details[7];  
    ligne.querySelector(".detail9").textContent = details[8]; 
    ligne.querySelector(".detail10").textContent = details[9];
    ligne.querySelector(".detail11").textContent = details[10];
    ligne.querySelector(".detail12").textContent = details[11];  
    ligne.querySelector(".detail13").textContent = details[12]; 
    ligne.querySelector(".detail14").textContent = details[13];
    ligne.querySelector(".detail15").textContent = details[14];
    ligne.querySelector(".detail16").textContent = details[15];  
    ligne.querySelector(".detail17").textContent = details[16];      
};

// Fonction pour ajouter une nouvelle ligne
window.ajouterLigne = function() {
    const tableauCorps = document.getElementById("tableau-corps");
    const nouvelleLigne = document.createElement("tr");

    nouvelleLigne.innerHTML = `
        <td>
            <select onchange="mettreAJourLigne(this)">
                <option value="">Sélectionner</option>
            </select>
        </td>
        <td class="detail1"></td>
        <td class="detail2"></td>
        <td class="detail3"></td>
        <td class="detail4"></td>
        <td class="detail5"></td>
        <td class="detail6"></td>
        <td class="detail7"></td>
        <td class="detail8"></td>
        <td class="detail9"></td>
        <td class="detail10"></td>
        <td class="detail11"></td>
        <td class="detail12"></td>
        <td class="detail13"></td>
        <td class="detail14"></td>
        <td class="detail15"></td>
        <td class="detail16"></td>
        <td class="detail17"></td>        
    `;

    tableauCorps.appendChild(nouvelleLigne);

    // Remplir la nouvelle liste déroulante avec les options
    const liste = nouvelleLigne.querySelector("select");
    for (const option in donneesGlobales) {
        const opt = document.createElement("option");
        opt.value = option;
        opt.textContent = option;
        liste.appendChild(opt);
    }
};

// Fonction pour supprimer la dernière ligne
window.supprimerLigne = function() {
    const tableauCorps = document.getElementById("tableau-corps");
    const lignes = tableauCorps.querySelectorAll("tr");
    if (lignes.length > 1) { // Vérifier qu'il y a plus d'une ligne
        tableauCorps.removeChild(lignes[lignes.length - 1]);
    }
};

function openModal(th) {
    // Exemple de données sous forme de tableau
    let data = {
        'AA': {
            title: 'AA – Température ambiante (2.10.2.) ',
            content: [
                ['Code', 'Température', 'Conditions', 'Exemples'],
                ['AA1', 'Frigorifique', 'de -60°C à +5°C', 'Enceintes de congélation…'],
                ['AA2', 'Très froid', 'de -40°C à +5°C', 'Enceintes frigorifiques…'],
                ['AA3', 'Froid', 'de -25°C à +5°C', 'Emplacements extérieurs…'],
                ['AA4', 'Tempéré', 'de -5°C à +40°C', 'Emplacements tempérés…'],
                ['AA5', 'Chaud', 'de +5°C à +40°C', 'Locaux intérieurs…'],
                ['AA6', 'Très chaud', 'de +5°C à +60°C', 'Chaufferies, salles de machines…'],
                ['AA7', 'Froid', 'de -15°C à +25°C', 'Extérieur des locaux…'],
                ['AA8', 'Tempéré', 'de +5°C à +30°C', 'Locaux habituellement chauffés…']
            ]
        },

        'AD': {
            title: 'AD – Présence d’eau (2.10.3.)',
            content: [
                ['Code', 'Présence d’eau', 'Conditions', 'Exemples'],
                ['AD1', 'Présence d’eau négligeable ', 'Généralement aucune trace d’humidité', 'Locaux secs tels que salles de séjour, chambres, bureaux…'],
                ['AD2', 'Temporairement humide ', 'Chutes verticales de gouttes d’eau. Condensation occasionnelle d’humidité ou présence occasionnelle de vapeur d’eau.', 'Locaux temporairement humides tels que certaines cuisines, caves, terrasses couvertes, lieux d’aisance, garages individuels…'],
                ['AD3', 'Humides', 'Ruissellement d’eau sur les parois et sur les sols. Aspersion d’eau. Eau tombant en pluie (max. 60° avec la verticale)', 'Locaux humides tels que les locaux à poubelles, les sous-stations de vapeur ou d’eau chaude…'],
                ['AD4', 'Mouillés', 'Ruissellement et projections d’eau dans toutes les directions ', 'Lieux mouillés tels que les chantiers, les saunas, les chambres frigorifiques...'],
                ['AD5', 'Arrosés 18', 'Jets d’eau sous pression dans toutes les directions', 'Lieux exposés tels que les batteries de douches, les étables, les boucheries...'],
                ['AD6', 'Paquets d’eau', 'Lavage au jet d’eau et paquets d’eau', 'Jetées, quais, plage…'],
                ['AD7', 'Immergés', 'Profondeur d’eau ≤ 1m.', 'Bassins peu profonds tels que ceux des fontaines…'],
                ['AD8', 'Submergés', 'Profondeur d’eau > 1m.', 'Bassins profonds…']
            ]
        },
        
        'AE': {
            title: 'AE – Présence de corps solides étrangers (2.10.4.)',
            content: [
                ['Code', 'Description', 'Conditions', 'Exemples'],
                ['AE1', 'Négligeable', 'Grande dimension', 'Locaux domestiques...'],
                ['AE2', 'Petits objets', 'Plus petite dimension 2,5 mm', 'Outils...'],
                ['AE3', 'Très petits objets', 'Plus petite dimension 1 mm', 'Certains fils...'],
                ['AE4', 'Poussières', 'Poussières', 'Fabriques de ciment, ébénisteries menuiseries...']
            ]
        },
        
        'AF': {
            title: 'AF – Présence de substances corrosives ou polluantes (2.10.5.)',
            content: [
                ['Code', 'Substances corrosives ou polluantes', 'Conditions', 'Exemples'],
                ['AF1', 'Négligeable', 'Aucune influence de substances corrosives ou polluantes tant par leur nature que par leur qualité', 'Locaux d’usage domestique, locaux recevant du public et de façon générale, tous les locaux dans lesquels des produits chimiques ou corrosifs, ne sont ni manipulés, ni traités…'],
                ['AF2', 'D’origine atmosphérique', 'Voisinage des bords de mer, proximité d’établissements produisant d’importantes pollutions', 'Bâtiments situés au voisinage des industries chimiques, de cimenteries…'],
                ['AF3', 'Intermittente ou accidentelle', 'Actions de courte durée ou accidentelle de produits chimiques ou corrosifs d’usage courant', 'Laboratoires d’usines, laboratoires d’enseignement, garages, chaufferies…'],
                ['AF4', 'Permanente', 'Actions permanentes de produits chimiques, corrosifs ou polluants', 'Industries chimiques, industries dans lesquelles il est fait usage de produits chimiques ou corrosifs (peintures, chromage, hydrocarbures, matières plastiques,…)…']
            ]
        },
        
        'AG': {
            title: 'AG – Contraintes mécaniques dues aux chocs (2.10.6.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['AG1', 'Usage domestique', 'Énergie de choc ≤ 1 J', 'Locaux domestiques...'],
                ['AG2', 'Usage industriel – conditions normales', 'Énergie de choc ≤ 6 J', 'Lieux de travail...'],
                ['AG3', 'Usage industriel – conditions sévères', 'Énergie de choc ≤ 60 J', 'Lieux avec le traitement d’accessoires lourds...']
            ]
        },
        
        'AH': {
            title: 'AH – Contraintes mécaniques dues aux vibrations (2.10.7.)',
            content: [
                ['Code', 'Vibrations', 'Conditions', 'Exemples'],
                ['AH1', 'Faibles', 'Aucune vibration', 'Locaux domestiques et, de façon générale, les matériels fixes sans moteurs…'],
                ['AH2', 'Moyennes', 'Faibles vibrations', 'Matériels comportant des moteurs ou des parties mobiles…'],
                ['AH3', 'Importantes', 'Vibrations importantes', 'Voisinage de tamis vibrants, d’appareils vibrateurs… ']
            ]
        },

        'AK': {
            title: 'AK – Présence de flore et/ou moisissures (2.10.8.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['AK1', 'Négligeable', 'Pas de limitation d’emploi', 'Normal, absence de risques nuisibles dus à la flore ou aux moisissures...'],
                ['AK2', 'Risques', 'Protection spéciale', 'Développement nuisible de la végétation ou son abondance: Bois…']
            ]
        },

        'AL': {
            title: 'AL – Présence de faune (2.10.8.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['AL1', 'Négligeable', 'Pas de limitation d’emploi', 'Absence de risques nuisibles dus à la faune: Normal...'],
                ['AL2', 'Risques', 'Protection spéciale', 'Présence d’insectes, d’animaux ou d’oiseaux en quantité nuisible ou de nature agressive. Bois, lieux qui ne sont pas entretenus…']
            ]
        },

        'AM': {
            title: 'AM – Influences électromagnétiques, électrostatiques ou ionisantes. (2.10.9.)',
            content: [
                ['Code', 'Description'],
                ['AM1', 'Absence d’effets nuisibles dus à des courants vagabonds, des radiations électromagnétiques, des rayonnements ionisants ou des courants induits '],
                ['AM2', 'Présence nuisible de courants vagabonds'],
                ['AM3', 'Présence nuisible de radiations électromagnétiques'],
                ['AM4', 'Présence nuisible de rayonnements ionisants'],
                ['AM5', 'Influences électrostatiques nuisibles'],
                ['AM6', 'Présence nuisible de courants induits']
            ]
        },

        'AN': {
            title: 'AN – Rayonnements solaires (2.10.10.)',
            content: [
                ['Code', 'Description'],
                ['AN1', 'Rayonnements solaires négligeables'],
                ['AN2', 'Rayonnements solaires nuisibles en intensité ou en durée']
            ]
        },

        'BA': {
            title: 'BA – Compétence des personnes (2.10.11.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['BA1', 'Ordinaires', 'Personnes non classifiées', 'Locaux à usage domestique ou analogue, locaux recevant du public général…'],
                ['BA2', 'Enfants', 'Enfants se trouvant dans des locaux qui leur sont destinés', 'Crèches et garderies d’enfants…'],
                ['BA3', 'Handicapés', 'Personnes ne disposant pas de toutes leurs capacités mentales et physiques', 'Hospices pour invalides ou vieillards ou aliénés mentaux…'],
                ['BA4', 'Averties', 'Personnes suffisamment informées ou surveillées par des personnes qualifiées afin de réduire les risques électriques au minimum', 'Agents d’exploitation ou d’entretien des installations électriques…'],
                ['BA5', 'Qualifiées', 'Personnes dont les connaissances techniques ou l’expérience leur permettent d’éviter les dangers que présente l’électricité.', 'Ingénieurs, techniciens chargés de l’exploitation des installations électriques…']
            ]
        },
        
        'BB': {
            title: 'BB – Etat du corps humain (2.10.12.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['BB1', 'Normal', 'Peau sèche ou humide par sueur', 'Personne avec une peau humide qui est soumise à un passage de courant entre ses deux mains...'],
                ['BB2', 'Basse', 'Peau mouillée', 'Personne avec les pieds mouillés et dont la résistance de la peau des pieds est négligée, qui est soumise à un passage de courant entre les mains et les pieds...'],
                ['BB3', 'Très basse', 'Peau immergée dans l’eau', 'Personne qui se trouve sous l’eau. Piscines, bains, douches…']
            ]
        },
        'BC': {
            title: 'BC – Contacts des personnes avec le potentiel de terre (2.10.13.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['BC1', 'Nuls', 'Les personnes se trouvent dans des locaux ou emplacements non conducteurs', 'Locaux dont les sols et les parois sont isolants et ne comportent aucun élément conducteur...'],
                ['BC2', 'Faibles', 'Les personnes ne touchent pas normalement des éléments conducteurs au potentiel de terre', 'Locaux dont les sols et les parois sont isolants ou isolés et contiennent peu d’éléments conducteurs, tels que chambres, salles de séjour des logements d’habitation, bureaux…'],
                ['BC3', 'Fréquents', 'Les personnes sont en contact fréquent avec des éléments conducteurs au potentiel de terre', 'Locaux dont les sols et les parois sont conducteurs et comportent de nombreux éléments conducteurs…'],
                ['BC4', 'Continues', 'Les personnes sont en contact permanent avec des éléments conducteurs au potentiel de terre et leurs possibilités de mouvements sont généralement limitées', 'Enceintes conductrices tels que cuves métalliques, chaudières et réservoirs métalliques,…']
            ]
        },
'BD': {
    title: 'BD – Possibilités d’évacuation des personnes en cas d’urgence (2.10.14.)',
    content: [
        ['Code', 'Désignation', 'Densité d’occupation', 'Conditions d’évacuation', 'Exemples'],
        ['BD1', 'Normale', 'Faible', 'Faciles', 'Bâtiments à usage d’habitation, hauteur <25 m…'],
        ['BD2', 'Longue', 'Faible', 'Difficiles', 'Bâtiments élevés, hauteur ≥25 m…'],
        ['BD3', 'Encombrée', 'Importante', 'Faciles', 'Établissements recevant du public…'],
        ['BD4', 'Longue et Encombrée', 'Importante', 'Difficiles', 'Établissement recevant du public, hauteur >25m…']
    ]
}
,
        'BE': {
            title: 'BE – Nature des matières traitées ou entreposées (2.10.15.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['BE1', 'Risques négligeables', 'Absence ou quantités négligeables de matières inflammables, explosives ou susceptibles de contaminer.', 'Locaux à usage domestique…'],
                ['BE2', 'Risques d’incendie', 'Traitement ou stockage de matières combustibles et de liquides inflammables à point d’éclair supérieur à 55 C', 'Granges, menuiseries, fabriques de papier, chaufferies, parkings, bibliothèques, salles d’archives, réserves magasin…'],
                ['BE3', 'Risques d’explosion', 'Traitement ou stockage de matières explosives ou de liquides inflammables ayant un point d’éclair inférieur ou égal à 55°C', 'Raffineries, dépôts d’hydrocarbures, dépôts de carburants, dépôts de munitions, fabriques de certaines matières plastiques…'],
                ['BE4', 'Risques de contamination', 'Présence d’aliments, de produits pharmaceutiques non protégés, bris de lampe.', 'Industries alimentaires, grandes cuisines, industries et laboratoires pharmaceutiques...']
            ]
        },
        'CA': {
            title: 'CA – Matériaux de construction (2.10.16.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['CA1', 'Non combustibles', '-', 'Béton, maçonnerie…'],
                ['CA2', 'Combustibles', 'Bâtiments construits principalement en matériaux combustibles.', 'Bâtiments en bois…']
            ]
        },
        'CB': {
            title: 'CB – Structure des bâtiments (2.10.17.)',
            content: [
                ['Code', 'Désignation', 'Conditions', 'Exemples'],
                ['CB1', 'Risques négligeables', 'Constructions classiques et stables', '-'],
                ['CB2', 'Propagation d’incendie', 'Bâtiments dont la forme et les dimensions peuvent faciliter la propagation d’un incendie ', 'Bâtiments élevés…'],
                ['CB3', 'Mouvements', 'Risques dus à des mouvements de structure ', 'Bâtiments de grande longueur ou construits sur des terrains non stabilisés de telle sorte qu’il puisse en résulter des déplacements entre différentes parties du bâtiment ou entre le bâtiment et le sol…'],
                ['CB4', 'Flexibles ou instables', 'Constructions fragiles ou pouvant être soumises à des mouvements et à des oscillations', 'Tentes, faux plafonds, cloisons démontables, structures gonflables...']
            ]
        }

    };

    if (data[th]) {
        const modalData = data[th];
        const title = modalData.title;  // Titre pour l'en-tête
        const content = modalData.content;
    
        // Vérifiez que le contenu a au moins une ligne
        if (content.length > 0) {
            // Construire le contenu du tableau sans inclure le titre
            let modalContent = `<table class="table"><thead><tr>`;
            content[0].forEach(header => {
                modalContent += `<th>${header}</th>`;
            });
            modalContent += `</tr></thead><tbody>`;
            
            for (let i = 1; i < content.length; i++) {
                modalContent += `<tr>`;
                content[i].forEach(cell => {
                    modalContent += `<td>${cell}</td>`;
                });
                modalContent += `</tr>`;
            }
            modalContent += `</tbody></table>`;
    
            // Met à jour le contenu de la modale
            document.getElementById('modal-title').innerText = title;  // Titre dans l'en-tête
            document.getElementById('modal-body').innerHTML = modalContent;  // Contenu du tableau
    
            // Ouvre la modale
            $('#myModal').modal('show');
        } else {
            console.error("Le contenu est vide pour la clé :", th);
        }
    } else {
        console.error("Données non trouvées pour la clé :", th);
    }
    }

    let currentSignatureType = ''; // Variable pour stocker le type de signature (exploitant ou organisme)

// Fonction pour ouvrir la modal de signature
function openSignatureModal(type) {
    console.log("Ouverture de la modal pour le type :", type);
    currentSignatureType = type;
    $('#signatureModal').modal('show');
    const canvas = document.getElementById('signatureCanvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Fonction pour fermer la modal de signature
function closeSignatureModal() {
    $('#signatureModal').modal('hide'); // Cacher la modal avec Bootstrap
}

// Fonction pour sauvegarder la signature
function saveSignature() {
    const canvas = document.getElementById('signatureCanvas');
    const signatureData = canvas.toDataURL(); // Obtenir l'image de la signature en format data URL

    // Vous pouvez maintenant utiliser signatureData pour l'afficher ou l'envoyer à un serveur
    console.log(`Signature ${currentSignatureType} sauvegardée:`, signatureData); // Afficher les données de la signature dans la console
    closeSignatureModal(); // Fermer la modal après sauvegarde
}

// Code pour dessiner sur le canevas
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let drawing = false; // Variable pour suivre l'état de dessin

// Événement pour commencer à dessiner lorsque la souris est enfoncée
canvas.addEventListener('mousedown', (e) => {
    drawing = true; // Indiquer que le dessin a commencé
    ctx.moveTo(e.offsetX, e.offsetY); // Déplacer le curseur au point de départ
});

// Événement pour dessiner pendant que la souris se déplace
canvas.addEventListener('mousemove', (e) => {
    if (drawing) {
        ctx.lineTo(e.offsetX, e.offsetY); // Dessiner une ligne jusqu'à la position actuelle de la souris
        ctx.stroke(); // Appliquer le dessin
    }
});

// Événement pour arrêter de dessiner lorsque la souris est relâchée
canvas.addEventListener('mouseup', () => {
    drawing = false; // Indiquer que le dessin s'est terminé
    ctx.beginPath(); // Commencer un nouveau chemin pour le prochain dessin
});

// Événement pour arrêter de dessiner si la souris sort du canevas
canvas.addEventListener('mouseout', () => {
    drawing = false; // Indiquer que le dessin s'est terminé
    ctx.beginPath(); // Commencer un nouveau chemin
});

function saveAsPDF() {
    const element = document.getElementById('content-to-export');
    const options = {
        margin: 10,
        filename: 'influences_externes.pdf',
        image: { type: 'pdf', quality: 0.98 },
        html2canvas: { 
            scale: 2, // Augmentez l'échelle pour une meilleure qualité
            useCORS: true, // Permet de charger des ressources externes
            logging: true, // Active les logs pour le débogage
            allowTaint: true, // Permet de charger des images externes
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'landscape', // Orientation paysage pour plus d'espace
        },
        pagebreak: { 
            mode: 'avoid-all', // Évite les sauts de page inutiles
        },
    };

    // Ajouter les signatures si elles existent
    const signatureExploitant = document.getElementById('signature-exploitant');
    const signatureOrganisme = document.getElementById('signature-organisme');
    if (signatureExploitant && signatureOrganisme) {
        signatureExploitant.textContent = 'Signature Exploitant';
        signatureOrganisme.textContent = 'Signature Organisme';
    }

    // Générer le PDF avec les options ajustées
    html2pdf()
        .from(element)
        .set(options)
        .save();
}