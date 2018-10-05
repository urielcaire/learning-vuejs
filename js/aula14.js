//componente pai
Vue.component('navbar', {
    template: "#nav",
    data(){
        return {
            topNav: [{label: 'Home'}, {label: 'Link'}, {label: 'Disabled'}]
        }
    },
    methods: {
        getLink(index){
            alert(this.topNav[index].label);
        }
    }
});
//componente filho
Vue.component('menu-bar', {
    template: "#menu",
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    methods: {
        emitClick(index){
            this.$emit('emit-click', index);
        }
    }
});

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #14 Componentes Pais e Filhos",
        conteudo: "Componentes Pais e Filhos | Transferindo dados entre componentes"
    }
});
