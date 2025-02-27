import { createSlice } from "@reduxjs/toolkit";

const blogSlice = createSlice({
    name: "blog",
    initialState: null,
    reducers: {
        addBlog: (state, action) => {
            return action.payload;
        },
    },
});

export const { addBlog } = blogSlice.actions;

export default blogSlice.reducer;