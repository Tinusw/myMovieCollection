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
      const index = state.findIndex(movie => movie.id === action.movie.id)
      if(index > -1){
        console.log('found movie')
        return state.map(movie => {
          if (movie.id === action.movie.id) return action.movie
          return movie
        })
      } else {
        console.log('not found')
        return [
          ...state,
          action.movie
        ]
      }
      return
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
