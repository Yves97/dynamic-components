<template>
  <div>
    <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <a class="navbar-brand" href="#" @click.prevent="activeView='app-home'">Dynamic component</a>
      <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#" @click.prevent="activeView='app-home'">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView='app-about'">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="activeView='app-contact'">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="jumbotron">
        <keep-alive>
          <component :is="activeView"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeView: 'app-home'
    }
  }
}
</script>