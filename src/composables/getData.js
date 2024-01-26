import axios from 'axios'
import { ref } from 'vue';

export const useGetData = () => {
    const data = ref(null);
    const loading = ref(true);
    const dataError = ref(null);

    const getData = async (url) => {
        loading.value = true;
        try {
            const res = await axios.get(url)
            data.value = res.data
        } catch (error) {
            dataError.value = "Error al conectar con el servidor";
        } finally {
            loading.value = false;
        }
    };

    return {
        getData,
        data,
        loading,
        dataError
    }
}