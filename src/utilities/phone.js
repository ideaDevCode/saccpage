export const REGEX_PHONE = /09(0[1-2]|1[\d]|3[\d]|2[0-1])[\d]{3}[\d]{4}/g

export const errorPhone = (phone) => {
    if (phone.length < 13 || REGEX_PHONE.test(phone)) return true;
    return false;
}