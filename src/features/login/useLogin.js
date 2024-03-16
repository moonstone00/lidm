import { useMutation } from 'react-query'
import { axiosInstance } from '../../lib/axios.js'

export default function useLogin({ onSuccess, onError }) {
    return useMutation(
        async (formData) => {
            const { username, password } = formData;
            try {
                const response = await axiosInstance.post('/login', {
                    username,
                    password
                })
                // console.log(response)
                return response.data
            } catch (error) {
                throw new Error(error.response.data.message);
            }
        },
        {
            onSuccess,
            onError
        }
    );
}

