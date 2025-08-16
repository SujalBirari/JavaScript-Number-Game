# Number Quest - Trivia Adventure

Number Quest is a browser-based trivia game built with vanilla JavaScript, HTML, and CSS. It fetches questions from the [Open Trivia DB API](https://opentdb.com/) and challenges users to answer as many as possible, tracking their score and question number.

## Features

- **Dynamic Question Fetching:** Uses JavaScript's `fetch` API to retrieve trivia questions in real time.
- **Randomized Options:** Shuffles answer choices for each question using array methods.
- **Interactive UI:** Renders questions and options dynamically with DOM manipulation.
- **Score Tracking:** Updates and displays the user's score and question number as they play.
- **Immediate Feedback:** Highlights correct and incorrect answers using CSS classes.
- **Responsive Design:** Styled for usability across devices.

## Project Structure

```
Number Quest - Trivia Adventure/
│
├── index.html                # Main game page
├── scripts/
│   └── script.js             # Core game logic (JavaScript)
├── styles/
│   └── style.css             # Game styling (CSS)
```

## JavaScript Highlights

- **API Integration:**  
  Fetches questions from Open Trivia DB using asynchronous functions.

- **DOM Manipulation:**  
  Dynamically creates and updates question, options, and score elements.

- **Event Handling:**  
  Handles user interactions for answering questions and moving to the next one.

- **State Management:**  
  Maintains game state (`score`, `number`, current question/answers) in JS variables.

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.
3. Play the game—no build steps or dependencies required!

## Customization

- You can easily modify the number or type of questions by editing the API URL in [`scripts/script.js`](scripts/script.js).
- Style the game further by editing [`styles/style.css`](styles/style.css).

## Credits

- Powered by [Open Trivia DB API](https://opentdb.com/).
- Built with vanilla JavaScript, HTML, and CSS.

---

Enjoy challenging your knowledge with
