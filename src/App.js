import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import fetchTodoList from "./redux/actions/asyncActions";
import { useDispatch } from "react-redux";
import { createAction } from "@reduxjs/toolkit";
import addTodo from "./redux/actions/syncActions";

const increment = createAction("counter/increment");
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addTodo());
  }, []);
  return [];
}

export default App;
