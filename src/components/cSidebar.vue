<template>
    <div id="sidebar-container" class="sidebar-expanded">
    <ul class="list-group text-center">
        <li class="list-group-item sidebar-separator-title text-muted d-flex align-items-center menu-collapsed">
            <small></small>
        </li>
        <li v-for="(x, idx) in menu" :key="idx"  href="" data-toggle="collapse" aria-expanded="false" class="bg-dark list-group-item list-group-item-action flex-column align-items-start">
            <router-link :to="'/' + x.link" :title="x.title">
                <span class="menu-collapsed"><icon :name="x.ico"></icon><span class="d-none d-sm-block">{{x.title}}</span></span>
            </router-link>
        </li>
    </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      menu: [
        { link: '', title: 'Dashboard', ico: 'home' },
        { link: 'client/10', title: 'New Client', ico: 'user' },
        { link: 'clients', title: 'Search Clients', ico: 'users' },
        { link: 'test', title: 'Test', ico: 'cogs' },
        { link: null, title: 'Link 4', ico: 'user' }
      ]
    }
  }
}
</script>

<style scoped>
/********** Sidebar **********/
#body-row {
    margin-left:0;
    margin-right:0;
}
#sidebar-container {
    min-height: 100vh;
    background-color: #333;
    padding: 0;
}

/* Sidebar sizes when expanded and expanded */
/* .sidebar-expanded {
     width: 230px; 
} */
.sidebar-collapsed {
    width: 60px;
}

/* Menu item */
#sidebar-container .list-group a {
    cursor: pointer;
    /* height: 50px; */
    color: white;
}

/* Submenu item */
#sidebar-container .list-group .sidebar-submenu a {
    height: 45px;
    padding-left: 30px;
}
.sidebar-submenu {
    font-size: 0.9rem;
}

/* Separators */
.sidebar-separator-title {
    background-color: #333;
    height: 35px;
}
.sidebar-separator {
    background-color: #333;
    height: 25px;
}
.logo-separator {
    background-color: #333;
    height: 60px;
}

/* Closed submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="false"] .submenu-icon::after {
  content: " \f0d7";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
/* Opened submenu icon */
#sidebar-container .list-group .list-group-item[aria-expanded="true"] .submenu-icon::after {
  content: " \f0da";
  font-family: FontAwesome;
  display: inline;
  text-align: right;
  padding-left: 10px;
}
/********** Sidebar **********/
</style>
