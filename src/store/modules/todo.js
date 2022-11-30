import todoData from '../../assets/data/todos.json'

export default {
  state: {
    todos: todoData,
    drag: false,

  },
  getters: {
    // todos left
    todosLeft: state => {
      return state.todos.filter(todo => !todo.completed).length;
    },

    // todos completed
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed).length;
    },

    // Active todos
    activeTodos: state => {
      return state.todos.filter(todo => !todo.completed).length;
    }

  },
  mutations: {

  },
  actions: {
    clearCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    dragTodos(event) {
      event.dataTransfer.setData("text", event.target.id);
    },
    getActiveTodos(){
      return this.todos.filter(todo => !todo.completed);
    },
    getCompletedTodos(){
      return this.todos.filter(todo => todo.completed);
    },
    startDrag(event, todo) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.efffectedAllowed = "move";
      event.dataTransfer.setData("todoId", todo.id);
    },
    ondrop(event){
      event.preventDefault();
      const todoId = event.dataTransfer.getData("todoId");
      const todo = this.todos.find(todo => todo.id == todoId);
      const todoIndex = this.todos.indexOf(todo);
      const dropIndex = event.target.getAttribute("data-index");
      this.todos.splice(todoIndex, 1);
      this.todos.splice(dropIndex, 0, todo);
    }
  }
}
