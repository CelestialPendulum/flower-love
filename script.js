// Play specific flower sound on hover
document.querySelectorAll('.flower').forEach(flower => {
    flower.addEventListener('mouseenter', () => {
      const soundName = flower.dataset.sound;
      const audio = new Audio(`sounds/${soundName}.mp3`);
      audio.play();
    });
  });
  
  // Play typing sound on key press inside input
  const input = document.querySelector('input[type="text"]');
  const typingSound = new Audio('sounds/typing.mp3');
  typingSound.volume = 0.5;
  
  input.addEventListener('keydown', () => {
    // Clone the sound to allow overlapping keypresses
    const clone = typingSound.cloneNode();
    clone.play();
  });
  