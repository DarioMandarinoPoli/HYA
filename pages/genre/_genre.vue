<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">Artists</h1> -->
    <h1 class="featurette-heading fw-normal lh-1">Artists - <span class="text-muted">{{genre }}</span></h1>
    <div class="row mt-3">
      <Breadcrumbs
      :page1="null"
      :page2="null"
      page3="Artists"
      :page4="genre"
      />
      <!-- <li v-if="page1 != null "><nuxt-link  to="/"  class="nav-link breadcrumb-item">{{ page1 }}</nuxt-link></li> -->
      <div v-if="genre == 'Pop' " data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
        Italian pop has become one of the most popular genres. Italy is uncharacteristically united when it comes to Pop, perhaps because it is music that is mostly devoid of roots implications from any one region</p></div>
        <div v-if="genre == 'Rap' " data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
          One of the first hip hop crews to catch the attention of the Italian mainstream was Bologna's Isola Posse All Star, then and still today produced by Sandro Orru, who had written the soundtrack to the animated TV series Signor Rossi in the 1970s. The European Music Office's report on Music in Europe claimed that, in general, hip hop from the south of Italy tends to be harder than that from the north. </p></div>
        <div v-if="genre == 'Rock' " data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
          Italian rock is a form of rock music produced primarily in Italy. The music genre has roots in the country as it spread in the early 1960s from the United States with the earliest versions of rock and roll during this period being cover versions or interpretative covers of already existing song</p></div>
        <div v-if="genre == 'Jazz' " data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
          Even though Jazz was born in New Orleans, the genre has been influenced by artists from all over the world, including Italy. Jazz in Italy has grown tremendously in the past twenty years, especially in the United States, with the support of more frequent performances by Italian jazz musicians </p></div>

      <div class="btn-group justify-content-around py-3 px-3">
      <!-- <nuxt-link to="/serivecs/Pop">
        <div class="btn btn-custom card-button ">Pop Singers</div>
      </nuxt-link>
      <nuxt-link to="/serivecs/Pop" >
        <div class="btn btn-custom card-button ">Pop Singers</div>
      </nuxt-link>
      <nuxt-link to="/serivecs/Jazz" >
        <div class="btn btn-custom card-button ">Jazz Singers</div>
      </nuxt-link>
      <nuxt-link to="/serivecs/Rock" >
        <div class="btn btn-custom card-button ">Rock Singers</div>
      </nuxt-link> -->
      
      
        </div>
      
      <div
      class="container-lg flex-wrap d-flex justify-content-around"
      id="cardIt"
    >
    <CardItinerary
        v-for="(itineraray, itinerarayIndex) of itinerarayList"
        class=" m-2"
        :key="`event-index-${itinerarayIndex}`"
        :id="itineraray.id"
        :name="itineraray.name"
        :des="itineraray.des"
        :img="itineraray.img"
      />
    </div>
      
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

</style>

<script>
import CardItinerary from '~/components/CardItinerary.vue'
import breadcrumbs  from '~/components/breadcrumbs.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'PointOfInterestPage',
  components: {
    CardItinerary,
    breadcrumbs
  },
  data() {
    return {
      title: this.name
      // catList: []
    }
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ route, $axios }) {
    const { genre } = route.params
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services/genre/'+ genre)
    console.log('the axios is requesting the data')
    console.log(genre)
    console.log(data)
    return {
      genre,
      itinerarayList: data,
    }
  },
  head(){
    return {
      title: 'Artists'
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
