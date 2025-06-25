// ============================================
// MOVIE COLLECTION MANAGER - LEARNING EXERCISE
// ============================================
//
// TASK: Complete the Movie constructor below to:
// 1. Determine watch status based on watchTime vs totalDuration
// 2. Calculate recommendation level based on rating
// 3. Calculate progress percentage
// 4. Add any additional properties you think would be useful

class Movie {
  constructor(title, genre, rating, watchTime, totalDuration) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.watchTime = watchTime;
    this.totalDuration = totalDuration;

    // TODO: Add your conditional logic here
    // ======================

    // 1. Determine watch status
    // Hint: Use if/else statements to compare watchTime with totalDuration
    // - If watchTime == 0: "Not started"
    // - If watchTime > 0 && watchTime < totalDuration: "In progress"
    // - If watchTime >= totalDuration: "Completed"

    // 2. Calculate recommendation level
    // Hint: Use if/else statements to check rating values
    // - If rating >= 8: "Highly recommended"
    // - If rating >= 6 && rating < 8: "Good"
    // - If rating >= 4 && rating < 6: "Average"
    // - If rating < 4: "Not recommended"

    // 3. Calculate progress percentage
    // Hint: Use mathematical operators: (watchTime / totalDuration) * 100

    // 4. Add a method to get star rating display
    // Hint: Create a method that returns stars based on rating

    // ======================
  }

  // TODO: Add a method to display star rating
  // Example: getStarRating() should return "★★★★☆" for rating 4
}

// ============================================
// SAMPLE MOVIE DATA - Test your constructor
// ============================================

// Create movie instances with different scenarios
let movie1 = new Movie("The Shawshank Redemption", "Drama", 9, 142, 142); // Completed, highly rated
let movie2 = new Movie("Inception", "Sci-Fi", 8, 45, 148); // In progress, highly rated
let movie3 = new Movie("The Room", "Drama", 2, 0, 99); // Not started, low rated
let movie4 = new Movie("Pulp Fiction", "Crime", 6, 75, 154); // In progress, good rating
let movie5 = new Movie("Avatar", "Sci-Fi", 5, 162, 162); // Completed, average rating
let movie6 = new Movie("The Matrix", "Action", 9, 0, 136); // Not started, highly rated

let movies = [movie1, movie2, movie3, movie4, movie5, movie6];

// ============================================
// DISPLAY FUNCTIONS - Don't modify these
// ============================================

function displayMovies() {
  const movieGrid = document.getElementById("movieGrid");
  movieGrid.innerHTML = "";

  movies.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    movieGrid.appendChild(movieCard);
  });
}

function createMovieCard(movie) {
  const card = document.createElement("div");
  card.className = "movie-card";

  // Add movie information
  card.innerHTML = `
    <div class="movie-title">${movie.title}</div>
    <div class="movie-genre">${movie.genre}</div>
    
    <div class="movie-rating">
      <span class="rating-stars">${getStarRating(movie.rating)}</span>
      <span class="rating-text">${movie.rating}/10</span>
    </div>
    
    <div class="watch-status status-${getStatusClass(movie.watchStatus)}">
      ${movie.watchStatus}
    </div>
    
    ${
      movie.watchStatus === "In progress"
        ? `
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${
            movie.progressPercentage
          }%"></div>
        </div>
        <div class="progress-text">${Math.round(
          movie.progressPercentage
        )}% complete</div>
      </div>
    `
        : ""
    }
    
    <div class="recommendation recommend-${getRecommendationClass(
      movie.recommendation
    )}">
      ${movie.recommendation}
    </div>
    
    ${
      movie.watchStatus === "In progress"
        ? `
      <button class="continue-btn" onclick="continueWatching('${movie.title}')">
        Continue Watching
      </button>
    `
        : ""
    }
  `;

  return card;
}

function getStarRating(rating) {
  const fullStars = Math.floor(rating);
  const emptyStars = 5 - fullStars;
  return "★".repeat(fullStars) + "☆".repeat(emptyStars);
}

function getStatusClass(status) {
  return status.toLowerCase().replace(" ", "-");
}

function getRecommendationClass(recommendation) {
  const classes = {
    "Highly recommended": "high",
    Good: "good",
    Average: "average",
    "Not recommended": "low",
  };
  return classes[recommendation] || "average";
}

function continueWatching(movieTitle) {
  alert(`Continuing to watch: ${movieTitle}`);
}

function displayStats() {
  const stats = document.getElementById("stats");

  const totalMovies = movies.length;
  const completedMovies = movies.filter(
    (m) => m.watchStatus === "Completed"
  ).length;
  const inProgressMovies = movies.filter(
    (m) => m.watchStatus === "In progress"
  ).length;
  const notStartedMovies = movies.filter(
    (m) => m.watchStatus === "Not started"
  ).length;
  const averageRating = (
    movies.reduce((sum, m) => sum + m.rating, 0) / totalMovies
  ).toFixed(1);

  stats.innerHTML = `
    <h2>📊 Collection Statistics</h2>
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">${totalMovies}</div>
        <div class="stat-label">Total Movies</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${completedMovies}</div>
        <div class="stat-label">Completed</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${inProgressMovies}</div>
        <div class="stat-label">In Progress</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${notStartedMovies}</div>
        <div class="stat-label">Not Started</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">${averageRating}</div>
        <div class="stat-label">Average Rating</div>
      </div>
    </div>
  `;
}

// ============================================
// INITIALIZE THE APPLICATION
// ============================================

// Display movies and stats when page loads
document.addEventListener("DOMContentLoaded", function () {
  displayMovies();
  displayStats();
});

// ============================================
// HINTS FOR COMPLETING THE EXERCISE
// ============================================
//
// 1. For watch status, use if/else statements:
//    if (this.watchTime === 0) { ... }
//    else if (this.watchTime < this.totalDuration) { ... }
//    else { ... }
//
// 2. For recommendation level, use similar if/else logic:
//    if (this.rating >= 8) { ... }
//    else if (this.rating >= 6) { ... }
//    etc.
//
// 3. For progress percentage, use mathematical operators:
//    this.progressPercentage = (this.watchTime / this.totalDuration) * 100;
//
// 4. Test your logic by checking the browser console for any errors
//
// 5. Try adding additional properties like:
//    - this.isFavorite = this.rating >= 8;
//    - this.timeRemaining = this.totalDuration - this.watchTime;
//    - this.watchDate = new Date().toLocaleDateString();
//
// ============================================
