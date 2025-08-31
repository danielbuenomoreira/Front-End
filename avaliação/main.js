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

    // Adiciona um evento de clique para lidar com a seleção da avaliação
    ratingElement.addEventListener("click", function() {
      alert(`Você selecionou: ${rating.name}`);
      // Aqui você pode adicionar lógica para enviar a avaliação para o servidor, por exemplo
    });

    ratingsContainer.appendChild(ratingElement);
  });
});

const ratings = [
  { emoji: ":-D", name: "Excelente" },
  { emoji: ":)", name: "Médio" },
  { emoji: ":(", name: "Ruim" }
];