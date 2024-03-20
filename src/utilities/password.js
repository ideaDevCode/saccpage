export const errorPassword = (password) => {
    if (password.length >= 35 || password.length <= 5) return true;
    return false;
}