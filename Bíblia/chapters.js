const books = {
    "Genesis": { "1": {}, "2": {} },
    "Exodus": { "1": {}, "2": {} }
  };
  
  function loadChapters() {
    const params = new URLSearchParams(window.location.search);
    const book = params.get("book");
  
    if (book && books[book]) {
      document.getElementById("book-name").textContent = book;
      const chapterList = document.getElementById("chapter-list");
  
      Object.keys(books[book]).forEach(chapter => {
        const chapterLink = document.createElement("a");
        chapterLink.textContent = `Capítulo ${chapter}`;
        chapterLink.href = `verses.html?book=${book}&chapter=${chapter}`;
        chapterList.appendChild(chapterLink);
      });
    } else {
      document.getElementById("book-name").textContent = "Livro não encontrado.";
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadChapters);
  