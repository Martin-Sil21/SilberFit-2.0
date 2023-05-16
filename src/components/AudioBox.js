import React from "react";

function SpotifyAudioBox() {
  return (
    <div className="spotify-audio-box">
      <iframe
        src="https://open.spotify.com/embed/track/7Jy41XI7wVBnXvOifdoaxG"
        width="100%"
        height="100vh"
        allowtransparency="true"
        allow="encrypted-media"
        title="Spotify Audio"></iframe>
    </div>
  );
}

export default SpotifyAudioBox;
