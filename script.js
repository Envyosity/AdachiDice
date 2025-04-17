function rollTheDice() {
  const container = document.getElementById("form");
  const containerImg = document.getElementById("tv");
  const image = document.getElementById("heyheyhey");
  const audio = new Audio(`/sounds/${parseInt(Math.random() * 2)}.mp3`);
  
  image.src = `/imgs/${parseInt(Math.random() * 10)}.png`;
  container.style.display = "none"
  containerImg.style.display = "flex";

  audio.play();
  setInterval(() => {
    window.location.reload();
  }, 3000);
}
