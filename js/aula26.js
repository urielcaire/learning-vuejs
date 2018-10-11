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

var error404 = Vue.component('error-404', {
    template: "#error404"
});

var MayansContent = Vue.component('mayans-content', {
    template: "#mayansContent"
});

var router = new VueRouter({
    //mode: 'history',// remove a # da url
    routes:[
        { path: '/', name: 'home', redirect: {name: 'mayansContent', params: {slug: 'ez'}} },
        { path:'/sons-of-anarchy', name: 'soa-members', component: SonsOfAnarchy },
        { path:'/mayans', name: 'mayans-members', component: Mayans,
          children: [
              { path: ':slug', name: 'mayansContent', component: MayansContent }
          ]
      },
      { path: "*", name: "error404", component: error404 }
    ]
});

var app = new Vue({
    el: "#app",
    router,
    created() {
        //this.$router.push('/mayans/ez');
        //this.$router.push({name: 'mayansContent', params: {name: 'ez'}});
    },
    data: {
        titulo: "VueJS - #26 Redirecionamento e Rota Padrão",
        conteudo: ""
    }
});
