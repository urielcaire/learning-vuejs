Vue.component('sons-of-anarchy', {
    template: "#sonsOfAnarchy",
    data(){
        return {
            members: [
                {name: "Jax"},
                {name: "Chibs"},
                {name: "Juice"}
            ]
        }
    }
});

Vue.component('mayans', {
    template: "#mayans",
    data() {
        return {
            members: [
                {name: "EZ"},
                {name: "Alvarez"}
            ]
        }
    }
});

var app = new Vue({
    el: "#app",
    mounted(){
        console.log(this.$refs.users);
    },
    data: {
        titulo: "VueJS - #20 Atributos Especiais",
        conteudo: "key, ref, slot, is",
        users: [
            {name: "Emma"},
            {name: "Sophia"},
            {name: "Isabella"}
        ],
        serie: "sons-of-anarchy"
    },
    methods: {
        remove(index) {
            this.users.splice(index, 1);
        }
    }
});
