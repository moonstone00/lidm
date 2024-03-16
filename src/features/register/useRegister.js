import { useMutation } from "react-query";
import { axiosInstance } from "../../lib/axios";

export default function useRegister({onSuccess, onError}) {
    return useMutation(
        async (formData) => {
            const {username, nama, nip, telpon, alamat, tanggal_lahir, token, password, role, jenis_kelamin} = formData;
            try {
                const responseData = await axiosInstance.post('/registration', {
                    username, 
                    nama,
                    nip: parseInt(nip),
                    telpon,
                    role,
                    alamat,
                    tanggal_lahir, 
                    token,
                    password,
                    role,
                    jenis_kelamin
                })
                // console.log('response data : ', responseData)
                return responseData.data
            } catch (error) {
                throw new Error('Error pada data register', Error.response.data.message)
            }
        },
        {
            onSuccess,
            onError
        }
    )
}