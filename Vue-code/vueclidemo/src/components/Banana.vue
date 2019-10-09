<template>  
<div> 
<p>{{msg}}</p>
<button @click="addOne">add one</button>
<button @click="minusOne">minus one</button>
</div>
</template>
<script>
export default {
    name:'Banana',
    data(){
        return {
            msg:'I am a Banana',
            price:5
        }
    },
    methods:{
        addOne(){
            // console.log('11111')
           this.$store.dispatch('increase',this.price)
        },
        minusOne(){
            this.$store.commit('decrement',this.price)
        }
    }
}
</script>