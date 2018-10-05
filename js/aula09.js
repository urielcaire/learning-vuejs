var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - Aula #09 Filters",
        conteudo: "Filters: funções para o tratamento de dados.",
        usuarios: [
            { nome: "Jax Teller" },
            { nome: "Tig" },
            { nome: "Chibs" }
        ]
    },
    filters: {
        toUpperCase(str) {
            return str.toUpperCase();
        }
    }
});
