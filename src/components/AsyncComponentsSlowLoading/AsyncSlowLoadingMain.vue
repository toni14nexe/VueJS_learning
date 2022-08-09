<template>
    <div>
        <async-child></async-child>
    </div>
</template>

<script>
    import AsyncChild from './AsyncSlowLoadingChild.vue';

    export default {
        components: {
            'async-child': AsyncChild
        },
    }
</script>