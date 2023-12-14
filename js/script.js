const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: "server.php",
            discsList: [],
            selectImg : null
        }
    },
    created() {
        axios.get(this.apiUrl).then((resp) => {
            this.discsList = resp.data;
        })
    },
    methods: {
        showCard(index) {
            this.selectImg = index;
        },
        hiddenCard() {
            this.selectImg = null;
        }
    }
}).mount("#app");