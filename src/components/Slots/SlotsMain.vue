<!-- https://www.youtube.com/watch?v=orGcdmCRCc0 -->

<template>
    <div>

        <slots-practice>
            <template #image>
                <img src="https://media.wired.com/photos/624df21cb340f55b37084fdc/2:3/w_1200,h_1800,c_limit/How-to-Build-a-PC-Gear.jpg">
            </template>
            <template #description>
                {{imageDescription}}
            </template>
        </slots-practice>

        <slots-practice>
            <template #image>
                <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"
                    frameborder="0"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write"
                    allowfullscreen
                ></iframe>
            </template>
            <template #description="{descriptionValue}">
                {{descriptionValue}}
            </template>
        </slots-practice>
        
    </div>
</template>

<script>
    import SlotsPractice from './SlotsPractice.vue';

    export default {
        components: {
            'slots-practice': SlotsPractice
        },
        data(){
            return{
                imageDescription: 'Changed name for image throught slot'
            }
        }
    }
</script>

<style scoped>
    img{
        max-width: 100%;
    }
    iframe{
        min-width: 63.5%;
        max-width: 100%;
        height: auto;
    }
</style>