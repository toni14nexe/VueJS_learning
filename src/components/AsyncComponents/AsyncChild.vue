<template>
    <div>
        <h1>Async Child</h1>
        <button @click="show = !show">Show List</button>
        <div v-if="show">
            <async-list/>
        </div>
    </div>
</template>

<script>
    import AsyncList from '../AsyncComponents/AsyncList.vue';

    export default {
        data(){
            return{
                show: false
            }
        },
        components:{
            'async-list': AsyncList
        }
    }
</script>
