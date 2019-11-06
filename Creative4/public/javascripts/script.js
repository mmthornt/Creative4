/*global axios*/
let app = new Vue({
    el: "#app",
    data: {
        quote: "",
        author: "",
        board: [],
    },
    created:
        function() {
        this.getQuotes();
    },
    methods: {
        async getQuotes() {
          try {
              console.log("in function");
              let response = await axios.get("/quotes");
              this.board = response.data;
              console.log(response);
              return true;
          }
          catch(error) {
              console.log(error);
          }
        },
    }
})