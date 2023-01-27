const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: './server.php',
            diskList: [],
        }
    },
    methods: {
        getDisk() {
            axios.get(this.apiUrl).then((response) => {
                console.log(response.data);
                this.diskList = response.data;
            })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
                .then(function () {
                    // always executed
                });
        }
    },
    created() {
        this.getDisk();
    }
}).mount('#app')