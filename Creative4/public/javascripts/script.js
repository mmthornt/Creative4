let app = new Vue({
    el: "#app",
    data: {
        quote: '',
        author: '',
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
              console.log(this.board);
              console.log(response.data);
              return true;
          }
          catch(error) {
              console.log(error);
          }
        },
        addItem(){
            var url="http://hello.mmthornton.com:8080/quotes";
            axios.post(url,{
                quote: this.quote,
                author: this.author,
            })
            .then(response=>{})
            .catch(e=>{
                console.log(e);
            });
            this.quote='';
            this.author='';
            this.getQuotes();
        },
    }
});