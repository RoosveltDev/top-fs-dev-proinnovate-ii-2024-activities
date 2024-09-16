export function validateName(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

export function validatePhone(phone) {
    return /^[0-9]+$/.test(phone);
}