// Initialisation de la carte
const map = L.map('map').setView([46.2044, 6.1432], 13);

// Fond de carte OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Charger les buvettes
fetch("data.json")
    .then(response => response.json())
    .then(buvettes => {
        buvettes.forEach(b => {
            const marker = L.marker([b.lat, b.lng]).addTo(map);

            const popupContent = `
                <h3>${b.name}</h3>
                <img src="${b.image}" width="200" style="border-radius:8px;">
                <p>${b.description}</p>
            `;

            marker.bindPopup(popupContent);
        });
    });
