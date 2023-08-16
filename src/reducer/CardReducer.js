import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[],
    totalAmount:0,
    favourite:[]
   
}

const Cardslice=createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            console.log(action)
            console.log(action.payload)
            state.value.push(action.payload);
        },
        removeFromCart:(state,action)=>
        {
            state.value.map((itemlist)=>
            {
                if(itemlist.id === action.payload.id)
                {
                    const nextitemlist=state.value.filter((item)=>
                 item.id!== itemlist.id
                    );
                    state.value=nextitemlist;
                }
                console.log("removeFromCart")

                return state;
            })
        },
        getTotals: (state, action) => {
            let total = state.value.reduce(
                (cartTotal, cartItem) => {
                    const { price } = cartItem;
                    cartTotal += price;
                    return cartTotal;
            },
                0)
            total = parseFloat(total.toFixed(0))
            state.totalAmount=total
        },

          addToFav:(state,action)=>{
                console.log("addtofave")
                state.favourite.push(action.payload)
          },

          removeFromFav:(state,action)=>{
               
               state.favourite.map((favlist)=>
               {
                 if(favlist.id === action.payload.id) 
                 {
                    const nextfavlist=state.favourite.filter((filteritem)=>
                    filteritem.id !== favlist.id
                    )
                    state.favourite=nextfavlist;
                 }
                 return state;
                }
               )

          }
    
        
    }
})

export default Cardslice.reducer;
export const { addToCart, removeFromCart,getTotals,addToFav,removeFromFav} =Cardslice.actions;
export const getSelected = (state) => state.cart.value;
export const Amount = (state) => state.cart.totalAmount;
export const heart =(state) =>state.cart.favourite;

