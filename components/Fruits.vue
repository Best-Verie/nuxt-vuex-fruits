<template>
    <div>
        <h2>Fruits</h2>
        <button @click="addFruit()">Add new</button>
        <ul>
        <li v-for="fruit in fruits" :key="fruit.id">
            {{ fruit }}
        </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'Fruits',
    methods:{
        addFruit(){
            const newFruit = prompt('Enter a fruit:');
            this.$store.commit('fruits/addFruit', newFruit);

        }
    },
    computed:{
        fruits(){
            return this.$store.state.fruits;
        }
    }
}
</script>