var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - Aula #08 Diretiva v-on [@]",
        conteudo: "Diretiva v-on[@]: métodos e eventos no VueJS!"
    },
    methods: {
        alertar() {
            alert("Ooops!");
        }
    }
});
