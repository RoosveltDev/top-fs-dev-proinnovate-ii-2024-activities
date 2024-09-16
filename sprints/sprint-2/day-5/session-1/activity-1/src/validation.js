/**
 * Validates a name to ensure it contains only letters and spaces.
 * @param {string} name - The name to validate.
 * @returns {boolean} True if the name is valid, false otherwise.
 */
export const validateName = (name) => /^[A-Za-z\s]+$/.test(name);

/**
 * Validates a phone number to ensure it contains only numbers.
 * @param {string} phone - The phone number to validate.
 * @returns {boolean} True if the phone number is valid, false otherwise.
 */
export const validatePhone = (phone) => /^[0-9]+$/.test(phone);