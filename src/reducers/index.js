const initialState = {
  recipes: [
    {
      _id: '1',
      name: 'Krem ze szparagów',
      image:
        'https://images.unsplash.com/photo-1584551109672-1c3d650eccb7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80',
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REMOVE_ITEM':
      return {
        ...state,
        // [recipes]: [...state[recipes].filter(item => item._id !== 23) ]
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item._id !== action.payload._id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
