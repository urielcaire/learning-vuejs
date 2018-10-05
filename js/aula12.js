//componente global
Vue.component('menu-bar', {
    template: "#menu"
});

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #12 Componentes",
        conteudo: "Componentes: códigos/instâncias reutilizáveis."
    }
});
