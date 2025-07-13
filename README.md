Memory Card Game
This is a classic memory matching game where players flip cards to find matching pairs.

How to Play
The game starts with a grid of faced-down cards.

Click on any two cards to flip them over.

If the two cards have the same image, they will remain face-up.

If the two cards have different images, they will flip back down after a short delay.

The player has a limited number of lives (6 lives initially). Each incorrect match reduces a life.

The goal is to find all matching pairs before running out of lives.

A "You Won" message will appear if all cards are matched. A "Try Again" message will appear if all lives are lost.

Project Structure
card-game.html: The main HTML file that structures the game.

card-game.css: Contains the styling for the game, including card layout and animations.

card-game.js: Implements the game logic, card generation, matching, and game state management.

Features
Responsive Design: The game layout adapts to different screen sizes (though specific responsiveness details are not explicitly defined in the provided CSS, the viewport meta tag is present).

Card Flipping Animation: Smooth transform and transition effects are used when cards are flipped.

Lives Counter: Displays the remaining lives for the player.

Randomized Card Placement: Cards are shuffled at the start of each game.

Win/Loss Condition: Alerts the player upon winning or losing the game.

Restart Functionality: The game can be restarted after completion, shuffling the cards again.

Technologies Used
HTML5

CSS3

JavaScript (ES6+)

Code Explanation
card-game.html
Sets up the basic HTML structure with a title, a heading for "Lives", a <span> to display the playerLivesCount, and a <section> element to contain the game cards.

Links to the card-game.css for styling and card-game.js for functionality.

card-game.css
Applies a gradient background to the body.

Uses CSS Grid for the section to create a 4x4 grid for the cards.

Defines styles for .card, .face, and .back elements, including transform-style: preserve-3d for 3D card flips.

The .toggleCard class is used to rotate the card on the Y-axis, revealing the face.

card-game.js
playerLivesCount: A <span> element that displays the current number of lives.

playerLive: Initializes the player's lives to 6.

getData(): An array of objects, each containing an imgSrc and name for the cards. There are 8 unique images, each duplicated to create 16 cards for matching.

randomize(): Shuffles the cardData array using Math.random().

cardGenerator():

Calls randomize() to get the shuffled card data.

Iterates through the cardData to dynamically create div elements for each card, face (image), and back.

Sets the src for the face image and a name attribute on the card for matching purposes.

Appends the created card elements to the <section>.

Adds a click event listener to each card to toggle the toggleCard class and trigger the checkCards function.

checkCards(e):

Identifies the clicked card and adds a flipped class to it.

When two cards are flipped:

It checks if their name attributes match.

If they match, the flipped class is removed, and pointerEvents are set to none for those cards, effectively keeping them face-up and unclickable.

If they don't match, the flipped class is removed, and after a 1-second setTimeout, the toggleCard class is removed, flipping them back down.

An incorrect match decrements playerLive, and if playerLive reaches 0, the restart function is called with "try again".

Checks if all 16 cards have the toggleCard class (meaning all pairs are found), and if so, calls restart with "you won".

restart(text):

Called when the game is won or lost.

Randomizes the cards again.

Flips all cards back down by removing the toggleCard class.

After a delay, re-enables pointer events and updates the src and name attributes of the cards for a new game.

Resets playerLive to 6.

Displays a window.alert() with the provided text ( "you won" or "try again").

cardGenerator() is called at the end to initialize the game when the script loads.

Setup and Running the Project
Save the three files (card-game.html, card-game.css, card-game.js) in the same directory.

Create an image folder in the same directory and place the image files (SAHIL PHOTO.jpg, ALI IMRAN PHOTO.jpg, asifphoto.jpeg, orange.png, pineapple.png, strawberry.png, tomato.png, watermelon.png) inside it, matching the paths specified in card-game.js.

Open card-game.html in your web browser.
