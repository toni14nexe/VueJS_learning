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
        <button @click="component='async-slow-loading-main'" class="btn-red">Async Slow Loading</button>
        <button @click="component='plugin-slots-mixins'" class="btn-red">Plugin with slots and mixins</button>

        <br><br>
        <h3 class="text-red text-inline">Red ones </h3>
        <h3 class="text-inline">doesn't work in Vue2 becouse it's Vue3 (some of them aren't finished)</h3>
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
  import PluginSlotsMixins from './components/PluginWithSlotsAndMixins/App.vue';

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
      'async-slow-loading-main': AsyncSlowLoadingMain,
      'plugin-slots-mixins': PluginSlotsMixins
    },
    data(){
      return{
          component: 'plugin-slots-mixins'
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

.btn-red {
  background-color: red;
  color: white;
}

.text-red {
  color: red;
}

.text-inline {
  display: inline;
}
</style>

<!--npm run serve-->
