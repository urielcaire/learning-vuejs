var mixins = {
    created(){
        console.log("hello vue from mixins");
    },
    methods: {
        getUsers(){
            console.log('getUsers');
        }
    }
};

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #17 Mixins",
        conteudo: "Reutilização de rotinas de programação."
    },
    mixins: [mixins]
});
