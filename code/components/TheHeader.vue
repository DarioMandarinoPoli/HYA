<template>
  <nav 
  class="navbar navbar-expand-lg  navbar-dark px-4 header"
  >
  <!-- style="background-color:#bb6707 " -->
    <div class="container-fluid ">
    <a class="navbar-brand" href="/">Musical Festival 23</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarToggler"
      aria-controls="navbarToggler"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarToggler">
      <ul class="navbar-nav ms-auto mt-2 mt-lg-0 pe-3">
        <li
          v-for="(navItem, navItemIndex) of headerList"
          :key="`navItem${navItemIndex}`"
          class="nav-item"
        >
          <nuxt-link :to="navItem.path" class="nav-link">
            {{ navItem.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
</template>

<style scoped>
.header {
  background: #636959 ;
}
.logo {
  color: #b48f17;
  font-size: 32px;
}

/* new modification of CSS part */
.breadcrumb {
  margin-left: 80dp;
}

ol {
  list-style: none;
}
li {
  display: inline;
}
li:last-child:after {
  content: "";
}
li a {
  color: black;
}
li a.nuxt-link-exact-active.nuxt-link-active {
  color: grey;
}

.navbar .navbar-nav .nav-link {
  color: #b48f17;
  font-size: 0.7cm;
}
.navbar .navbar-nav .nav-link:hover {
  color: #fff;
}
@media only screen and (max-width: 992px) {
  .navbar .navbar-nav .nav-item .nav-link {
    padding-top: 1px;
  }
  .navbar .navbar-nav .nav-item:first-child .nav-link {
    padding-top: 16px;
    border-top: 2px solid #fff;
  }
}

.navbar-brand {
  font-family:'Times New Roman', Times, serif;
  color: #b48f17;
  font-size:1.2cm;
}

.nav-item {
  font-family: 'Times New Roman', Times, serif;
  font-size: 0.6cm;
  color: rgb(200, 222, 77);
}
</style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      headerList: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Concerts',
          path: '/eventlist',
        },
        
         {
          name: 'Places',
          path: '/places',
        },
         {
          name: 'Artists',
          path: '/Artists',
        },
         {
          name: 'Contact Us',
          path: '/contactus',
        },
        {
          name: 'About',
          path: '/about',
        },
       
      ],
    }
  },
}
</script>
