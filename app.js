
let result = document.getElementById("face");

//const store = createstore(mood);
//reducer
function mood(state='', action){
 switch(action.type){
     case 'SAD' :
         return action.payload;
        // return newState;
     case 'HAPPY':
         return action.payload;
         //return newState;
    case 'ANGRY':
        return action.payload;
        //return newState;
    case 'CONFUSED':
        return action.payload;
    default:
        return state;
 }
};

let store = Redux.createStore(mood);

function sad(){
    return{
        type : 'SAD',
        payload: "&#128547"
    }
};

function happy(){
    return{
        type : 'HAPPY',
        payload: "&#128512"
    }
};

function angry(){
    return{
        type : 'ANGRY',
        payload: "&#128544"
    }
};

 function confused(){
 
    let faceConfused =  {
        type : 'CONFUSED',
        payload: "&#128533"
    }
    return faceConfused;
};

document.getElementById('happy').addEventListener('click',()=>{return store.dispatch(happy())});
document.getElementById('confused').addEventListener('click',()=>{return store.dispatch(confused())});
document.getElementById('sad').addEventListener('click', ()=>{return store.dispatch(sad())});
document.getElementById('angry').addEventListener('click',()=>{return store.dispatch(angry())});

store.subscribe(() => {
      result.innerHTML = (store.getState())
    });
