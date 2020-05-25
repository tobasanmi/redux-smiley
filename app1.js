let result = document.getElementById("face");
function mood(state="", action){
  switch(action.type){
      case 'SAD' :
          return action.payload;
      case 'HAPPY' :
          return action.payload;
      case 'CONFUSED' :
          return action.payload;
      case 'ANGRY' :
          return action.payload;

          default:
              return state
       }
      }

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

document.getElementById('sad').addEventListener('click', ()=>{
  store.dispatch(sad())
});
document.getElementById('happy').addEventListener('click', ()=>{
  store.dispatch(happy())
});
document.getElementById('confused').addEventListener('click', ()=>{
  store.dispatch(confused())
});
document.getElementById('angry').addEventListener('click', ()=>{
  store.dispatch(angry())
});


store.subscribe(() => {
    result.innerHTML = (store.getState())
  });

  
    
