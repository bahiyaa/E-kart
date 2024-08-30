import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice= createSlice({
    name:'wishlist',
    initialState:[],
    reducers:{
        addtoWishList:(state,action)=>{
            state.push(action.payload)
        },
        // to remove item from store
        removeFromWishlist:(state,action)=>{
            return state.filter(item => item.id != action.payload)
        }
    }
})
 
export const {addtoWishList,removeFromWishlist}= wishlistSlice.actions;
export default wishlistSlice.reducer;