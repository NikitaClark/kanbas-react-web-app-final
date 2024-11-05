import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Labs/Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Labs/Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Labs/Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Labs/Lab4/ReduxExamples/todos/todosReducer";
import modulesReducer from "../Kanbas/Courses/Modules/reducer";
import assignmentsReducer from "../Kanbas/Courses/Assignments/reducer";
import accountReducer from "../Kanbas/Account/reducer";

const store = configureStore({
  reducer: {
    hello: helloReducer, // The state object will contain `hello` as key
    counter: counterReducer, // `counter` as key
    add: addReducer, // `add` as key
    todos: todosReducer, // `todos` as key
    modulesReducer: modulesReducer,
    accountReducer: accountReducer,
    assignmentsReducer: assignmentsReducer,
  },
});

export default store;
