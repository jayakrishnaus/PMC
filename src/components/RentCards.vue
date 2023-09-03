<template>
    <div class="blue-border">
    <v-card class="location-card " outlined>
      <v-card-title>
        <div class="d-flex justify-space-between align-center">
          <div>
            {{ locationName }}
          </div>
          <div>
            {{ distance }} km
          </div>
        </div>
      </v-card-title>
      
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              <v-icon color="green">mdi-star</v-icon>
              <span class="rating">{{ rating }}/5</span>
            </div>
          </v-col>
        </v-row>
        
        <v-row>
          <v-col cols="12">
            <div class="text-center">
              {{ address }}
            </div>
          </v-col>
        </v-row>
      </v-card-text>
      
      <v-card-actions>
        <div class="price">
          Price: ${{ price }}
        </div>
        <div class="status">
          Status: {{ status }}
        </div>
      </v-card-actions>
    </v-card>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      locationName: String,
      distance: Number,
      rating: Number,
      address: String,
      price: Number,
      status: String,
    },
  };
  </script>
  
  <style scoped>
  .location-card {
    width: 300px;
  }
  
  .blue-border {
    border: 2px solid rgb(38, 38, 54);
  background-color: rgb(28, 28, 29);
  }
  
  .rating {
    color: green;
  }
  
  .price {
    flex: 1;
  }
  
  .status {
    flex: 1;
  }
  </style>
  