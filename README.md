## Guess The Number Webpage

### How the game is played
- The game picks a random secret number in a range 1–100
- Start button generates the random number and alerts that the game has started.
- New Game button asks for confirmation, then starts a fresh round and alerts you that a new game has started.
- The page uses alerts to tell you if you should go higher or lower, until you get it right.

### Setup
- Set title text: title.textContent = \`Guess The Number (1–${max})\`;
- Sync HTML attributes on the input: min, max, required
- Disable Guess button until the game actually starts.

### Start game/ New game
- If a game is already running, alert the user to use New Game.
- Otherwise: Call makeSecret() to generate the number and reset the page.
- Mark started = true and disable the Start button.
- Alert that the game started
- Picks secret = Math.floor(Math.random() * max) + 1
- Resets: 
- tries = 0
- clears input.value
- syncs min/max attributes and title text
- calls validate() to re-enable/disable Guess properly
- clears the hidden guessList (history)




