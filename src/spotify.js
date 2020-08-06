// DOCS: https://developer.spotify.com/documentation/web-api/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectURI = "http://localhost:3000/";

const clientID = "984df4c54ae2495399cb0337a4e9e275";

// scope agreements to allow once redirect to spotify login screen
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

// pulling token from URL
export const getTokenFromURLResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((inital, item) => {
      let parts = item.split("=");
      inital[parts[0]] = decodeURIComponent(parts[1]);

      return inital;
    }, {});
};

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURI}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
