// --- MENU ---
document.getElementById("menuBtn").addEventListener("click", () => {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.left = sidebar.style.left === "0px" ? "-250px" : "0px";
});

// --- CARTE ---
const map = L.map('map').setView([46.5, 2.5], 6); // Centré sur la France

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// --- BUVEttes ---
fetch("data.json")
    .then(response => response.json())
    .then(buvettes => {
        buvettes.forEach(b => {
            const marker = L.marker([b.lat, b.lng]).addTo(map);

            const popup = `
                <h3>${b.name}</h3>
                <img src="${b.image}" width="200" style="border-radius:8px;">
                <p>${b.description}</p>
            `;

            marker.bindPopup(popup);
        });
    });
