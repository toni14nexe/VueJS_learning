<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">
        <br><br><hr><br><br>

        <button @click="component='hello-world'">Hello world</button>
        <button @click="component='button-counter'">Counter</button>
        <button @click="component='login'">Log-In</button>
        <button @click="component='contact-us'">Contact</button>
        <button @click="component='props'">Props</button>
        <button @click="component='event-parent-component'">Event</button>
        <button @click="component='slots-main'">Slots</button>
        <button @click="component='async-main'">Async</button>
        <button @click="component='async-slow-loading-main'">Async Slow Loading</button>

        <br><br><br><hr>

        <keep-alive><component v-bind:is="component"/></keep-alive>
    </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue';
  import ButtonCounter from './components/ButtonCounter.vue';
  import LogIn from './components/LogIn.vue';
  import ContactUs from './components/ContactUs.vue';
  import ProfilePage from './components/Props/ProfilePage.vue';
  import EventParentComponent from './components/Events/EventParentComponent.vue';
  import SlotsMain from './components/Slots/SlotsMain.vue';
  import AsyncMain from './components/AsyncComponents/AsyncMain.vue';
  import AsyncSlowLoadingMain from './components/AsyncComponentsSlowLoading/AsyncSlowLoadingMain.vue';

  export default {
    name: 'App',
    components: {
      'hello-world': HelloWorld,
      'button-counter': ButtonCounter,
      'login': LogIn,
      'contact-us': ContactUs,
      'props': ProfilePage,
      'event-parent-component': EventParentComponent,
      'slots-main': SlotsMain,
      'async-main': AsyncMain,
      'async-slow-loading-main': AsyncSlowLoadingMain
    },
    data(){
      return{
          component: 'async-slow-loading-main'
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

button {
  margin-right: 10px;
}
</style>

<!--npm run serve-->
