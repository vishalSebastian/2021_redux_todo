import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
const fetchTodoList = createAsyncThunk(
  "fetchTodoList",
  async (userId, thunkAPI) => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return response.data;
  }
);

export default fetchTodoList;
