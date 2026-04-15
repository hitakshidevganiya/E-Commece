import { axiosInstance } from "./axiosInstance";


export const axiosBaseQuery = () =>

    async ({ url, method, data }) => {
        try {
            const result = await axiosInstance({
                url,
                method,
                data,
            });

            return { data: result.data };
        } catch (error) {
            return {
                error: {
                    status: error.response?.status,
                    data: error.response?.data,
                },
            };
        }
    };