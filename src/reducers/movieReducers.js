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
    case 'UPDATE_MOVIE':
      // Todo filter
      return [
        ...state.filter(({ id }) => id  !== action.movie.id),
        Object.assign({}, action.movie)
      ]
    default:
      return state
  }
};

export default movies
