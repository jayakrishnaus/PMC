<template>
  <div class="two-column-layout">
    <div class="column">
      <!-- Search input -->
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search"
        class="rounded-input"
        @focus="onInputFocus"
        @blur="onInputBlur"
      />
      <br />

      <!-- Scrollable container for filtered RentCards components -->
      <div class="scrollable-container mt-2">
        <!-- Use a v-for loop to iterate over filteredRentals and create RentCards components -->
        <div v-for="(rental, index) in filteredRentals" :key="index">
          <RentCards
            :locationName="rental.locationName"
            :distance="rental.distance"
            :rating="rental.rating"
            :address="rental.address"
            :price="rental.price"
            :status="rental.status"
          />
          <br />
        </div>
      </div>
    </div>
    <div class="column">
      <Map />
    </div>
  </div>
</template>

<script>
import Map from './Map.vue'
import RentCards from './RentCards.vue';

export default {
  components:{Map,RentCards},
  data() {
    return {
      searchQuery: '',
       rentalData : [
  {
    locationName: "Sample Location 1",
    distance: 3,
    rating: 4.5,
    address: "123 Main St, City 1",
    price: 25.99,
    status: "Open"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  {
    locationName: "Sample Location 2",
    distance: 4,
    rating: 4.0,
    address: "456 Elm St, City 2",
    price: 29.99,
    status: "Closed"
  },
  // Add more entries as needed
]
    };
  },
  computed: {
    filteredRentals() {
      // Filter rentals based on searchQuery
      const lowerCaseQuery = this.searchQuery.toLowerCase();
      return this.rentalData.filter((rental) =>
        rental.locationName.toLowerCase().includes(lowerCaseQuery)
      );
    },
  },
  methods: {
    onInputFocus() {
      // Handle input focus if needed
    },
    onInputBlur() {
      // Handle input blur if needed
    },
  },
};
</script>



<style scoped>
/* Your styles here */
.scrollable-container {
  max-height: 550px; /* Adjust the max-height as needed */
  min-height: 550px;
  overflow-y: scroll;
  border: 1px solid #ccc; /* Add a border for aesthetics */
  padding: 10px;
}
.two-column-layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.column {
  width: 48%;
  padding: 10px;
}
input.rounded-input {
  width: 100%; /* Adjust the width as needed */
  height: 40px; /* Adjust the height as needed */
  border-radius: 20px; /* Adjust the border-radius for rounded corners */
  border: 1px solid #ccc; /* Add a border for a clean look */
  padding: 10px; /* Add padding as needed */
  transition: border-color 0.3s, box-shadow 0.3s; /* Add smooth transitions */
}

input.rounded-input:focus {
  border-color: blue; /* Change border color on focus */
  box-shadow: 0px 2px 4px rgba(0, 0, 255, 0.3); /* Show blue shadow on focus */
}

@media (max-width: 767px) {
  .two-column-layout {
    flex-direction: column;
  }

  .column {
    width: 100%;
  }
}
</style>
