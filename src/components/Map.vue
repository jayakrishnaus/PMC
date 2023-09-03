<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-providers/leaflet-providers';

export default {
  mounted() {
    // Create a map instance and set its center and zoom level
    const map = L.map('map').setView([51.505, -0.09], 13);

    // Add the dark tile layer
    L.tileLayer.provider('CartoDB.DarkMatter', {
      maxZoom: 19,
    }).addTo(map);

    // Add a marker
    L.marker([51.505, -0.09])
      .addTo(map)
      .bindPopup('Hello, Vue.js and Leaflet in Dark Mode!')
      .openPopup();
  },
};
</script>

<style scoped>
#map {
  height: 600px;
  width: 800px;
}
</style>
