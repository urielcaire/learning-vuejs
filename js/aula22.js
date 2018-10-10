var SonsOfAnarchy = Vue.component('sons-of-anarchy', {
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

var Mayans = Vue.component('mayans', {
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

var router = new VueRouter({
    routes:[
        { path:'/sons-of-anarchy', component: SonsOfAnarchy },
        { path:'/mayans', component: Mayans }
    ]
});

var app = new Vue({
    el: "#app",
    router,
    data: {
        titulo: "VueJS - #22 Introdução a Rotas",
        conteudo: ""
    }
});
