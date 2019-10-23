<template>
<div id="top">
  <b-navbar toggleable="lg" type="light" :print="true" class="top">
    <b-navbar-brand to="/" tag="h1" class="brand">
      <span class= "image">
        <img src="../../assets/IMG_0706.jpg"  class="top-image">
      </span>
      <vue-typer
        :text='["MASTER KEY READING"]'
        :repeat='Infinity'
        :shuffle='false'
        initial-action='typing'
        :pre-type-delay='70'
        :type-delay='70'
        :pre-erase-delay='1000'
        :erase-delay='100'
        erase-style='clear'
        :erase-on-complete='false'
        caret-animation='phase'
      ></vue-typer>
    </b-navbar-brand>
  </b-navbar>
</div>
</template>

<style scoped>

</style>
<style>
#top .brand{
  font-size: 20px;
}
#top .top {
  margin: 0 auto;
}
#top .top-image {
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 20px;
}
#top .top {
  background: linear-gradient(to bottom, black, 20%, #282c37);
  border-bottom: 1px solid #282c37;
}
.vue-typer .custom.char.typed {
  color: #d9e1e8;
}
.vue-typer .custom.char.selected {
  color: #d9e1e8;
  background-color: transparent;
  text-decoration: line-through;
}
.vue-typer .custom.caret {
  display: none;
}

</style>