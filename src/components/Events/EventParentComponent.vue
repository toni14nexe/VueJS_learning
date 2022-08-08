<template>
    <div>
        <custom-text-input @customChange="logChange"></custom-text-input>
    </div>
</template>

<script>
    import CustomTextInput from './CustomTextInput.vue';

    export default {
        components:{
            'custom-text-input': CustomTextInput
        },
        data(){
            return{
                title: ''
            }
        },
        methods:{
            logChange(event){
                console.log(event);
            }
        }
    }
</script>