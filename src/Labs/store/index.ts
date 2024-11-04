import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/todos/todosReducer";

const store = configureStore({
  reducer: {
    hello: helloReducer,    // The state object will contain `hello` as key
    counter: counterReducer, // `counter` as key
    add: addReducer,         // `add` as key
    todos: todosReducer,     // `todos` as key
  },
});

export default store;
