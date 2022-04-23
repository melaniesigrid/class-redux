const initialState = {
  songs: [
    { title: 'I love Redux' },
    { title: 'The redux song' },
    { title: 'Run to the Redux Hill' },
  ],
};

const songReducers = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default songReducers;