
let result = document.getElementById("face");

//const store = createstore(mood);
//reducer
function mood(state='', action){
 switch(action.type){
     case 'SAD' :
         return action.payload;
        // return newState;
     case 'HAPPY':
<<<<<<< HEAD
         return action.payload;
=======
         {
             const newState = {...state, ...action.payload}
         return console.log('hey');
         ;
         }
>>>>>>> 34870ec947c921630596e11166b918cf4a401e54
         //return newState;
    case 'ANGRY':
        return action.payload;
        //return newState;
    case 'CONFUSED':
        return action.payload;
    default:
        return state
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
<<<<<<< HEAD
    //console.log('happy');
    
=======
>>>>>>> 34870ec947c921630596e11166b918cf4a401e54
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

<<<<<<< HEAD
document.getElementById('happy').addEventListener('click',()=>{return store.dispatch(happy())});
document.getElementById('confused').addEventListener('click',()=>{return store.dispatch(confused())});
document.getElementById('sad').addEventListener('click', ()=>{return store.dispatch(sad())});
document.getElementById('angry').addEventListener('click',()=>{return store.dispatch(angry())});
=======

document.getElementById('confused').addEventListener('click', store.dispatch(confused()));
document.getElementById('sad').addEventListener('click', store.dispatch(sad()));
document.getElementById('angry').addEventListener('click', store.dispatch(angry()));
document.querySelector('#happy').addEventListener('click', store.dispatch(happy('&&*_--_*&&')));
>>>>>>> 34870ec947c921630596e11166b918cf4a401e54
// function faceConfused(){
//     document.getElementById("face").innerHTML = store.getState();
//   }
store.dispatch(happy('&&*_--_*&&'))

store.subscribe(() => {
<<<<<<< HEAD
      result.innerHTML = store.getState();
=======
    console.log('Called');
    
    // console.log(store.getState());
    //   result.innerHTML = (store.getState());
>>>>>>> 34870ec947c921630596e11166b918cf4a401e54
    })


//console.log(store.getState());
