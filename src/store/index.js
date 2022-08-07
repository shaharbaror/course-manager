import { configureStore } from "@reduxjs/toolkit";

import statsSlice from "./stats-slice";

const store = configureStore({
    reducer:{stats: statsSlice.reducer},
});

export default store;