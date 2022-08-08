<template>

  <div class="hello">
    <h1>{{ msg }}</h1>

    <div id="app">
      <br><br>
      <span v-if="seen">Now you see me</span>
      <span v-if="!seen">Now you don't</span>
      <br><br>
      <button @click="btn_show=!btn_show">tiPKalo za btn</button>
      <br><br>
      <button v-if="btn_show" @click="seen=!seen" v-show={btn_show} id="btn">tiPKalo</button>
      <br><br>


      <p>Cart: ({{cart}})</p>
      <button v-if="!cart<1" @click="cart--">Oduzmi</button>
      <button @click="cart++">Dodaj</button>
      <button v-if="cart>0" @click="cart=0">Ukloni</button>
      <br><br>

    </div>
  </div>
</template>

<!--Javascript-->
<script>

  export default {
      name: 'HelloWorld',
      props: {
        msg: String,
      },
      data(){
        return {
          seen: false,
          btn_show: false,
          cart: 0
        }
      },
      components:{
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

#btn {
  transition: 0.5s ease;
  background-color: #42b983;
  font-size: 2rem;
  border: 5px solid black;
  border-radius: 20px;
}

#btn:hover{
  transition: 0.5s ease-in-out;
  background-color: aqua;
}
</style>