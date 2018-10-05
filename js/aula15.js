Vue.component('input-form', {
    template: "#form",
    data(){
        return {
            title: ''
        }
    },
    methods: {
        submit() {
            ///this.eventBus
            this.$eventHub.$emit('submit', this.title);
        }
    }
});

Vue.component('my-list', {
    template: "#list",
    data(){
        return {
            list: [
                { title: 'Uma Atividade' }
            ]
        }
    },
    created() {
        var listComponent = this;
        //this.eventBus
        this.$eventHub.$on('submit', function(dados){
            listComponent.list.push({title: dados});
        });
    }
});

//var eventBus = new Vue();
Vue.prototype.$eventHub = new Vue();

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #15 Componentes não Parentes",
        conteudo: "Componentes não Parentes | Transferindo dados entre componentes"
    }
});
