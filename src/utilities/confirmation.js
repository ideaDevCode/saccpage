import { API } from "./variables";

export const sendEmailCodeConfirmation = async(formData) => {
    try {
        const request = await fetch(`${API}/code`, {
            method: 'POST',
            body: formData
        })
        if (!request.ok) throw new Error("Error interno!");
        const response = await request.json();
        return response;
    } catch (error) {
        return {
            status: 500,
            title: "Error interno del servidor",
            details: "No fue posible establecer la cuenta, porfavor intente más tarde!"
        }
    }
}