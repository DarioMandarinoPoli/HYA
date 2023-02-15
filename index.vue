<template>
<div class="container-lg container-fluid-md my-3 ">
    <!-- <div class="mx-auto   width: 200px"></div> -->
    <h1 class="py-3 px-5  text-center ">Welcome to one-week music festival of
live concerts</h1>
    <div class=" pb-8  pagefit "  >
      <div id="carouselExampleCaptions" class="carousel slide pagefit " data-bs-ride="carousel" style="">
  <div class="carousel-indicators " >
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner pagefit" style="">
    <div class="carousel-item active pagefit" style="">
      <img src="https://wallpaperaccess.com/full/1898692.jpg" class="d-block pagefit f shadow " style=" width: 100%; object-fit: cover;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>DO YOU LOVE MUSIC</h5>
        <p>We love music festivals as much as you do. Music Festival Wizard is dedicated to keeping you informed with the next one!</p>
      </div>
    </div>
    <div class="carousel-item pagefit" style="">
      <img src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmNlcnR8ZW58MHx8MHx8&w=1000&q=80" class="d-block pagefit f shadow " style=" width: 100%; object-fit: cover;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>ARE YOU DOWN ?</h5>
        <p>Kicking off the MILAN festival season for over a decade, MILAN Sound City embraces the spirit of the elite. With 250+ artists playing across the historic Milan</p>
      </div>
    </div>
    <div class="carousel-item pagefit" style="">
      <img src="https://www.teahub.io/photos/full/66-667321_bts-concert-wallpaper-hd.jpg" class="d-block pagefit f shadow " style="  width: 100%; object-fit: cover;" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h5>STAY TUNED!!</h5>
        <p>one of the largest music festivals in the country. For over five years, the consistently sold out show brings 15,000 attendees</p>
        <div class="d-flex justify-content-center ">
          <a href="#div_id"><button type="button" class="btn btn-outline-warning btn-lg">Find More</button></a>
       </div>
        </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
    
    <div class="row mb-5">
       <h2 class="py-3 px-5 text">Ready to Takepart?</h2>
    <div class="row row-card">
      <div class="col-sm poi shadow btn-home">
        <NuxtLink to="/eventlist"
          ><button type="button" class="btn btn-outline-warning btn-lg">
            Discover Events
          </button></NuxtLink
        >
      </div>
      <div class="col-sm event shadow btn-home">
        <NuxtLink to="/places"
          ><button type="button" class="btn btn-outline-warning btn-lg">
            Discover Places
          </button></NuxtLink
        >
      </div>
      <div class="col-sm service shadow btn-home">
        <NuxtLink to="/artists"
          ><button type="button" class="btn btn-outline-warning btn-lg">
            Discover Artists
          </button></NuxtLink
        >
      </div>
 
    </div>
    </div>

    <div id="div_id" class="row mt-5 mb-3 d-flex justify-content-around ">
      <div class="col-sm-5 ">
        <img
          class="img-fluid shadow"
          src="https://wallpaperaccess.com/full/6514481.jpg"
        />
      </div>
      <div class="col-sm-5 text-sm-start mycontent-right">
        <h2 class="pt-3 featurette-heading fw-normal lh-1">Milano Grande music festival 2023...<span class="text-muted">july14th-july18th</span></h2>
        <p class="text">
          Milano Grande Summer music festival 2023 will take place in Milan, Italy(july14th-july18th), in which concerts will be held for 5 days in 5 different places within the city of Milan, and ten concerts will be held in these five places.  The concerts will be varied, as the number of participating singers and bands is fifteen, every day there are two concerts,</p>
      </div>
    </div>
    

    <div class="row mt-4 mb-5 d-flex justify-content-around">
      <div class="col-sm-5 d-flex flex-column mycontent-left">
        <h2 class="pt-3 featurette-heading fw-normal lh-1">YOU WON'T MIISS IT <span class="text-muted">FOR THE WORLD</span></h2>
        <p class="text">
          mostly the two concerts are held in the same place from the afternoon until midnight. Most of the singers were chosen of Italian nationality, which adds a special character to the festival due to its organization in Italy.  Singers and bands were selected and divided into categories according to the type of their music, and the categorization of concerts was also made according to these musical categories.
        </p>
      </div>
      <div class="col-sm-5">
        <img
          class="img-fluid shadow"
          src="https://www.esplanade.com/-/media/Esplanade/Images/Whats-On/festival-and-series/2022/dans-festival/full-out-06.ashx?rev=22add93d6cf0464f8f067b2587870bd9&hash=A7F3BFA98E4D86133366DA1CD59AF263"
        />
      </div>
    </div>
    
  </div>
  
</template>

<style scoped>
@media screen and (min-width: 720px) {
  .pagefit{
    height: 510px ;
  }

  .f{
    background-color: #ffffff;
  }
}
.mycontent-left{
  border-right: 1px groove #b48f17;
}
.mycontent-right{
  border-left: 1px groove #b48f17;
}
@media screen and (max-width: 720px) {
  .mycontent-left{
  border-right: none;
  
}
.mycontent-right{
  border-left: none;
  border-bottom: 1px groove #b48f17;
}
  }

  .col-sm {
  margin: 5px;
}

.row-card {
  height: 400px;
}

.btn-home {
  display: flex;
  align-items: end;
  justify-content: center;
  margin: 5px;
}

.btn {
  margin: 20px;
  font-weight: bold;
}

.poi {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://assets.simpleviewinc.com/simpleview/image/upload/crm/miamifl/DelouConcert_2799D858-5056-A36A-0B9BF733B08DB40B_279c81ab-5056-a36a-0b69869b0235c30e.png);
}

.event {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://www.rainews.it/dl/img/2022/05/22/1653207317213_rainewseceacadeebed.jpg);
}

.service {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(https://townsquare.media/site/942/files/2023/01/attachment-Concerts-Philly-2023.jpg);
}

.img-fluid {
  height: 100%;
  object-fit: cover;
}

</style>
<script>

export default {
  name: 'IndexPage',
layout: 'empty',
 data(){
    return {
     }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/homepage')
    const title = data.title
    const images = data.imgs
    const description = data.description
    const dec1 = data.desc1
    const dec2 = data.desc2
    console.log(images)
    return {
      title,
      description,
      images,
      dec1,
      dec2
    }
  },
}
</script>
