export function renderContacts(contactList, contacts) {
    contactList.innerHTML = "";
    contacts.forEach((contact) => {
        const li = document.createElement("li");
        li.classList.add("contact-item");
        li.setAttribute("data-id", contact.id);
        li.innerHTML = `<strong>${contact.name}</strong> - ${contact.phone} <button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button>`;
        contactList.appendChild(li);
    });
}

export function showError(element, message) {
    const error = document.createElement("span");
    error.classList.add("error");
    error.textContent = message;
    element.insertAdjacentElement("afterend", error);
    setTimeout(() => {
        error.remove();
    }, 1500);
}