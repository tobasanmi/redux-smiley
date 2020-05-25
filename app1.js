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

  
    
