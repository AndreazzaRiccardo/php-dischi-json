const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "server.php",
            discsList: [],
            selectDisc: []
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.discsList = resp.data;
        })
    },
    methods: {
        showCard(index) {
            axios.get(this.apiUrl, {
                params: {
                    id : index,
                },
            }).then((resp) => {
                this.selectDisc = resp.data;
            })
        },
        hiddenCard() {
            this.selectDisc = [];
        }
    }
}).mount("#app");