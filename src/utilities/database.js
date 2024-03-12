export const getAllPlans = async() => {
    try {
        const request = await fetch('utilities/plans.js');
        const response = await request.text();
        return response;
    } catch (error) {
        console.log(error)
    }
}
