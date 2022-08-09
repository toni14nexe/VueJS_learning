// dovršiti u vue3 vježbi, ne radi u vue2
// https://www.youtube.com/watch?v=ar1fJECxbyU 2:50

import HeaderComponent from './HeaderComponent.vue'

export default{
    install: (app, options) => {
        //kod plugina ide ovdje, app je rezultat createApp() proslijeđene opcije
        app.component('header-component', HeaderComponent)
    }
}