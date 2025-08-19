## Guess The Number Webpage

### How the game is played
- The game picks a random secret number in a range 1–100
- Start button generates the random number and alerts that the game has started.
- New Game button asks for confirmation, then starts a fresh round and alerts you that a new game has started.
- The page uses alerts to tell you if you should go higher or lower, until you get it right.

### Setup
- Set title text: title.textContent = \`I'm Thinking Of A Number  (1–${max})\`;
- Sync HTML attributes on the input: min, max, required
- Disable Guess button until the game actually starts.

### Start game/ New game
- If a game is already running, alert the user to use New Game.
- Otherwise: Call makeSecret() to generate the number and reset the page.
- Mark started = true and disable the Start button.
- Alert that the game started
- Picks secret = Math.floor(Math.random() * max) + 1
- Resets: 
    tries = 0
    clears input.value
    syncs min/max attributes and title text
    calls validate() to re-enable/disable Guess properly
    clears the hidden guessList (history)

### Guess button/ pressing enter
- Stop the form from reloading the page (e.preventDefault())
- If started is false, alert the user to click Start first
- Run validate() to make sure the input is a whole number in the range (1-100)
- If not valid, show an alert and do nothing else
- Turn the input into a number: const n = Number(input.value.trim())
- Increase attempts: attempts++
- If n === secret -> alert “Correct!” with attempt count, then ask if you want a new game
- If n < secret -> alert “Too low — guess higher!”
- If n > secret -> alert “Too high — guess lower!”
- Keep focus in the box and select the text so the player can type the next guess fast.

### Validate
- HTML rules help first: required, min="1", max="100", step="1"
- Use input.setCustomValidity(message) to connect the message to the field
- Disable or enable the Guess button based on validity
- js adds friendly checks:
    empty -> “Please enter a number.”
    not a whole number -> “Whole numbers only.”
    out of range -> “Enter a number between 1 and 100.”






