<!-- dovršiti u vue3 vježbi, ne radi u vue2 -->
<!-- https://www.youtube.com/watch?v=ar1fJECxbyU 2:50-->

<template>
    <div>

        <h2>PluginWithSlotsAndMixins/App.vue</h2>

        <my-header>
            <template #title>
                Building my own Vue plugin
            </template>
            <template #author>
                Me: <i>Toni</i>
            </template>
        </my-header>

    </div>
</template>

<script>
export default ({
})
</script>


<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: gray;
        margin-top: 60px;
    }
</style>