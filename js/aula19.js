var mixins = {
    methods: {
        getUsers(){
            var url = 'http://jsonplaceholder.typicode.com/users';
            var vm = this;
            vm.loader = true;
            axios.get(url).then(function(response) {
                vm.users = response.data;
            }, function(error){
                //console.log(error);
                vm.error.code = error.status;
                vm.error.msg = error.statusText;
            }).finally(function(){
                vm.loader = false;
            });
        }
    }
};

var app = new Vue({
    el: "#app",
    data: {
        titulo: "VueJS - #19 Ajax com Axios",
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
