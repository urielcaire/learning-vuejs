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
                {name: "EZ", slug: 'ez'},
                {name: "Alvarez", slug: 'alvarez'}
            ]
        }
    }
});

var MayansContent = Vue.component('mayans-content', {
    template: "#mayansContent"
});

var router = new VueRouter({
    //mode: 'history',// remove a # da url
    routes:[
        { path:'/sons-of-anarchy', name: 'soa-members', component: SonsOfAnarchy },
        { path:'/mayans', name: 'mayans-members', component: Mayans,
          children: [
              { path: ':name', name: 'mayansContent', component: MayansContent }
          ]
        }
    ]
});

var app = new Vue({
    el: "#app",
    router,
    data: {
        titulo: "VueJS - #24 Sub rotas e rotas com parâmetros",
        conteudo: ""
    }
});
