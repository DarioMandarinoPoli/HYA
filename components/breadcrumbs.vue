<template>
<!DOCTYPE html>
<nav style="--bs-breadcrumb-divider: url(&#34;data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='currentColor'/%3E%3C/svg%3E&#34;);" aria-label="breadcrumb">
              
  <ul class="breadcrumb">
    <li v-if="page1 != null "><nuxt-link  to="/"  class="nav-link breadcrumb-item">{{ page1 }}</nuxt-link></li>
    <li v-if="page2 != null"><nuxt-link  :to="`/${page2}`" class="nav-link breadcrumb-item">{{ page2 }}</nuxt-link></li>
    <li v-if="page3 != null"><nuxt-link  :to="`/${page3}`" class="nav-link breadcrumb-item">{{ page3 }}</nuxt-link></li>
    <!-- <li  class="nav-link" v-if="page4 != null"><a @click="SamePageId" class="active" >{{page4 }}</a></li> -->
    <!-- <li  class="nav-link" v-if="page4 != null"><button class="active" @click="refresh()" >{{page4 }}</button></li> -->
    <!-- <li  class="nav-link  active" @click="refresh()">{{page4 }}</li> -->
    <li v-if="page4 != null" @click="refresh()"><a  class="nav-link active">{{ page4 }}</a></li>
    <!-- <li class="active">{{}}</li>         -->
    <!-- :active-class="isActive" -->
    <!-- <nuxt-link class="active" :to="`/${page4}`" >{{page4 }}</nuxt-link> -->
  </ul>
</nav>
<!-- <!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Breadcrumbs</h2>
  <p>The .breadcrumb class indicates the current page's location within a navigational hierarchy:</p>                  
  <ol class="breadcrumb">
    <li><a href="#">Home</a></li>
    <li><a href="#">Private</a></li>
    <li><a href="#">Pictures</a></li>
    <li class="active">Vacation</li>        
  </ol>
</div>

</body>
</html> -->
</template>

<style scoped>
.active{
  color: orange;
}
ul.breadcrumb {
  padding: 6px 10px;
  list-style: none;
  background-color: #eee;
}
.nav-link:hover{
  cursor: pointer;
  color: rgb(168, 115, 15);
}
</style>
<script>
export default {
  name: 'breadcrumbs',
  props: {
    page1: {
      type: String,
      required: true,
    },
    page2: {
      type: String,
      required: false,
    },
    page3: {
      type: String,
      required: false,
    },
    page4: {
      type: String,
      required: false,
    },
  },
  data(){
    return{
    }
  },
  // methods: {
  //   methods: {
  //     refresh() {
  //       this.$nuxt.refresh()
  //     }


  // SamePageId() {
  //   if (this.page2=='Itineraries'){
  //   console.log('case 1');
  //   console.log(this.page4);
  //   this.$router.push(`${this.page4}`)}
  //   else if (this.page2=='events'){
  //   this.$router.push(`/details/events/${this.page4}`)}
  //   else if (this.page2=='events'){
  //   this.$router.push(`/details/places/${this.page4}`)}
  // },
  methods: {
    refresh() {
      this.$nuxt.refresh()
    }
  }
}

</script>