<template>
    <div>
        <async-child></async-child>
    </div>
</template>

<script>
    import AsyncChild from './AsyncChild.vue';

    export default {
        components: {
            'async-child': AsyncChild
        },
    }
</script>