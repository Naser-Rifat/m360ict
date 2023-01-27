import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import { reducer } from "./Reducer";
import thunk from "redux-thunk";

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const store = createStore(reducer, applyMiddleware(thunk));
