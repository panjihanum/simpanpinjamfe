import axios from 'axios'
import ENV from './env.config'

export const axiosCustom = axios.create({
  baseURL: ENV.SERVER_URL,
})
