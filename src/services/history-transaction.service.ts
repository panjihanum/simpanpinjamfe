import { axiosCustom } from 'config/axios.config'

const url = '/history-transaction'

async function getHistoryTransaction(memberId: string) {
  return await axiosCustom(`${url}/${memberId}`)
}

export default {
  getHistoryTransaction,
}
