import {
  ADD_SONG,
  DELETE_SONG,
  EDIT_SONG,
  UPDATE_SONG,
  CANCEL_EDIT,
} from "../actions/types"

const initialState = {
  songs: [
    { title: "I love redux", editing: false },
    { title: "The redux song", editing: false },
    { title: "Run to the redux hill", editing: false },
  ],
}

const songReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        songs: [action.payload, ...state.songs],
      }
    case DELETE_SONG:
      return {
        songs: state.songs.filter((s, i) => i !== action.payload),
      }
    case EDIT_SONG:
      return {
        songs: state.songs.map((song, i) =>
          i === action.payload
            ? { ...song, editing: true }
            : { ...song, editing: false }
        ),
      }
    case UPDATE_SONG:
      return {
        songs: state.songs.map((song, i) =>
          i === action.index
            ? { ...song, title: action.title, editing: false }
            : song
        ),
      }
    case CANCEL_EDIT:
      return {
        songs: state.songs.map((song, i) =>
          i === action.index ? { ...song, editing: false } : song
        ),
      }
    default:
      return state
  }
}

export default songReducers;
