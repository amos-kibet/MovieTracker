# 🎬 Movie Collection Manager - JavaScript Learning Exercise

A comprehensive JavaScript learning project focused on **constructors**, **conditionals**, **operators**, and **objects**. Build a movie collection manager that tracks viewing progress, ratings, and recommendations.

## 📚 Learning Objectives

By completing this exercise, you will learn:

- ✅ **Constructors**: Creating objects with the `Movie` class
- ✅ **Conditionals**: Using `if/else` statements for decision-making
- ✅ **Operators**: Comparison and mathematical operators
- ✅ **Objects**: Properties, methods, and object manipulation
- ✅ **DOM Manipulation**: Creating and displaying elements dynamically
- ✅ **Arrays**: Working with collections of objects

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, Atom, etc.)
- Basic understanding of HTML and CSS (helpful but not required)

### Setup Instructions

1. **Download the files**: Save all three files in the same folder

   - `index.html`
   - `styles.css`
   - `script.js`

2. **Open the project**:

   - Open `index.html` in your web browser
   - Open `script.js` in your code editor

3. **Open Developer Tools**:
   - Press `F12` or right-click → "Inspect"
   - Go to the "Console" tab to see any errors

## 📋 Exercise Tasks

### Task 1: Basic Conditionals (Easy) ⭐

Complete the watch status logic in the `Movie` constructor.

**What to do:**
Add conditional logic to determine the movie's watch status based on `watchTime` vs `totalDuration`.

**Logic:**

- If `watchTime === 0`: Status should be "Not started"
- If `watchTime > 0 && watchTime < totalDuration`: Status should be "In progress"
- If `watchTime >= totalDuration`: Status should be "Completed"

**Code to add:**

```javascript
// Add this inside the constructor
if (this.watchTime === 0) {
  this.watchStatus = "Not started";
} else if (this.watchTime < this.totalDuration) {
  this.watchStatus = "In progress";
} else {
  this.watchStatus = "Completed";
}
```

### Task 2: Rating Recommendations (Medium) ⭐⭐

Add recommendation logic based on the movie's rating.

**What to do:**
Create conditional statements to determine recommendation level.

**Logic:**

- If `rating >= 8`: "Highly recommended"
- If `rating >= 6 && rating < 8`: "Good"
- If `rating >= 4 && rating < 6`: "Average"
- If `rating < 4`: "Not recommended"

**Code to add:**

```javascript
// Add this inside the constructor
if (this.rating >= 8) {
  this.recommendation = "Highly recommended";
} else if (this.rating >= 6) {
  this.recommendation = "Good";
} else if (this.rating >= 4) {
  this.recommendation = "Average";
} else {
  this.recommendation = "Not recommended";
}
```

### Task 3: Progress Calculation (Easy) ⭐

Calculate the viewing progress percentage.

**What to do:**
Use mathematical operators to calculate progress as a percentage.

**Code to add:**

```javascript
// Add this inside the constructor
this.progressPercentage = (this.watchTime / this.totalDuration) * 100;
```

### Task 4: Bonus Challenges (Advanced) ⭐⭐⭐

Once you've completed the basic tasks, try these advanced challenges:

#### Challenge 4a: Time Remaining

Add a property that calculates remaining watch time.

```javascript
// Add this inside the constructor
this.timeRemaining = this.totalDuration - this.watchTime;
```

#### Challenge 4b: Favorite Status

Add a boolean property for favorite movies.

```javascript
// Add this inside the constructor
this.isFavorite = this.rating >= 8;
```

#### Challenge 4c: Watch Date

Add a timestamp for when the movie was last accessed.

```javascript
// Add this inside the constructor
this.watchDate = new Date().toLocaleDateString();
```

#### Challenge 4d: Duration Formatting

Create a method to format duration in hours and minutes.

```javascript
// Add this method to the Movie class
getFormattedDuration() {
  const hours = Math.floor(this.totalDuration / 60);
  const minutes = this.totalDuration % 60;
  return `${hours}h ${minutes}m`;
}
```

## 🧪 Testing Your Code

### Step-by-Step Testing

