import axios from 'axios'
const baseUrl = '/api/locations'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (newLocation) => {
    const response = await axios.post(baseUrl, newLocation)
    return response.data
}

export default { getAll, create }