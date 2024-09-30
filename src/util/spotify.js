let accessToken = "";
const clientID = "bc8879cfda254acd92cabd03b1d15142";
const redirectURI = "http://localhost:3000";

const Spotify = {
    getAccessToken(){
        if (accessToken) return accessToken;
        
        const tokeninURL = window.location.href.match(/access_token=([^&]*)/);

        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        //setting acces token and exipry time variables 
        if (tokeninURL && expiryTime) {
            accessToken = tokeninURL[1];
            const expiresIn = Number(expiryTime[1]);
        

        //function to reset the access token when it expires
        window.setTimeout(() => (accessToken = ""), expiresIn * 1000);

        // clearing url after token expires
        window.history.pushState(" Access token", null, "/");
        return accessToken;
        }

        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`
        window.location = redirect;


    },

    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
          method: "GET",
          headers: { Authorization: `Bearer ${accessToken}` },
        })
          .then((response) => response.json())
          .then((jsonResponse) => {
            if (!jsonResponse) {
              console.error("Response error");
            }
            return jsonResponse.tracks.items.map((t) => ({
              id: t.id,
              name: t.name,
              artist: t.artists[0].name,
              album: t.album.name,
              uri: t.uri,
            }));
          });
      },

      savePlaylist(name, trackURIs) {
        if (!name || !trackURIs) return;
        const aToken = Spotify.getAccessToken();
        const header = { Authorization: `Bearer ${aToken}` };
        let userId;
        return fetch(`https://api.spotify.com/v1/me`, {headers: header})
        .then(response => response.json())
        .then((jsonResponse) => {
          userId = jsonResponse.id;
          let playlistId;
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: header,
            method: "post",
            body: JSON.stringify({name: name}),
          })
          .then((response) => response.json())
          .then((jsonResponse) => {
            playlistId = jsonResponse.id
            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
              headers: header,
              method: "post",
              body: JSON.stringify({uris: trackURIs}),
            })
          })
        });
      }
};

export {Spotify};