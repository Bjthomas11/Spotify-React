export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  singleSongPlaying: null,
  //   change token to null after finished dev work
  token:
    "BQA1UYau96VOAXFk6G7mvN4XD1vO3hVWi5lwPXwiN6wSjiZJpwkvif8khjqLMzBksEgvoqNQhywm_hUJUCasn_2zIBi0lR43DcsgaHC9WOEApMAEJ3go1jb0RVqxzhQkVHF74pjyQ4Tm91Xm3alDWsSiwXRpjXuJZUq7oLFzw3wrd0jIgEd3",
};

const reducer = (state, action) => {
  console.log(action);
  //   ACTION -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
