// Sample data
const categories = {
  trending: {
    title: "Trending Now",
    posters: [
      "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "https://image.tmdb.org/t/p/w500/jRXYjXNq0Cs2TcJjLkki24MLp7u.jpg"
    ]
  },
  "top-rated": {
    title: "Top Rated",
    posters: [
      "https://image.tmdb.org/t/p/w500/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "https://image.tmdb.org/t/p/w500/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg"
    ]
  },
  "action-movies": {
    title: "Action Movies",
    posters: [
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "https://image.tmdb.org/t/p/w500/xCEg6KowNISWvMh8GvPSxtdf9TO.jpg"
    ]
  }
};

// Create posters for each category
Object.entries(categories).forEach(([id, data]) => {
  const container = document.querySelector(`#${id} .row-posters`);
  data.posters.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = data.title;
    img.addEventListener("click", () => showModal(src));
    container.appendChild(img);
  });
});

// Modal logic
const modal = document.getElementById("movie-modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.querySelector(".close-button");

function showModal(src) {
  modal.style.display = "block";
  modalImg.src = src;
  document.getElementById("modal-desc").textContent = "This is a sample movie description.";
}

closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => {
  if (e.target == modal) modal.style.display = "none";
};

// Search functionality
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  document.querySelectorAll(".row-posters img").forEach(img => {
    img.style.display = img.alt.toLowerCase().includes(query) ? "block" : "none";
  });
});
