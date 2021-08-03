const initialState=0;
export const Reducers=(state=initialState,action)=>{
    console.log(Reducers)
    switch(action.type){
case "INCREMENT" : return state +1 
case "DECREMENT" : return state -1;
default :return state; 
    }
}
