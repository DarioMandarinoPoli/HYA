<template>
  <div class="page container mt-5">
    <!-- <h1 class="display-4">List page</h1> -->
    <div class="row mt-3">
      <breadcrumbs
        :page1="null"
        :page2="null"
        :page3="null"
        page4="Concerts"
      />
      <div data-v-58b6d4c6="" class=" py-3 px-5 text mycontent-left" style="background-color: antiquewhite;"><p data-v-58b6d4c6="" class="text">
        Italy boasts a rich history made up of music, art, and entertainment.Italy boasts a rich history made up of music, art, and entertainment.Italy boasts a rich history made up of music, art, and entertainment. </p></div>
        
      <!-- <div class="btn-group justify-content-around pt-2 px-3">
      <nuxt-link to="/seasonalevents/summer">
        <div class="btn btn-primary btn-orange">Summer Events</div>
      </nuxt-link>
      <nuxt-link to="/seasonalevents/winter" >
        <div class="btn btn-primary btn-orange">Winter Events</div>
      </nuxt-link>
      
        </div> -->

      <card
        v-for="(event, eventIndex) of eventlist"
        :key="`event-index-${eventIndex}`"
        :id="event.id"
        :name="event.name"
        :img="event.img"
        :des="event.des"
      />
     
    </div>
    <!-- Back to top button -->
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
.btn-orange {
  background-color: rgb(167, 116, 20);
  border: 2px solid rgb(30, 23, 9);
}
.mycontent-left{
  border-left: 2px groove #b48f17;
  border-block-color: #b48f17;
}
</style>

<script>
import Card from '~/components/Card.vue'
import breadcrumbs from '~/components/breadcrumbs.vue'
import CommonMixin from '~/mixins/common'
export default {
  name: 'EventPage',
  components: {
    Card,
    breadcrumbs,
  },
  data() {
    return {
      title: "eventlist"
      // catList: []
    }
  },
  mixins: [CommonMixin],
  // Note: This happens on backend (server) side
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/events')
    console.log(data)
    return {
      eventlist: data,
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
