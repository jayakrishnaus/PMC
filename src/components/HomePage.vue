<template>
  <div class="two-column-layout">
    <!-- Left Column -->
    <div class="column">
      <ParkList />
    </div>

    <!-- Right Column -->
    <div class="column">
      <Map />
    </div>
  </div>
</template>

<style scoped>
.two-column-layout {
  display: flex;
  justify-content: space-between; /* Space between the two columns */
  align-items: center; /* Center vertically */
  padding: 20px; /* Add padding as needed */
}

.column {
  width: 48%; /* Adjust the width of the columns as needed */
  padding: 10px; /* Add padding as needed */
  
}

@media (max-width: 767px) {
  .two-column-layout {
    flex-direction: column; /* Stack columns on small screens */
  }

  .column {
    width: 100%; /* Full width on small screens */
  }
}
</style>

<script setup>
import Map from './Map.vue'
import ParkList from './ParkList.vue'
</script>
