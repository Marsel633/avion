import { configureStore } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emptyReducer = (state = {}, _action: unknown) => state;

export const store = configureStore({
  reducer: {
    empty: emptyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;