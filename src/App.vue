<template>
  <main class="px-5" >
    <router-view></router-view>
  </main>
  <MenuComponent />
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent, 
  }
};
</script>

<style>
/* Stili globali o specifici di questo componente */
.app-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
