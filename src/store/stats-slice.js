import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    content:0,
    speed:0,
    price:0,
    max:0
}



const statsSlice = createSlice({
name:"stats",
initialState,
reducers:{
    changePrice(state,action){
        state.price = action.payload;
    },
    newContent(state,action) {
        state.price -=  (+state.content - action.payload)*0.6;
        const inc = (+state.content - action.payload)*0.3;
        state.content = +action.payload;
        state.speed = +state.speed + inc;
        
    },
    newSpeed(state,action) {
        state.price -= (+state.speed - action.payload)*0.4;
        const inc = (+state.speed - action.payload)*0.3;
        state.speed = +action.payload;
        state.content = +state.content + inc;
        
    },
    newPrice(state,action) {
        state.content += action.payload - state.price;
        state.speed += action.payload - state.price;
        state.price = action.payload;
        
    }

}
});
export const statsAction = statsSlice.actions;

export default statsSlice;