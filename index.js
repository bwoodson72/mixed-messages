/**
 * Mystical Prophecy Generator
 * 
 * This script generates random, mystical prophecies by combining elements from
 * four arrays: times, places, actions, and finishers. Each prophecy follows the format:
 * "On a [time] in a place of [place] you will [action]. [finisher]"
 */

/**
 * Array of mystical time periods to be used in prophecies.
 * @type {string[]}
 */
const times = [
    "twilight yet to come",
    "moonless night",
    "storm-swept evening",
    "day of hidden truths",
    "whispered hour",
    "veil-thin morning",
    "mist-laced dawn",
    "forgotten evening",
    "day of the seventh sign",
    "hour of long shadows",
    "night foretold in dreams",
    "moment between worlds",
    "sunrise that never warms",
    "frost-kissed morning",
    "eclipse-born noon",
    "windless dusk",
    "hour of soft prophecy",
    "storm’s breath",
    "dusk before the reckoning",
    "night heavy with omens"
];

/**
 * Array of enigmatic places to be used in prophecies.
 * @type {string[]}
 */
const places = [
    "forgotten names",
    "shifting light",
    "ancient echoes",
    "deep silence",
    "wandering spirits",
    "lost time",
    "burning skies",
    "endless questions",
    "sleeping giants",
    "fading stars",
    "secret longing",
    "broken oaths",
    "whispered prayers",
    "fractured memories",
    "echoing footsteps",
    "still waters",
    "untold stories",
    "withered hopes",
    "watchful eyes",
    "distant thunder"
];

/**
 * Array of prophetic actions to be used in prophecies.
 * @type {string[]}
 */
const actions = [
    "walk a path unseen by others",
    "speak truths buried in shadow",
    "find what was never lost",
    "face the mirror of your soul",
    "hear the voice of the forgotten",
    "unlock a door without a key",
    "touch the edge of forever",
    "answer a question not yet asked",
    "awaken what sleeps within",
    "dance with the winds of fate",
    "make peace with a ghost",
    "see with eyes unclouded",
    "bind yourself to a promise",
    "follow the call of silence",
    "shed what no longer serves you",
    "meet the echo of a choice",
    "light a fire that does not burn",
    "cross a threshold you cannot return from",
    "remember the name you once had",
    "embrace the unknown without fear"
];

/**
 * Array of profound concluding statements to finish prophecies.
 * @type {string[]}
 */
const finishers = [
    "And so it shall be.",
    "The stars have spoken.",
    "This cannot be undone.",
    "Such is your fate.",
    "Remember this well.",
    "As the winds whisper, so it comes.",
    "Do not resist the tide.",
    "Let the signs guide you.",
    "What was written, now unfolds.",
    "Mark these words."
];

/**
 * Selects a random phrase from the provided array.
 * 
 * @param {string[]} phraseArray - Array of phrases to choose from
 * @returns {string} A randomly selected phrase from the array
 */
function getPhrase(phraseArray) {
    return phraseArray[Math.floor(Math.random() * phraseArray.length)];
}

/**
 * Generates and outputs a random mystical prophecy.
 * 
 * Selects random elements from the times, places, actions, and finishers arrays
 * and combines them into a coherent prophecy statement that is logged to the console.
 * 
 * @returns {void}
 */
function utterProphecy(){
    let time = getPhrase(times);
    let place = getPhrase(places);
    let action = getPhrase(actions);
    let finisher = getPhrase(finishers);
    let prophecy = `On a ${time} in a place of ${place} you will ${action}. ${finisher}`;
    console.log(prophecy);
}
utterProphecy();
