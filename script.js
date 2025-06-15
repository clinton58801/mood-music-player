
document.getElementById("spotify-connect").addEventListener("click", function () {
  const mood = document.getElementById("mood-select").value;
  const errorMessage = document.getElementById("error-message");
  errorMessage.textContent = "";

  if (!mood) {
    errorMessage.textContent = "Please select a mood first.";
    return;
  }

  const clientId = "81c1e62d377745b19104ec8dfb8c9870";
  const redirectUri = "https://euphonious-meringue-d87f96.netlify.app/callback";
  const scopes = "user-read-private user-read-email";

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}&state=${mood}`;

  try {
    window.location.href = authUrl;
  } catch (error) {
    console.error("Redirect failed:", error);
    errorMessage.textContent = "Failed to initiate Spotify login.";
  }
});
