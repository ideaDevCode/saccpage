/**
 * Regex email
 *  @type {*} 
 * */
export const EMAIL_REGEX = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;

/**
 *
 * Email incorrecto?
 * @param {*} email
 * @return {*} 
 */
export const errorEmail = (email) => {
    if (!email || email.length <= 15 || !EMAIL_REGEX.test(email)) return true;
    return false;
}