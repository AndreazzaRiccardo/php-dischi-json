const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "server.php",
            discsList: []
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.discsList = resp.data;
        })
    },
    methods: {}
}).mount("#app");