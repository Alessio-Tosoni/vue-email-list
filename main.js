const { createApp } = Vue

createApp({
    data() {
        return {
            userMails: []
            
        }
    },
    methods: {
        generaMail(){
            for (let i = 0; i < 10; i++) {
                
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(resp => {
                
                    console.log(resp.data.response);
                    this.userMails.push(resp.data.response)

                    //se la risposta è ok
                   
                });
            }
        }   
    },
        mounted() {

        
        
    }
}).mount('#app')