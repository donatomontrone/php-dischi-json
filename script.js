const { createApp } = Vue

createApp({
    data() {
        return {
            apiUrl: './server.php',
            diskList: [],
            /*             singleDisk: [],
                        diskDetails: false, */
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
        },
        /*         getDetails(index) {
                    axios.get(this.apiUrl).then((response) => {
                        console.log(response.data[index]);
                        this.singleDisk = response.data[index];
                        this.diskDetails = true;
                    })
                        .catch(function (error) {
                            console.log(error);
                        })
                        .then(function () {
                        });
                }*/
    },
    created() {
        this.getDisk();
    }
}).mount('#app')