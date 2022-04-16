import axios from "axios";

function catsApiGet(url, params) {
    return axios.get(url, {
        params: params,
        headers: {
            'x-api-key': '2e226e54-abba-469e-8f53-2c59cd789854',
        }
    })
}

export default catsApiGet