1. **After each change**, refresh your browser (`Ctrl+R` or `Cmd+R`)
2. **Check the console** for any JavaScript errors (F12 → Console tab)
3. **Verify visual elements**:
   - Movies display with correct titles and genres
   - Watch status shows correctly (Not started/In progress/Completed)
   - Recommendation levels appear with proper styling
   - Progress bars show for "In progress" movies
   - "Continue Watching" buttons only appear for in-progress movies
   - Statistics are calculated and displayed correctly

### Expected Results

When completed correctly, you should see:

- **6 movie cards** with different scenarios
- **Color-coded status indicators** (blue for not started, orange for in progress, green for completed)
- **Star ratings** displayed as ★★★★☆ format
- **Progress bars** for movies in progress
- **Statistics panel** showing collection overview

## 📖 Key JavaScript Concepts Explained

### Constructors

```javascript
class Movie {
  constructor(title, genre, rating, watchTime, totalDuration) {
    // This is the constructor - it runs when creating new Movie objects
    this.title = title; // 'this' refers to the current object
  }
}
```

### Conditionals

```javascript
if (condition) {
  // Code runs if condition is true
} else if (anotherCondition) {
  // Code runs if anotherCondition is true
} else {
  // Code runs if no conditions are true
}
```

### Operators

- **Comparison**: `===` (equal), `>=` (greater than or equal), `<` (less than)
- **Mathematical**: `+` (add), `-` (subtract), `*` (multiply), `/` (divide)
- **Logical**: `&&` (and), `||` (or), `!` (not)

### Objects

```javascript
// Creating an object
let movie = new Movie("Title", "Genre", 8, 45, 120);

// Accessing properties
console.log(movie.title); // "Title"
console.log(movie.rating); // 8

// Adding properties
movie.isFavorite = true;
```

## 🐛 Troubleshooting

### Common Issues

**Problem**: Movies don't display

- **Solution**: Check the console for JavaScript errors
- **Check**: Make sure all three files are in the same folder

**Problem**: Status shows as "undefined"

- **Solution**: Verify your conditional logic in the constructor
- **Check**: Make sure you're setting `this.watchStatus` correctly

**Problem**: Progress bars don't appear

- **Solution**: Ensure `this.progressPercentage` is calculated
- **Check**: Verify the mathematical calculation is correct

**Problem**: Styling looks wrong

- **Solution**: Make sure `styles.css` is in the same folder as `index.html`
- **Check**: Verify the CSS file is properly linked in the HTML

### Debugging Tips

1. **Use `console.log()`** to check values:

   ```javascript
   console.log("Watch time:", this.watchTime);
   console.log("Total duration:", this.totalDuration);
   ```

2. **Check the browser console** for error messages

3. **Add temporary alerts** to verify your logic:
   ```javascript
   alert("Watch status: " + this.watchStatus);
   ```

## �� Success Criteria

You've successfully completed the exercise when:

- ✅ All 6 movies display correctly
- ✅ Watch status is accurate for each movie
- ✅ Recommendation levels are properly calculated
- ✅ Progress bars appear for in-progress movies
- ✅ Statistics panel shows correct numbers
- ✅ No JavaScript errors in the console
- ✅ All styling is applied correctly

## 🚀 Next Steps

After completing this exercise, try:

1. **Add more movies** to test different scenarios
2. **Create a search function** to filter movies by genre
3. **Add a rating system** where users can change ratings
4. **Implement local storage** to save movie data
5. **Add sorting functionality** (by rating, title, genre)
6. **Create a "Add Movie" form** for user input

## 📚 Additional Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Eloquent JavaScript](https://eloquentjavascript.net/) - Free online book
- [JavaScript.info](https://javascript.info/) - Modern JavaScript tutorial
- [W3Schools JavaScript Tutorial](https://www.w3schools.com/js/)

## �� Contributing

This is a learning exercise, but if you find bugs or have suggestions for improvements, feel free to:

- Report issues
- Suggest additional features
- Share your completed solutions
- Create variations of the exercise

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Coding! ��✨**

_Remember: The best way to learn programming is by doing. Don't be afraid to experiment and make mistakes!_
