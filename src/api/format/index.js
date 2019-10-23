import axios from 'axios'
import Url from '../../config/baseUrl.js'

axios.defaults.withCredentials = true

 const createFormat = (bookTitle) => {
  return axios.post(Url + '/format', {
    'book_title': bookTitle
  })
}

export default createFormat;