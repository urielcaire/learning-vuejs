//componente pai
Vue.component('navbar', {
    template: "#nav"
});
//componente filho
Vue.component('menu-bar', {
    template: "#menu"
});

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #13 Componentes Pais e Filhos",
        conteudo: "Componentes Pais e Filhos | Introdução"
    }
});
