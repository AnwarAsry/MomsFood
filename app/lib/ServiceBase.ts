const BASE_URL = `${process.env.VITE_API_URL}/recipes`;

// Get function
export const get = async <T>(url: string) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`);
        return response.json() as T;
    } catch (error) {
        throw error;
    }
};

// Create function
export const post = async <T>(url: string, data?: T) => {
    try {
        const response = await fetch(`${BASE_URL}${url}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        return response.json();
    } catch (error) {
        throw error;
    }
};