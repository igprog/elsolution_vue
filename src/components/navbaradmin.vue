<template>
  <nav class="navbar navbar-expand-md bg-dark navbar-dark">
    <a class="navbar-brand" href="#">{{appname}}</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav ml-auto">
        <li v-for="(x, idx) in menu" :key="idx" class="nav-item">
          <router-link :to="'/' + x.link" :title="x.title">
            <span class="fa fa-user fa-fw mr-3"></span>
            <span class="menu-collapsed text-secondary">
              <icon :name="x.ico"></icon>
              <span>{{x.title}}</span>
            </span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mixin } from "../mixins/mixin.js";
export default {
    mixins: [mixin],
  data() {
    return {
      menu: [
        { link: "settings", title: "Setings", ico: "cogs" },
        { link: "user/10", title: "User", ico: "user" },
        { link: "login", title: "Logout", ico: "sign-in-alt" }
      ]
    };
  }
};
</script>
