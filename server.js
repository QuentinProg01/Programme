const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet'); // Pour la sécurité

const app = express();
const port = 3000;

app.use(helmet()); // Sécuriser l'application
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));

// Middleware pour définir les en-têtes Content-Type
app.use((req, res, next) => {
    if (req.url.endsWith('.css')) {
        res.setHeader('Content-Type', 'text/css; charset=utf-8');
    } else if (req.url.endsWith('.js')) {
        res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
    } else if (req.url.endsWith('.json')) {
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
    }
    next();
});

// Route pour récupérer les données
app.get('/api/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors de la lecture des données');
            return;
        }
        res.json(JSON.parse(data));
    });
});

// Route pour sauvegarder les signatures
app.post('/api/signatures', (req, res) => {
    const { type, signatureData } = req.body;
    if (!type || !signatureData) {
        return res.status(400).json({ success: false, message: 'Type et signatureData sont requis' });
    }
    // Ici vous pouvez implémenter la logique de sauvegarde des signatures
    res.json({ success: true, message: 'Signature sauvegardée' });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});