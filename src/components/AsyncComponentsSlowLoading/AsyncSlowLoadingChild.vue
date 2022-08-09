<template>
    <div>
        <h1>Async Child</h1>
        <button @click="show = !show">Show List</button>
        <div v-if="show">
            <List/>
        </div>
    </div>
</template>

<script>
    import LoadingComponent from './LoadingComponent.vue';
    import ErrorComponent from './ErrorComponent.vue';

    const List = () => ({
        component: import('../AsyncComponents/AsyncList.vue'),
        loading: LoadingComponent,
        error: ErrorComponent,
        timeout: 500
    })

    export default {
        data(){
            return{
                show: false
            }
        },
        components:{
            List
        }
    }
</script>