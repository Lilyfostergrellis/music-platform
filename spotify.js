const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "cb173b28d2a84091ade448f19d443b38";
const redirectUri = "https://localhost:3000";
const scopes =["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_url=${redirectUri}&scope=${scopes.join("&20")}&response_type=token&show_dialog=true`;
