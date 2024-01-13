import axios from 'axios'
const baseUrl = '/api/places'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newPlace) => {
    const response = await axios.post(baseUrl, newPlace)
    return response.data
}

export default { getAll, create }