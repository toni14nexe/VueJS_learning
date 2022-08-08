<template>
 <div>
   <br><br>
   <account-info :username="user.username" />
 </div>
</template>
 
<script>
import AccountInfo from "./AccountInfo.vue";
 
export default {
 components: {
   AccountInfo
 },
 data() {
   return {
     user: {
       username: "Parent speaking: 'LISTEN ME!'"
     }
   }
 }
}
</script>