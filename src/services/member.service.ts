import { axiosCustom } from 'config/axios.config'

const url = '/member'

async function getAllMembers() {
  return await axiosCustom(url)
}

export default {
  getAllMembers,
}
