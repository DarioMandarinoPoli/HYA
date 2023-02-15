<template>
  <div class="card d-inline-block my-4 shadow mx-auto " style="border-top-left-radius: 1rem; border-top-right-radius: 1rem;  border-bottom-left-radius: .50rem; border-bottom-right-radius: .50rem;">
    <div class="card-body "  style="background-color:#636959; border-top-right-radius: .75rem; border-top-left-radius: .75rem;">
        <h3 class="card-title d-flex justify-content-center ">{{name}}</h3>
        <p class="px-2  text-truncate"  style="max-width: 690px;">{{des}}</p>
        <div class="d-flex justify-content-center ">
          <button @click="goToDetails(id)" type="button" class="btn btn-custom">
            Find More
          </button>
       </div>
    </div>
    <div class="image-container d-flex justify-content-center ">
      <img
      class="img-fluid rounded-bottom"
      :src="img"
      alt="..."
      />
    </div>
      
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
      <nuxt-link :to="`/details/places/${id}`">
        <div class="btn btn-primary btn-orange">See Details</div>
      </nuxt-link>
    </div>
  </div> -->
</template>

<style scoped>

.btn {
  margin: 20px;
}
.btn-custom {
  color: white;
  background-color: #e3c2c25c;
  border-color: white;
  font-size: larger;
  border-width: 2px;
  font-weight: 600;
}

.btn-custom:hover {
  background-color: #b48f17;
}
.card {
  transition: 0.3s ease;
  opacity:1;
  width: 600px;
}

.card:hover {
  border: 4px solid #b48f17;
}

.image-container {
  height: 300px;
  padding: 0px 0px;
}

.image-container > img {
  object-fit: cover;
  width:100%;
  height: 100%;
}

*, ::after, ::before {
  box-sizing: border-box;
}


.btn-custom:hover {
  background-color: #b48f17;
}

</style>

<script>
export default {
  name: 'CardPOIComponent',
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
      this.$router.push(`/details/places/${this.id}`)
    },
  },
}
</script>
