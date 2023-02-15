<template>
  <div class="page container mt-5">
    <h1 class="display-4">Artists</h1>
    <div class="row mt-3">
      <Breadcrumbs
      :page1="null"
      :page2="null"
      :page3="null"
      page4="itineraries"
      />
      <div data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
        The music of Italy ranges across a broad spectrum of opera and instrumental classical music, the traditional styles of the country's diverse regions, and a body of popular music drawn from both native and imported sources. Music has traditionally been one of the cultural markers of Italian national and ethnic identity and holds an important position in society and in politics.</p></div>
      
      <div class="btn-group justify-content-around py-3 px-3">
      <nuxt-link to="/genre/Pop">
        <div class="btn btn-custom card-button ">Pop Singers</div>
      </nuxt-link>
      <nuxt-link to="/genre/Rap" >
        <div class="btn btn-custom card-button ">Rap Singers</div>
      </nuxt-link>
      <nuxt-link to="/genre/Rock" >
        <div class="btn btn-custom card-button ">Rock Singers</div>
      </nuxt-link>
      <nuxt-link to="/genre/Jazz" >
        <div class="btn btn-custom card-button ">Jazz Singers</div>
      </nuxt-link>
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
  async asyncData({ $axios }) {
    // const { data } = await $axios.get('http://localhost:3000/api/cats')
    const { data } = await $axios.get('/api/services')
    console.log('the axios is requesting the data')
    console.log(data)
    return {
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
