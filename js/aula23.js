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
    //mode: 'history',// remove a # da url
    routes:[
        { path:'/sons-of-anarchy', name: 'soa-members', component: SonsOfAnarchy },
        { path:'/mayans', name: 'mayans-members', component: Mayans }
    ]
});

var app = new Vue({
    el: "#app",
    router,
    data: {
        titulo: "VueJS - #23 Rotas nomeadas e history mode",
        conteudo: ""
    }
});
