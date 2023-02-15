<template>
<div class=" col-lg-5 col-md-5 col-sm-8  shadow hover rounded  ">
        <div class="bg-image center ">
          <!-- <img
              class="img-header img-fluid rounded hover-zoom"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Ed_Sheeran-6826_%28cropped%29.jpg/1200px-Ed_Sheeran-6826_%28cropped%29.jpg"
          /> -->
          
          <img 
              class="img-header img-fluid rounded hover-zoom"
              :src="img"
          />
          <!-- <svg class="bd-placeholder-img rounded-circle " width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg> -->
          </div>

        <h2 class="fw-normal center pt-2">{{name}}</h2>
        <p class="px-2  text-truncate"  style="max-width: 490px;">{{des}}</p>
        <div class="center pb-2"><nuxt-link :to="`/details/services/${id}`">
          <button type="button" class="btn btn-custom btn-rounded">View details »</button>
      </nuxt-link>
  
</div>
        <!-- <p class=""> <a class="btn btn-secondary " href="#">View details »</a></p> -->
      </div>

      
  <!-- <div class="card" style="width: 18rem">
    <div
      class="card-img-top card-image"
      :style="{ 'background-image': 'url(' + img + ')' }"
    ></div>
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{ breed }}
      </p>
      <nuxt-link :to="`/details/itineraries/${id}`">
        <div class="btn btn-primary btn-orange">See Details</div>
      </nuxt-link>
    </div>
  </div> -->
</template>

<style scoped>
.btn {
  margin: 5px;
}
.btn-custom {
  color: white;
  background-color: #e3c2c25c;
  border-color: white;
  font-size: large;
  border-width: 2px;
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #b48f17;
}
.hover:hover{
  background: linear-gradient(
                  45deg,
                  hsla(168, 85%, 52%, 0.5),
                  hsla(263, 88%, 45%, 0.5) 100%
                );
  opacity: 0.90;
}

.center {
  display: flex;
  justify-content: center;
  align-items: center;
  
}

</style>

<script>
export default {
  name: 'CardItineraryComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    des: {
      type: String,
      required: true,
    },
  },
  // methods: {
  //   goToDetails() {
  //     this.$router.push(`/details/places/${this.id}`)
  //   },
  // },
}
</script>
