<template>
<div class="f container-lg container-fluid-md my-3 shadow-sm border">
<div class="row my-1 px-1 d-flex justify-content-center">
  <div class="col-md-5 col-sm-3 col-12  my-auto mx-auto d-flex justify-content-center  ">
        <!-- <img
          class="img-fluid shadow rounded"
          src="https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sa6549607c78f5c11/image/i82f8384a1348ab84/version/1554202007/tomorrowland-best-summer-music-festivals-europe.jpg"
        /> -->
        <img
          class="img-fluid shadow rounded"
          :src="img"
        />
      </div>
      <div class="col-md-7 col-9 col-sm-9 my-sm-auto text-center text-sm-start ">
        
        <h1 class="featurette-heading fw-normal lh-1">{{name}}</h1>
        <p  class="text px-2  text-truncate mycontent-right"  style="max-width: 790px;" >
          {{des}}</p>
             <div class="row px-3 justify-content-center justify-content-md-end" ><button @click="goToDetails(id)" class="btn btn-custom card-button col-md-3 col-4" >
            Find More
        </button></div>
      </div>
    </div>
  </div>

  <!-- <div container-lg container-fluid-md my-3 shadow-sm border>
   <div class=" col-lg col-service shadow btn-home">
        <NuxtLink to="/all-artist"
          ><button type="button" class="btn btn-custom">
            Discover Artists
          </button></NuxtLink
        >
      </div>
    </div> -->
  
  
  
  
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
      <nuxt-link :to="`/details/events/${id}`">
        <div class="btn btn-primary btn-orange">See Details</div>
      </nuxt-link>
    </div>
  </div> -->
</template>

<style scoped>


.img-fluid {
  height: 100%;
  object-fit: cover;
}
.mycontent-right{
  border-left: 1px groove #b48f17;
}
@media (max-width: 575.98px) {
  .mycontent-right{
  border-top: 1px groove #b48f17;
  border-left: none;
}
}


.btn-custom {
  color: white;
  background-color: #636959;
  border-color: white;
  font-size: larger;
  border-width: 2px;
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #b48f17;
}

/* .card {
  border: 2px solid lightgray;
}
.card:hover {
  border: 2px solid orange;
}
.btn-orange {
  background-color: orange;
  border: 2px solid orange;
}
.card-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 160px;
} */
</style>

<script>
export default {
  name: 'CardComponent',
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
  methods: {
    goToDetails() {
      this.$router.push(`/details/events/${this.id}`)
    },
  },
}
</script>
