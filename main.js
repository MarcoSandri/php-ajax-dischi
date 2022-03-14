const app = new Vue(
    {
        el: "#app",
        data : {
            albums : []
        },
        methods: {
            getAlbums() {
                axios.get('http://localhost/php-ajax-dischi/database.php')
                .then((response) => {
                    this.albums = response.data.response;
                });
            }
        },

        mounted() {
            this.getAlbums()
        }
    }
);