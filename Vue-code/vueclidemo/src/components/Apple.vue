<template> 
    <div>  
        <p>{{msg}}</p>
        <p>{{$route.params}}</p>
        <button @click="getParam">getParam</button>
    </div>
</template>
<script>
export default {
    name:'Apple',
    data(){
        return {
            msg:'I am a Apple'
        }
    },
    methods:{
        getParam(){
            console.log(this.$route.params)
        }
    }
}
</script>