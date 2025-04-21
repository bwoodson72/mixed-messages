# Mystical Prophecy Generator

A whimsical Node.js application that generates mysterious and poetic prophecies by combining random elements of time, place, action, and prophetic conclusions.

## Description

This program is a creative text generator that creates ethereal prophecies by combining elements from four carefully curated lists:
- Mystical times (e.g., "moonless night", "whispered hour")
- Enigmatic places (e.g., "shifting light", "ancient echoes")
- Prophetic actions (e.g., "walk a path unseen by others")
- Profound conclusions (e.g., "The stars have spoken")

Each generated prophecy follows the format:
> "On a [time] in a place of [place] you will [action]. [conclusion]"

## Installation

1. Ensure you have [Node.js](https://nodejs.org/) installed on your system
2. Clone this repository
3. Navigate to the project directory

## Usage

Run the program using Node.js:

```bash
node index.js
```

Or, if you prefer, you can use npm:

```bash
npm start
```

Each time you run the program, it will generate and display a new, random prophecy.

## Examples

Here are some examples of the prophecies that might be generated:

```
On a moonless night in a place of ancient echoes you will face the mirror of your soul. The stars have spoken.
```

```
On a whispered hour in a place of wandering spirits you will light a fire that does not burn. This cannot be undone.
```

```
On a day of the seventh sign in a place of broken oaths you will follow the call of silence. Let the signs guide you.
```

## Customization

You can easily modify the prophecies by editing the arrays in `index.js`:

- `times`: Add or modify the time periods
- `places`: Add or modify the mystical places
- `actions`: Add or modify the prophetic actions
- `finishers`: Add or modify the concluding statements

The structure of the prophecy can be modified by changing the template string in the `utterProphecy()` function.
