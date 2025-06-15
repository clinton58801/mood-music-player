
document.getElementById("spotify-connect").addEventListener("click", function () {
  const mood = document.getElementById("mood-select").value;
  if (!mood) {
    alert("Please select a mood.");
    return;
  }

  const clientId = "YOUR_SPOTIFY_CLIENT_ID";
  const redirectUri = "https://cerulean-crisp-acedb4.netlify.app/callback";
  const scopes = "user-read-private user-read-email";

  const authUrl = \`https://accounts.spotify.com/authorize?client_id=\${clientId}&response_type=token&redirect_uri=\${encodeURIComponent(redirectUri)}&scope=\${encodeURIComponent(scopes)}&state=\${mood}\`;

  window.location.href = authUrl;
});
