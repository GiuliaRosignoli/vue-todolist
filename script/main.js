console.log("Vue: ", Vue);

const app = new Vue({
    el: "#app",
    data: {
        todos: [
            {
                text: "Doing the homework",
                completed: false,
            },
            {
                text: "Doing the shopping",
                completed: false,
            },
            {
                text: "Walking the dog",
                completed: true,
            },
            {
                text: "Reading the book",
                completed: true,
            },

        ],
        newTodo:"",
    },
    methods: {
        addTodo(){
     //   console.log("Add new item here");
            if(this.newTodo !== "") {
                this.todos.push({
                    text: this.newTodo,
                    completed: false,
                });

                this.newTodo = "",
                this.$refs.todoInput.focus();
            }
        },

        // Remove the to-do item from the list 

        removeTodo(index){
            this.todos.splice(index, 1);

       //     const deleted = this.todos. splice(index, 1)[0];
        //    console.log(deleted);
        },

        updateStatus(index){
            this.todos[index].completed = ! this.todos[index].completed
        }
    }

}); 