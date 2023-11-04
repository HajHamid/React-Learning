import axios from 'axios'

const fetchImage = async (term) => {
    const url = 'https://api.unsplash.com/search/photos'
    const response = await axios.get(url, {
        headers: {
            "Accept-Version": "v1",
            "Authorization": "Client-ID k3Nf5ag9eoF9L8BszZqbN_nsyWHUG0ICT-Eglf870uI",
        },
        params: {
            'per_page': 20,
            'query': term
        }
    })

    return response.data.results
}

export default fetchImage