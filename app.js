
let result = document.getElementById("face");

//const store = createstore(mood);
//reducer
function mood(state={}, action){
 switch(action.type){
     case 'SAD' :
         return {...action.payload};
        // return newState;
     case 'HAPPY':
         {
             const newState = {...state, ...action.payload}
         return console.log('hey');
         ;
         }
         //return newState;
    case 'ANGRY':
        return state + action.payload;
        //return newState;
    case 'CONFUSED':
        return state + action.payload;
    default:
        return state
 }
};

let store = Redux.createStore(mood);

function sad(){
    return{
        type : 'SAD',
        payload: '__--__'
    }
};

function happy(){
    return{
        type : 'HAPPY',
        payload: '&&*_--_*&&'
    }
};

function angry(){
    return{
        type : 'ANGRY',
        payload: '&&*_==_*&&'
    }
};

 function confused(){
 
    let faceConfused =  {
        type : 'CONFUSED',
        payload: '&&**___**&&'
    }
    return faceConfused;
};


document.getElementById('confused').addEventListener('click', store.dispatch(confused()));
document.getElementById('sad').addEventListener('click', store.dispatch(sad()));
document.getElementById('angry').addEventListener('click', store.dispatch(angry()));
document.querySelector('#happy').addEventListener('click', store.dispatch(happy('&&*_--_*&&')));
// function faceConfused(){
//     document.getElementById("face").innerHTML = store.getState();
//   }
store.dispatch(happy('&&*_--_*&&'))

store.subscribe(() => {
    console.log('Called');
    
    // console.log(store.getState());
    //   result.innerHTML = (store.getState());
    })


//console.log(store.getState());
