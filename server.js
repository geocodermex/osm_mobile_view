const express = require('express');
const app = express();
const port = 3000;

// Página HTML con OpenStreetMap + Leaflet
const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>OSM Map</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
  <style>
    #map { height: 100vh; width: 100%; margin: 0; padding: 0; }
    html, body { margin: 0; padding: 0; }
  </style>
</head>
<body>
<div id="map"></div>

<script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
<script>
  // Centro del estado de Guanajuato
  var map = L.map('map').setView([21.0190, -101.2574], 8);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

</script>

</body>
</html>
`;

app.get('/', (req, res) => {
    res.send(html);
});

app.listen(port, () => {
    console.log(`OSM Map server running at http://localhost:${port}`);
});
