<template>
    <div>
        <h3>Custom Text Input</h3>
        <input v-model="message" type="text" placeholder="Start writing..." @input="$emit('customChange', $event.target.value)"/>
        <p>Message is: {{ message }}</p>
    </div>
</template>

<script>
export default {
    data(){
            return{
                message: ''
            }
        },
}
</script>