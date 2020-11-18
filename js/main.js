/*
Creare una web app con Vue che permetta ad un utente di:
- Inserire un elemento nella lista
- Rimuovere un elemento dalla lista
Seguite lo screenshot per i dettagli su come inizializzare lo stato dell'app e per i dettagli grafici.

BONUS:
Al click di un elemento presente nella lista, cambiare il colore dello sfondo. Se l'utente clicca nuovamente sullo stesso elemento, riportare il colore a quello che avete scelto di default. ( Lo sfondo è relativo a quel singolo elemento )
*/


const todoListApp = new Vue({
  el: '#root',
  data: {
    todoList: [],
    newTodo: ''
  },
  methods: {
    addTodo(){
      if(this.newTodo.length > 0){
      this.todoList.push(this.newTodo.charAt(0).toUpperCase() + this.newTodo.slice(1));
      this.newTodo = '';
      } else {
        alert('Devi scrivere qualcosa')
      }
    },
    deleteTodo(delIndex){
      this.todoList.splice(delIndex, 1);
    }
  }
})
