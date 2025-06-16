export const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
export const isValidPassword = (pass) => pass.length >= 6;
