var mixins = {
    methods: {
        getUsers(){
            var url = 'http://jsonplaceholder.typicode.com/users';
            this.loader = true;
            this.$http.get(url).then(function(response) {
                this.users = response.body;
            }, function(error){
                //console.log(error);
                this.error.code = error.status;
                this.error.msg = error.statusText;
            }).finally(function(){
                this.loader = false;
            });
        }
    }
};

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #18 Ajax com vue-resource",
        conteudo: "Um 'plugin' de VueJS que permite trabalhar com requisições.",
        loader: false,
        users: [],
        error: {
            code: "",
            msg: ""
        }
    },
    mixins: [mixins]
});
