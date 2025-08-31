document.addEventListener("DOMContentLoaded", function() {
  const ratingsContainer = document.querySelector(".ratings");

  // Percorre o array ratings e gera dinamicamente os elementos HTML
  ratings.forEach(rating => {
    const ratingElement = document.createElement("div");
    ratingElement.classList.add("rating");

    const emojiSpan = document.createElement("span");
    emojiSpan.textContent = rating.emoji;
    emojiSpan.classList.add("emoji");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = rating.name;
    nameSpan.classList.add("name");

    ratingElement.appendChild(emojiSpan);
    ratingElement.appendChild(nameSpan);

    // Adiciona um evento de clique para lidar com a sele��o da avalia��o
    ratingElement.addEventListener("click", function() {
      alert(`Voc� selecionou: ${rating.name}`);
      // Aqui voc� pode adicionar l�gica para enviar a avalia��o para o servidor, por exemplo
    });

    ratingsContainer.appendChild(ratingElement);
  });
});

const ratings = [
  { emoji: ":-D", name: "Excelente" },
  { emoji: ":)", name: "M�dio" },
  { emoji: ":(", name: "Ruim" }
];