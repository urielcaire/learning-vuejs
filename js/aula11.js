var app = new Vue({
    el: "#app",
    beforeCreate(){
        console.log('beforeCreate');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    created(){
        console.log('created');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    beforeMount(){
        console.log('beforeMount');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    mounted(){
        console.log('mounted');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    beforeUpdate(){
        console.log('beforeUpdate');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    updated(){
        console.log('updated');
        console.log('titulo', this.titulo);
        console.log('el', this.$el);
    },
    data: {
        titulo: "VueJS - #11 Lifecycle Hooks",
        conteudo: "Lifecycle Hooks: como o VuejS funciona."
    }
});
