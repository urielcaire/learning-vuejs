Vue.component('card', {
    template: "#card"
});

//var eventBus = new Vue();
Vue.prototype.$eventHub = new Vue();

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #16 Slots",
        conteudo: "Slots - Blocos dinâmicos de conteúdo."
    }
});
