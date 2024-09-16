// src/events.js
import { getContacts, saveContacts } from "./storage.js";
import { renderContacts, showError } from "./dom.js";
import { validateName, validatePhone } from "./validation.js";

export function setupEventListeners() {
    let contacts = getContacts();
    const contactList = document.getElementById("contactList");
    const filterInput = document.getElementById("filter");
    const clearFilterBtn = document.getElementById("clearFilterBtn");
    const addContactBtn = document.getElementById("addContactBtn");
    const contactForm = document.getElementById("contacts");

    contactForm.onsubmit = function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const terms = document.getElementById("terms").checked;

        if (!validateName(name)) {
            showError(
                document.getElementById("name"),
                "Name should contain only letters."
            );
            return;
        }

        if (!validatePhone(phone)) {
            showError(
                document.getElementById("phone"),
                "Phone should contain only numbers."
            );
            return;
        }

        if (!name || !phone || !terms) {
            showError(
                addContactBtn,
                "Please fill in all fields and accept the terms"
            );
            return;
        }

        const newContact = { id: Date.now(), name, phone };
        contacts.push(newContact);
        saveContacts(contacts);
        renderContacts(contactList, contacts);
        contactForm.reset();
    };

    contactList.onclick = function(e) {
        if (e.target.classList.contains("delete-btn")) {
            const contactId = e.target.parentElement.getAttribute("data-id");
            contacts = contacts.filter((contact) => contact.id !== Number(contactId));
            saveContacts(contacts);
            renderContacts(contactList, contacts);
        } else if (e.target.classList.contains("edit-btn")) {
            const contactId = e.target.parentElement.getAttribute("data-id");
            const contactToEdit = contacts.find(
                (contact) => contact.id === Number(contactId)
            );
            document.getElementById("name").value = contactToEdit.name;
            document.getElementById("phone").value = contactToEdit.phone;

            addContactBtn.textContent = "Update Contact";
            addContactBtn.onclick = function() {
                const updatedName = document.getElementById("name").value.trim();
                const updatedPhone = document.getElementById("phone").value.trim();

                if (!validateName(updatedName)) {
                    showError(
                        document.getElementById("name"),
                        "Name should contain only letters."
                    );
                    return;
                }

                if (!validatePhone(updatedPhone)) {
                    showError(
                        document.getElementById("phone"),
                        "Phone should contain only numbers."
                    );
                    return;
                }

                contacts = contacts.map((contact) =>
                    contact.id === Number(contactId) ?
                    {...contact, name: updatedName, phone: updatedPhone } :
                    contact
                );

                saveContacts(contacts);
                renderContacts(contactList, contacts);
                contactForm.reset();
                addContactBtn.textContent = "Add Contact";
                addContactBtn.onclick = contactForm.onsubmit;
            };
        }
    };

    filterInput.oninput = function() {
        const filterValue = filterInput.value.toLowerCase();
        const filteredContacts = contacts.filter(
            (contact) =>
            contact.name.toLowerCase().includes(filterValue) ||
            contact.phone.includes(filterValue)
        );
        renderContacts(contactList, filteredContacts);
    };

    clearFilterBtn.onclick = function() {
        filterInput.value = "";
        renderContacts(contactList, contacts);
    };

    renderContacts(contactList, contacts);
}