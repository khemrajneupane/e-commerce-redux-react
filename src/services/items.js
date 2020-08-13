import axios from 'axios'
const baseUrl = 'https://pdf-node.herokuapp.com/api/items'
const createPdfUrl = 'https://pdf-node.herokuapp.com/api/create-pdf'
const getPdfUrl = 'https://pdf-node.herokuapp.com/api/fetch-pdf'

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const getById = async (itemId) => {
    const request = await axios.get(`${baseUrl}/${itemId}`)
    return request.data
}

const create = async (newObject) => {
    const request = await axios.post(createPdfUrl, newObject);
    return request;
  };
  const getPdf = async () => {
    const request = await axios.get(getPdfUrl,{ responseType: 'blob' })
    return request.data
}
export default { getAll, getById, create, getPdf }