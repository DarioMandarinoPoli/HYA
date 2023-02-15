<template>
  <div class="container my-5 ">
    <breadcrumbs
        :page1="null"
        page2="EventList"
        :page3="null"
        :page4="name"
      />
    <!-- <div
      class="
        row
        p-4
        pb-0
        pe-lg-0
        pt-lg-5
        pb-lg-5
        pe-lg-5
        align-items-center
        rounded-3
        border
        shadow-lg
      "
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3"> -->
        <h1 class="display-4 fw-bold lh-1">{{ name }}</h1>
        <div class="image-div col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg" >
          <img class="rounded-lg-3 img-fluid" id="myImg" :src="img" :alt="name" width=""  />
          <div id="myModal" class="modal">
            <span class="close">&times;</span>
            <img class="modal-content" id="img01">
            <div id="caption"></div>
          </div>
        </div>
        <b>Description:</b>
        <p class="lead">
          {{ breed }}
        </p>
        <b>The Date:</b>
        <p class="lead">
          {{ description }}
        </p>
        <b>The Type of the event:</b>
        <p class="lead">
          {{ season }}
        </p>
        <!-- <b>Practical Information:</b>
        <p class="lead">{{ location.name }} - {{ location.des }}</p>
         -->
        <b>The participant/s in the concert</b>
        <p class="lead">
          {{ Particip }}
        </p>
        <!-- <p  v-for="(artItem, artItemIndex) of artists"
          :key="`artItem${artItemIndex}`"
          class="">
          <nuxt-link :to="`/details/services/${artItem.id}`">
        <p>{{ArtistName}}</p>
      </nuxt-link>
        </p> -->

        <!-- <b>More Information:</b><br>
        <p class="lead">
        <a :href="MoreInfo"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill icon" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg></a></p> -->
        
          <!-- <b>See On Google Map: </b>
        <p class="lead">
        <a :href="gooUrl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill icon" viewBox="0 0 16 16">
        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg></a>  </p> -->
          <!-- {{ location.name }} - {{location.des}} -->
       
          <button
            type="button"
            class="btn btn-outline-warning btn-lg px-4"
            @click="backToList"
          >
            Back to list
          </button>
      </div>
     
  
</template>

<style scoped>
.image-div{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: auto;
}

.icon{
  color: rgb(241, 190, 94);
}
.icon:hover{
  color: orange;
}
.rounded-lg-3:hover {
  transform: scale(1.1);
  cursor: pointer;
}

#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {opacity: 0.7;}

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content, #caption {  
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}

@-webkit-keyframes zoom {
  from {-webkit-transform:scale(0)} 
  to {-webkit-transform:scale(1)}
}

@keyframes zoom {
  from {transform:scale(0)} 
  to {transform:scale(1)}
}

/* The Close Button */
.close {
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
}

.close:hover,
.close:focus {
  color: #bbb;
  text-decoration: none;
  cursor: pointer;
}

/* 100% Image Width on Smaller Screens */
@media only screen and (max-width: 700px){
  .modal-content {
    width: 100%;
  }
}
</style>

<script>
import CommonMixin from '~/mixins/common'
import extendPicMixin from '~/mixins/extendPic'
export default {
  name: 'DetailsPage',
  components: {  },
  mixins: [CommonMixin, extendPicMixin],
  async asyncData({ route, $axios }) {
    const { id } = route.params
    const { data } = await $axios.get('/api/events/' + id)
    console.log(data.Participants)
    return {
      id: data.id,
      name: data.title,
      breed: data.des,
      img: data.img,
      Particip: data.Participants,
      description: data.practInfo,
      // location: data.location,
      season:data.season,
      practInfo:data.practInfo,
      // MoreInfo: data.moreInfo,
      // gooUrl: data.gooUrl,
      
      
      //for the associated artists
      ArtistId: data.service.id,
      ArtistName: data.service.name,
      // Artist:data.serviceId,
      // ArtistId:data.Services.id,
    }
  },
  head() {
    return {
      title: this.name,
    }
  },
  mounted(){
    this.fullsize()
  },
  methods: {
    backToList() {
      this.$router.push('/eventlist')
    },
  },
  
}
</script>
