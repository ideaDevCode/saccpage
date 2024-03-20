import { API } from "./variables";

export const registerForNewAcount = async(formData) => {
    try {
        const request = await fetch(`${API}/usuarios`, {
            method: 'POST',
            body: formData
        })
        if (!request.ok) throw new Error("Error interno!");
        const response = await request.json();
        return response;
    } catch (error) {
        return {
            status: 500,
            title: "Error",
            details: "Error de servidor"
        }
    }
}