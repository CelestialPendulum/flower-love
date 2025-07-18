// Play cat sound and animate flower card on click
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
      const audio = document.getElementById('cat-sound');
      audio.currentTime = 0;
      audio.play();
  
      // Add animation
      card.style.transform = 'scale(1.1)';
      setTimeout(() => {
        card.style.transform = '';
      }, 300);
    });
  });
  
  // Handle song input and open Spotify search
  const songInput = document.getElementById('song-input');
  songInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      const songName = songInput.value.trim();
      if (songName) {
        const query = encodeURIComponent(songName);
        const spotifyURL = `https://open.spotify.com/search/${query}`;
        window.open(spotifyURL, '_blank');
      }
    }
  });
  