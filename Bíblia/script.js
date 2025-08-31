const books = {
    "Genesis": { "1": { "1": "No princípio criou Deus os céus e a terra." }, "2": {} },
    "Exodus": { "1": {}, "2": {} }
    // Adicione mais livros aqui
  };
  
  // Função para carregar os livros na página inicial
  function loadBooks() {
    const bookList = document.getElementById("book-list");
    Object.keys(books).forEach(book => {
      const bookLink = document.createElement("a");
      bookLink.textContent = book;
      bookLink.href = `chapters.html?book=${book}`;
      bookList.appendChild(bookLink);
    });
  }
  
  document.addEventListener("DOMContentLoaded", loadBooks);
  