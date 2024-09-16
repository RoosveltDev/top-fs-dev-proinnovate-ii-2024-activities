/**
 * Retrieves the contacts from localStorage.
 * @returns {Array} The list of contacts.
 */
export const getContacts = () =>
    JSON.parse(localStorage.getItem("contacts")) || [];

/**
 * Saves the contacts to localStorage.
 * @param {Array} contacts - The list of contacts to save.
 */
export const saveContacts = (contacts) => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
};