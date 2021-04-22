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
        console.log("Add new item here");
        }
    }

}); 