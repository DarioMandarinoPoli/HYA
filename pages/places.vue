<template>
  <div>
    <div class="container-lg container-fluid-sm my-2 pt-3 pb-4 ">
      <Breadcrumbs
      :page1="null"
      :page2="null"
      :page3="null"
      page4="Places"
      />
  <div class="py-3 px-5 text mycontent-left" style="background-color:antiquewhite;">
    <p class="text">
      Where is the best place to sit for a concert? <br>
Front and Center Is Better for Sight Than Sound Snagging a seat just feet from the stage will give you a great view, but the sound won't be ideal. Typically, speakers are located on the side of the stage and are pointed toward the center of the venue.  </p>
  </div>
  
      <!-- <button class="btn" @click="$router.go(-1)">back</button> -->
      <!-- <span class="badge" @click="$router.go(-1)">100</span> -->
      <!-- <span class="fa fa-circle fa-lg" style="color:#ff0000;" @click="$router.go(-1)"></span> -->
      <!-- <a href="#" class="btn btn-default btn-circle"><i class="fa fa-user" @click="$router.go(-1)">go back</i></a> -->

      <div
      class="container-lg flex-wrap d-flex justify-content-center"
      id="cardIt"
    >
      <CardPOI
        v-for="(location, locationIndex) of locationlist"
        :key="`event-index-${locationIndex}`"
        :id="location.id"
        :name="location.name"
        :img="location.img"
        :des="location.des"
      />
    </div>
    <button
            type="button"
            class="btn btn-danger btn-floating btn-lg"
            id="btn-back-to-top"
            >
            top
      <!-- <i class="fas fa-arrow-up"></i> -->
    </button>
  </div>
    </div>
</template>

<style scoped>
#btn-back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: none;
}

.mycontent-left{
  border-left: 2px groove #b48f17;
  border-block-color: #b48f17;
}


</style>

<script>
import breadcrumbs  from '~/components/breadcrumbs.vue'
import CardPOI from '~/components/CardPOI.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'PointOfInterestPage',
  components: {
    breadcrumbs,
    CardPOI
},
  data() {
    return {
      title: 'All Points Of Interest'
      // catList: []
    }
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/places')
    console.log(data)
    return {
      locationlist: data,
    }
  },
  head(){
    return {
      title: this.title
    }
  },
  mounted() {
    this.backToTop();
  }

  // Note: This would happen on frontend (client) side
  // async mounted() {
  //   const { data } = await this.$axios.get('/api/cats')
  //   this.catList = data
  // },
}
</script>
