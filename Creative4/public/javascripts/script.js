let Vue = new Vue({
    el: "#body",
    data: {
        quote: "",
        author: "",
        board: [],
    },
    created: function(){
        this.getQuotes();
    },
    methods: {
        async getQuotes() {
          try {
              let response = await axios.get("/quotes");
              this.board = response.data;
          }
          catch(error) {
              console.log(error);
          }
        },
    }
})