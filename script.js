const flowers = document.querySelectorAll(".flower-card");
const questionBox = document.querySelector(".question-box");
const spotifyPlayer = document.getElementById("spotifyPlayer");
const songInput = document.getElementById("song");
const meowSound = document.getElementById("meowSound");

flowers.forEach(flower => {
  flower.addEventListener("click", () => {
    flowers.forEach(f => f.classList.remove("clicked"));
    flower.classList.add("clicked");
    meowSound.currentTime = 0;
    meowSound.play();

    questionBox.classList.remove("hidden");
    songInput.focus();
  });
});

songInput.addEventListener("change", () => {
  const query = encodeURIComponent(songInput.value);
  const embedURL = `https://open.spotify.com/embed/track/6rqhFgbbKwnb9MLmUQDhG6?utm_source=generator&theme=0&q=${query}`;
  spotifyPlayer.innerHTML = `
    <iframe style="border-radius:12px" src="${embedURL}" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
  `;
  spotifyPlayer.classList.remove("hidden");
});
