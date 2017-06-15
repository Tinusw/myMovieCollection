export const movies =(state= [], action) => {
  switch (action.type){
    case 'CREATE_MOVIE':
      return [
        ...state,
        Object.assign({}, action.movie)
      ];
    case 'DELETE_MOVIE':
      return [
        ...state.filter(({ id }) => id  !== action.id)
      ]
    case 'FETCH_MOVIE':
      return [
        action.id
      ]
    default:
      return state
  }
};

// export const movie =(state=[], action) => {
//   switch (action.type) {
//     case 'FETCH_MOVIE':
//       return [
//         state.find(id => id === action.id)
//       ]
//     default:
//       return state;
//   }
// }
export default movies
