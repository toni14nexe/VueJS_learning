<template>
    <div>
        <slot name="image"><img src="https://www.iucn.org/sites/default/files/styles/what_we_do_large/public/images-themes/freashwater-shutterstock_1288634614.jpg.webp?itok=XEBAI6xA"></slot>
        <h2>
            <slot name="description" v-bind:descriptionValue="descriptionValue">Natrue</slot>    
        </h2>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                descriptionValue: 'Changed name for video throught slot'
            }
        }
    }
</script>

<style scoped>
    img{
        max-width: 100%;
    }
</style>