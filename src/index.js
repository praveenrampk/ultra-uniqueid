/**
 * Generates a unique ID with configurable options for length, case, and character set.
 *
 * @param {number} length - The length of the unique ID (default is 6).
 * @param {Object} options - Configuration options for the ID.
 * @param {boolean} options.uppercase - Whether to convert the ID to uppercase (default: true).
 * @param {boolean} options.alphaNumeric - Whether the ID should contain numbers (default: true).
 * @returns {string} - A unique string ID based on the given options.
 */
function generateUniqueId(
  length = 6,
  options = { uppercase: true, alphaNumeric: true }
) {
  let timestamp = Date.now().toString(36);

  let randomStr = Math.random().toString(36).slice(2, 10);

  let combined = timestamp + randomStr;

  let shuffled = combined
    .split("")
    .sort(() => 0.5 - Math.random()) // Random sorting
    .join("");

  if (!options.alphaNumeric) {
    shuffled = shuffled.replace(/[0-9]/g, "");
  }

  const uniqueId = shuffled.slice(0, length);

  return options.uppercase ? uniqueId.toUpperCase() : uniqueId;
}

module.exports = generateUniqueId;
