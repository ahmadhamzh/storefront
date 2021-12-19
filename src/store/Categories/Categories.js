let initialState = {
    categories: ['Food', 'ELECTRONICS', 'CONSOL', 'PHONE', 'GAMES'],
    Active : 'FOOD'
  }; 
 
  export default (state = initialState, action) => {
    let { type, payload } = action;
  
    switch (type) {
      case 'Active':return { ...state, Active: payload }      
  
      default:
        return state;
    }
  };  
  
  export const ActiveCategories = (name) => {
    return {
      type: 'Active',
      payload: name
    };
  };
  
 