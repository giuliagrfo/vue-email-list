/*
Generare 10 indirizzi email e stamparli in pagina all'interno di una lista
 */

const {
    createApp 
} = Vue

createApp({
    data(){
        return{
            allEmail: []
        }
    },
    mounted() {
        for (let index = 0; index < 10; index++) {
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => {
                console.log(response.data.response);
                this.allEmail.push(response.data.response)
            })
           
        }
    }
}).mount('#app')