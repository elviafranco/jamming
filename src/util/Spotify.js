let accessToken;
let clientId = "e366471f6c9341afba05819677811b85";
let redirectUri = "http://localhost:3000/"

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        } else {
            // check for access token match
            const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
            const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
            if (accessTokenMatch && expiresInMatch) {
                accessToken = accessTokenMatch[1];
                const expiresIn = Number(expiresInMatch[1]);
                window.setTimeout(() => accessToken = '', expiresIn * 1000);
                window.history.pushState('Access Token', null, '/');
                return accessToken;
            } else {
                const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
                window.location = accessUrl;
            }
        }
    },
    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=TRACK${searchTerm}`, {
            headers: { Authorization: `Bearer ${accessToken}` }
        })
    }
};

export default Spotify;