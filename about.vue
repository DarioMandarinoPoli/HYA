<template>

<div>

    <h1 class="py-3 px-5  text-center ">SEE YOU IN 2023!</h1>
      <div class="profile-pic-div">
        <img src="https://www.jonesaroundtheworld.com/wp-content/uploads/2019/03/I-days-Festival-Italy-2019-.jpg" alt="image">
        <!--<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"></rect><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
        </div>

        <div id="div_id" class="row mt-5 mb-3 d-flex justify-content-around ">
          <div class="col-sm-5 ">
            <img
              class="img-fluid shadow"
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=1280x10000:format=jpg/path/sa6549607c78f5c11/image/i82f8384a1348ab84/version/1554202007/tomorrowland-best-summer-music-festivals-europe.jpg"
            />
          </div>
          <div class="col-sm-5 text-sm-start mycontent-right">
            <h2 class="pt-3 featurette-heading fw-normal lh-1">WHERE</h2>
            <p class="text">
              The music festival is an international event held in a different country each year, in which leading local and foreign artists participate.
          This year's edition will be held in Italy; there will be several events scattered between Rome, Milan and Verona.
          Our cities will be ready to welcome you in the best possible way.</p>
          </div>
        </div>

        <div class="row mt-4 mb-5 d-flex justify-content-around">
          <div class="col-sm-5 d-flex flex-column mycontent-left">
            <h2 class="pt-3 featurette-heading fw-normal lh-1">MUSIC</h2>
            <p class="text">
              It is always the common thread, with all the facets and a thousand facets that only a 
              music festival can awaken. When hands and feet cannot stop, the head just wants to sway to the rhythm, 
              the chords warm the souls and the voices of thousands of people become one.
            </p>
          </div>
          <div class="col-sm-5">
            <img
              class="img-fluid shadow"
              src="https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i993a12f8bf71159f/version/1656083261/earth-garden-festival-malta-best-summer-music-festivals.jpg"
            />
          </div>
        </div>

        <div id="div_id" class="row mt-5 mb-3 d-flex justify-content-around ">
          <div class="col-sm-5 ">
            <img
              class="img-fluid shadow"
              src="https://www.rl360.com/top10/images/music-festivals/cover-photo.jpg"
            />
          </div>
          <div class="col-sm-5 text-sm-start mycontent-right">
            <h2 class="pt-3 featurette-heading fw-normal lh-1">ANY DOUBT?</h2>
            <p class="text">
              If you need further explanations please do not hesitate to contact us</p>
              <NuxtLink to="/contactus"
          ><button type="button" class="btn btn-outline-warning btn-lg">
            Contact us
          </button></NuxtLink>
          </div>
        </div>

</div>
</template>

<script>


export default {
  name: 'AboutPage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    
  },
  data() {
    return {
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get('/api/page-info/about')
    return {
      data,
    }
  },
}
</script>

<style scoped>

.profile-pic-div{
  position: relative;
  width: 100%;
  height: 60%;
}
.profile-pic-div img{
  width: 100%;
}
.center {
  margin: auto;
  width: 60%;
  border: 3px solid #c7a022;
  padding: 10px;
}

</style>
