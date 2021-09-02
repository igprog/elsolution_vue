<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-white fixed-top shadow-sm"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="../"
        ><img src="../assets/logo.png" class="logo" alt="El-Solution" />
        <span class="font-weight-bold color-main">{{ constants.appName }}</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li v-for="(x, idx) in menu_" :key="idx" class="nav-item">
            <router-link :to="'/' + x.link" :title="x.title">
              <span class="nav-link font-weight-bold">
                <icon :name="x.ico"></icon>
                <span class="color-main">{{ x.title }}</span>
              </span>
            </router-link>
          </li>
        </ul>
        <!-- <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { link: "", title: "Naslovna", ico: null, isVisible: true },
        { link: "o-nama", title: "O nama", ico: null, isVisible: true },
        { link: "usluge", title: "Usluge", ico: null, isVisible: true },
        { link: "recenzije", title: "Recenzije", ico: null, isVisible: true },
        { link: "kontakt", title: "Kontakt", ico: null, isVisible: true },
        { link: "test", title: "Test", ico: null, isVisible: false },
      ],
      constants: this.$constants,
    };
  },
  computed: {
    menu_: function () {
      return this.menu.filter((a) => a.isVisible);
    },
  },
};
</script>
