// Remove all pomodoro-related code and keep only the books functionality
const books = [
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        cover: "pride-prejudice.jpg"
    },
    // Add more books as needed
];

// Populate book shelf
const shelfGrid = document.querySelector('.shelf-grid');
books.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.innerHTML = `
        <img src="${book.cover}" alt="${book.title}" class="book-cover">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
    `;
    shelfGrid.appendChild(bookCard);
});
