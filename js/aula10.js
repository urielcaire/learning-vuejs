var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - Aula #10 Computed & Watch",
        conteudo: {
            computed: "Computed: aplica uma função ou ação à uma variável em tempo de execução.",
            watch: "Watch: tem como função acompanhar as mudanças em uma variável."
        },
        nome: ""
    },
    computed: {
        nomeUpper(){
            return this.nome.toUpperCase();
        }
    },
    watch: {
        nome(newValue, oldValue){
            console.log("newValue", newValue);
            console.log("oldValue", oldValue);
        }
    }
});
