/**
 * Renders the list of contacts in the DOM.
 * @param {HTMLElement} contactList - The DOM element to render the contacts in.
 * @param {Array} contacts - The list of contacts to render.
 */
export const renderContacts = (contactList, contacts) => {
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
        const li = document.createElement("li");
        li.classList.add("contact-item");
        li.setAttribute("data-id", contact.id);
        li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        contactList.appendChild(li);
    });
};

/**
 * Displays an error message next to a form element.
 * @param {HTMLElement} element - The form element to display the error message next to.
 * @param {string} message - The error message to display.
 */
export const showError = (element, message) => {
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    element.insertAdjacentElement("afterend", error);
    setTimeout(() => {
        error.remove();
    }, 1500);
};